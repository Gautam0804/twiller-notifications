"use client";

import { useState } from "react";
import TweetInput from "../components/TweetInput";
import TweetList from "../components/TweetList";
import ProfileSettings from "../components/ProfileSettings";
import ThemeToggle from "../components/ThemeToggle";
import { containsKeyword } from "../utils/keywordCheck";
import { showNotification } from "../utils/notification";

type Tweet = {
  id: number;
  content: string;
  createdAt: string;
  author: string;
};

export default function Page() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [notifyEnabled, setNotifyEnabled] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const handleTweet = (content: string) => {
    const tweet: Tweet = {
      id: Date.now(),
      content,
      createdAt: new Date().toLocaleTimeString(),
      author: "Gautam",
    };

    setTweets([tweet, ...tweets]);

    if (notifyEnabled && containsKeyword(content)) {
      showNotification(content);
      setHistory((h) => [content, ...h].slice(0, 5));
    }
  };

  return (
    <main className="min-h-screen flex justify-center py-10 px-4">
      <div className="w-full max-w-2xl space-y-6">

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-400">
              Twiller 🔔
            </h1>
            <p className="text-sm text-slate-400">
              Smart keyword notifications for tweets
            </p>
          </div>
          <ThemeToggle />
        </div>

        <ProfileSettings
          enabled={notifyEnabled}
          setEnabled={setNotifyEnabled}
        />

        {history.length > 0 && (
          <div className="bg-slate-800/70 border border-slate-700 p-4 rounded-xl">
            <h3 className="text-sm font-semibold mb-2">
              Notification History
            </h3>
            <ul className="text-sm text-slate-300 space-y-1">
              {history.map((h, i) => (
                <li key={i}>🔔 {h}</li>
              ))}
            </ul>
          </div>
        )}

        <TweetInput onTweet={handleTweet} />
        <TweetList tweets={tweets} />
      </div>
    </main>
  );
}
