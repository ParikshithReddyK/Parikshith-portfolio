import Layout from "../components/Layout";
import { profile, skillCategories } from "../data/content";

export default function Skills() {
  return (
    <Layout left={profile.base} right="SKILLS / VOL.05">
      <div className="relative flex-1 px-6 md:px-10 py-8 animate-fade-in overflow-y-auto">
        <p className="font-mono text-xs tracking-widest text-ember uppercase mb-2">
          Capabilities
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-bone font-medium mb-6">
          What I build with.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="border border-line rounded-md p-5 bg-surface/40"
            >
              <p className="font-mono text-[10px] tracking-widest text-mute uppercase mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs text-bone border border-line rounded px-2 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}