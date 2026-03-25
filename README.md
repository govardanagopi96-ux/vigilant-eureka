# 🤖 Prof. Bolt — Node.js Edition
**Created by Gopika · Finance Communicator & Public Speaker**

Turn any document into an animated AI-powered lesson in seconds.

---

## Quick Start (5 minutes)

### 1. Get a Free Gemini API Key
Go to https://aistudio.google.com/app/apikey
Sign in with Google → Create API Key → Copy it

### 2. Install & Run Locally
```bash
# Install dependencies
npm install

# Create your .env file
cp .env.example .env

# Open .env in Notepad and paste your Gemini key
# GEMINI_API_KEY=AIzaSy...your key here...

# Start the app
npm start

# Open in browser
http://localhost:3000
```

---

## Deploy Free on Railway (Recommended)

1. Go to https://railway.app → Sign up with GitHub
2. Click "New Project" → "Deploy from GitHub repo"
   OR click "New Project" → "Empty Project" → drag this folder
3. Add environment variable:
   - GEMINI_API_KEY = your key
4. Railway gives you a live URL instantly

---

## Deploy Free on Render

1. Go to https://render.com → Sign up
2. New Web Service → connect your repo or upload files
3. Build command: `npm install`
4. Start command: `npm start`
5. Add environment variable: GEMINI_API_KEY
6. Free tier (note: sleeps after 15min inactivity)

---

## Deploy Free on Glitch

1. Go to https://glitch.com → New Project → Import from GitHub
   OR create new project and drag files
2. In Glitch terminal: add GEMINI_API_KEY to .env
3. Your app is live at yourproject.glitch.me

---

## Features
- ⚡ Auto Gemini API — no key needed from users
- 🤖 Prof. Bolt animated robot teacher
- 🎯 Step-by-step lesson with keywords and visuals
- 📱 Works on any device
- 🎬 Built-in screen recording (Chrome)
- 📊 5 uses/day limit per user
- 🎨 5 colour themes auto-selected per lesson
- ⌨️ Keyboard shortcuts (Space, Arrow keys)

## Project Structure
```
profbolt-node/
├── server.js              ← Express + Gemini SDK
├── public/
│   └── index.html         ← Full frontend UI
├── package.json
├── .env.example           ← Copy to .env and add your key
└── README.md
```

## Created by
Gopika — Finance Communicator, Public Speaker, Kerala
LinkedIn: https://www.linkedin.com/in/gopika
Podcasts: Just As It Is | A-Z of Professional Excellence
