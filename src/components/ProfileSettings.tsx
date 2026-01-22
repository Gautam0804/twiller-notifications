"use client";

import { useEffect } from "react";
import { requestPermission } from "../utils/notification";

interface Props {
  enabled: boolean;
  setEnabled: (v: boolean) => void;
}

export default function ProfileSettings({ enabled, setEnabled }: Props) {
  useEffect(() => {
    const saved = localStorage.getItem("notifyEnabled");
    if (saved !== null) {
      setEnabled(saved === "true");
    }
  }, [setEnabled]);

  const toggle = async () => {
    const value = !enabled;
    setEnabled(value);
    localStorage.setItem("notifyEnabled", String(value));
    if (value) await requestPermission();
  };

  return (
    <div className="flex justify-between items-center bg-slate-800/70 border border-slate-700 p-4 rounded-xl">
      <div>
        <h3 className="font-semibold">Keyword Notifications</h3>
        <p className="text-xs text-slate-400">
          Alerts for cricket & science
        </p>
      </div>

      <button
        onClick={toggle}
        className={`relative h-6 w-11 rounded-full ${
          enabled ? "bg-blue-500" : "bg-slate-600"
        }`}
      >
        <span
          className={`absolute top-1 left-1 h-4 w-4 bg-white rounded-full transition ${
            enabled ? "translate-x-5" : ""
          }`}
        />
      </button>
    </div>
  );
}
