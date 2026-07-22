interface GlowOrbProps {
  className?: string;
}

export default function GlowOrb({ className = "" }: GlowOrbProps) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full animate-pulse-slow ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(255,106,61,0.35) 0%, rgba(255,106,61,0.08) 45%, transparent 70%)",
        filter: "blur(20px)",
      }}
    />
  );
}