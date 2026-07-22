import Layout from "../components/Layout";
import GlowOrb from "../components/GlowOrb";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <Layout left={profile.base} right="CONTACT / VOL.04">
      <GlowOrb className="w-[450px] h-[450px] top-1/4 left-1/2 -translate-x-1/2" />

      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 animate-fade-in">
        <p className="font-mono text-xs tracking-widest text-ember uppercase mb-4">
          Let's talk
        </p>

        <h2 className="font-display text-3xl md:text-5xl text-bone font-medium max-w-xl">
          Open to backend, systems, and research conversations.
        </h2>

        <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="bg-bone text-void font-mono text-xs tracking-widest uppercase px-5 py-3 rounded hover:bg-ember transition-colors"
          >
            {profile.email}
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-mute hover:text-ember transition-colors"
          >
            GitHub →
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-mute hover:text-ember transition-colors"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </Layout>
  );
}