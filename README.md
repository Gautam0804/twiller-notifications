# Twiller 🔔 – Keyword Notification System

Twiller is a modern web application built with **Next.js, TypeScript, and Tailwind CSS** that demonstrates a real-time keyword-based notification feature using the browser’s Notification API.

---

## 🚀 Features

- 🔔 **Keyword-based Notifications**
  - Triggers notifications when tweets contain **“cricket”** or **“science”**
  - Displays full tweet content in popup

- 🎛 **User-Controlled Notifications**
  - Enable/Disable notifications from profile settings
  - Preferences persist using `localStorage`

- 🌙 **Dark / Light Mode**
  - User toggle with persistent theme state

- 🧠 **Notification History**
  - Stores last 5 keyword-triggered notifications

- ✨ **Enhanced UX**
  - Keyword highlighting
  - Keyword match badge
  - Character limit with counter (280 chars)
  - Responsive modern UI using Tailwind CSS

---

## 🛠 Tech Stack

- Next.js (App Router)
- TypeScript (TSX)
- Tailwind CSS v4
- Browser Notification API
- PostCSS

---

## 📸 Screenshots

Screenshots are available in the `/screenshots` folder:
- Home (Light Mode)
- Home (Dark Mode)
- Notification Toggle ON
- Keyword Highlight
- Browser Notification Popup
- Notification History Panel

---

## ▶️ How to Run

```bash
npm install
npm run dev
