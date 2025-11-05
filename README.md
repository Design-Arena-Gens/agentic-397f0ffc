# DAVCMC Launcher

A minimal Next.js app that immediately launches the official DAV College Managing Committee website (`davcmc.in`) on mobile devices while offering quick fallbacks and step-by-step guidance for iOS and Android users.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:3000` to preview the launcher.

### Production Build

```bash
npm run build
npm run start
```

## 🧩 Project Structure

```
app/
  layout.tsx      Root layout and metadata
  page.tsx        Launcher UI and redirect logic
  globals.css     Tailwind setup and global styling
```

## 🛠️ Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3

## ✨ Features

- Automatic redirect to `https://davcmc.in/`
- One-tap fallback button for manual launch
- Platform-specific tips for adding the site to a phone home screen
- Fully responsive and deploy-ready for Vercel

## 📄 License

MIT
