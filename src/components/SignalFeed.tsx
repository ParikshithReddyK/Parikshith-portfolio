import { useEffect, useState } from "react";
import { signalFeed } from "../data/content";

export default function SignalFeed() {
  const [index, setIndex] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % signalFeed.length);
        setVisible(true);
      }, 250);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const upcoming: string[] = [
    signalFeed[(index + 1) % signalFeed.length],
    signalFeed[(index + 2) % signalFeed.length],
  ];

  return (
    <div className="w-full max-w-xs border border-line bg-surface/60 rounded-md px-4 py-4 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
        <span className="font-mono text-[10px] tracking-widest text-mute uppercase">
          Signal Feed
        </span>
      </div>
      <p
        className={`font-mono text-xs text-bone transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {signalFeed[index]}
      </p>
      <div className="mt-2 space-y-1">
        {upcoming.map((line, i) => (
          <p key={i} className="font-mono text-xs text-mute/50">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}