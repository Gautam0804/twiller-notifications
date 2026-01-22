"use client";

interface Tweet {
  id: number;
  content: string;
  createdAt: string;
  author: string;
}

const highlight = (text: string) =>
  text.replace(
    /(cricket|science)/gi,
    `<span class="text-blue-400 font-semibold">$1</span>`
  );

export default function TweetList({ tweets }: { tweets: Tweet[] }) {
  return (
    <div className="space-y-4">
      {tweets.map((t) => (
        <div
          key={t.id}
          className="bg-slate-800/70 border border-slate-700 p-4 rounded-xl"
        >
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>@{t.author}</span>
            <span>{t.createdAt}</span>
          </div>

          {/(cricket|science)/i.test(t.content) && (
            <span className="inline-block text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full mb-2">
              🔔 Keyword Match
            </span>
          )}

          <p
            className="text-sm"
            dangerouslySetInnerHTML={{
              __html: highlight(t.content),
            }}
          />
        </div>
      ))}
    </div>
  );
}
