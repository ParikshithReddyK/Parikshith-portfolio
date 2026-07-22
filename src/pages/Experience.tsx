import Layout from "../components/Layout";
import { profile, experiences } from "../data/content";

export default function Experience() {
  return (
    <Layout left={profile.base} right="EXPERIENCE / VOL.06">
      <div className="relative flex-1 px-6 md:px-10 py-8 animate-fade-in overflow-y-auto">
        <p className="font-mono text-xs tracking-widest text-ember uppercase mb-2">
          Experience
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-bone font-medium mb-6">
          Where I've worked.
        </h2>
        <div className="space-y-6 max-w-2xl">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="border-l-2 border-ember pl-5"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                <h3 className="font-display text-lg md:text-xl text-bone font-medium">
                  {exp.role}
                </h3>
                <span className="font-mono text-[10px] tracking-widest text-mute uppercase">
                  {exp.period}
                </span>
              </div>
              <p className="font-mono text-xs text-ember uppercase tracking-wide mt-1">
                {exp.company} · {exp.location}
              </p>
              <ul className="mt-3 space-y-1.5">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-mute text-sm font-body leading-relaxed">
                    — {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}