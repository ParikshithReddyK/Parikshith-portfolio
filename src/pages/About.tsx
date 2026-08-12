import Layout from "../components/Layout";
import GlowOrb from "../components/GlowOrb";
import { profile, capabilities } from "../data/content";

export default function About() {
  return (
    <Layout left={profile.base} right="ABOUT / VOL.02">
      <GlowOrb className="w-[400px] h-[400px] top-1/3 -left-40" />

      <div className="relative flex-1 flex flex-col md:flex-row px-6 md:px-10 py-8 gap-12 animate-fade-in overflow-y-auto">
        {/* Left */}
        <div className="flex-1 max-w-xl">
          <p className="font-mono text-xs tracking-widest text-ember uppercase mb-4">
            About
          </p>

          <h2 className="font-display text-3xl md:text-5xl text-bone font-medium leading-tight">
            Building software that scales.
            <br />
            Learning systems that last.
          </h2>

          {profile.aboutSummary.map((paragraph, i) => (
            <p
              key={i}
              className="mt-5 text-mute text-base md:text-lg font-body leading-8 first:mt-6"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Right */}
        <div className="flex-1 max-w-md">
          <p className="font-mono text-xs tracking-widest text-mute uppercase mb-4">
            Core Focus
          </p>

          <div className="border border-line rounded-md divide-y divide-line bg-surface/30">
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="flex items-center justify-between gap-4 px-4 py-3"
              >
                <span className="font-mono text-xs text-mute uppercase whitespace-nowrap">
                  {cap.label}
                </span>

                <span className="font-mono text-xs text-bone text-right">
                  {cap.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}