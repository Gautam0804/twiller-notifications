"use client";

import { useState } from "react";

const MAX_CHARS = 280;

export default function TweetInput({
  onTweet,
}: {
  onTweet: (text: string) => void;
}) {
  const [text, setText] = useState("");

  return (
    <div className="bg-slate-800/70 border border-slate-700 p-4 rounded-xl">
      <textarea
        rows={3}
        maxLength={MAX_CHARS}
        placeholder="What’s happening?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full bg-transparent focus:outline-none resize-none"
      />

      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-slate-400">
          {text.length}/{MAX_CHARS}
        </span>
        <button
          onClick={() => {
            if (!text.trim()) return;
            onTweet(text);
            setText("");
          }}
          className="bg-blue-500 px-4 py-1 rounded-full text-sm"
        >
          Tweet
        </button>
      </div>
    </div>
  );
}
