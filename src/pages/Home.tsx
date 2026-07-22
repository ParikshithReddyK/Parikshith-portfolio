import Layout from "../components/Layout";
import GlowOrb from "../components/GlowOrb";
import SignalFeed from "../components/SignalFeed";
import { Link } from "react-router-dom";
import { profile } from "../data/content";

export default function Home() {
  return (
    <Layout left={profile.base} right={`${profile.name.toUpperCase()}.SYS / VOL.01`}>
      <GlowOrb className="w-[500px] h-[500px] -top-40 -right-40" />

      <div className="relative flex-1 flex flex-col md:flex-row items-center px-6 md:px-10 gap-10 animate-fade-in">
        <div className="flex-1 max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-ember uppercase mb-4">
            System Status: Online
          </p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-bone font-medium">
            {profile.tagline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-mute text-base md:text-lg max-w-lg font-body">
            {profile.summary}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/projects"
              className="bg-bone text-void font-mono text-xs tracking-widest uppercase px-5 py-3 rounded hover:bg-ember hover:text-void transition-colors"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="font-mono text-xs tracking-widest uppercase text-bone hover:text-ember transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <SignalFeed />
        </div>
      </div>
    </Layout>
  );
}