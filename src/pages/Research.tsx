import Layout from "../components/Layout";
import { profile, researchItems } from "../data/content";

export default function Research() {
  return (
    <Layout left={profile.base} right="RESEARCH / VOL.07">
      <div className="relative flex-1 px-6 md:px-10 py-8 animate-fade-in overflow-y-auto">
        <p className="font-mono text-xs tracking-widest text-ember uppercase mb-2">
          Research & Writing
        </p>

        <h2 className="font-display text-3xl md:text-4xl text-bone font-medium mb-6">
          What I'm exploring.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {researchItems.map((item) => (
            <div
              key={item.title}
              className="border border-line rounded-md p-5 bg-surface/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] tracking-widest text-ember uppercase">
                    {item.type}
                  </span>

                  <span className="font-mono text-[10px] tracking-widest text-mute uppercase">
                    {item.date}
                  </span>
                </div>

                <h3 className="font-display text-lg text-bone font-medium">
                  {item.title}
                </h3>

                <p className="mt-2 text-mute text-sm font-body leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 font-mono text-xs tracking-widest uppercase text-bone hover:text-ember transition-colors"
                >
                  Read →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}