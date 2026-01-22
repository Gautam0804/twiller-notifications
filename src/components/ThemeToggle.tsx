"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    if (dark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <button
      onClick={toggle}
      className="rounded-full border px-3 py-1 text-sm hover:bg-slate-800"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
