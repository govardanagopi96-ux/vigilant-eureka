require('dotenv').config();
const express = require('express');
const { GoogleGenAI } = require('@google/genai');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// ── Gemini Client ──────────────────────────────────────────────────
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM = `You are an animated cartoon educator. When given a document or text, respond ONLY with a valid JSON object — no markdown, no backticks, nothing outside JSON.

Format:
{
  "title": "Short punchy topic title (max 6 words)",
  "hook": "One powerful attention-grabbing sentence",
  "why_it_matters": "One sentence — why should the learner care?",
  "steps": [
    {
      "id": 1,
      "heading": "Step heading (3-5 words)",
      "explanation": "2-3 sentences. Use a simple analogy or real-life example. Max 55 words.",
      "emoji": "One relevant emoji",
      "keyword": "The single most important term in this step",
      "visual": "Describe in 3 words what image/icon represents this step (e.g. 'rising bar chart', 'locked vault door', 'handshake between people')"
    }
  ],
  "takeaway": "One unforgettable closing sentence the learner will remember",
  "character_mood": "excited|thinking|pointing|celebrating",
  "theme_color": "purple|cyan|amber|green|rose"
}

Rules:
- Exactly 3 to 5 steps
- Simple conversational language
- Real-world analogies always
- Return ONLY the JSON — nothing else`;

// ── API Route ──────────────────────────────────────────────────────
app.post('/api/explain', async (req, res) => {
  const { text } = req.body;
  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'No text provided.' });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'GEMINI_API_KEY not set in environment.' });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: `${SYSTEM}\n\nExplain this document:\n\n${text}`,
    });

    const raw = response.text || '';
    const clean = raw.replace(/```json|```/g, '').trim();
    const lesson = JSON.parse(clean);

    return res.json(lesson);
  } catch (err) {
    console.error('Gemini error:', err.message);
    return res.status(500).json({ error: err.message });
  }
});

// ── Health check ───────────────────────────────────────────────────
app.get('/health', (req, res) => res.json({ status: 'ok', version: '1.0.0' }));

// ── Serve frontend ─────────────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🤖 Prof. Bolt is live at http://localhost:${PORT}\n`);
});
