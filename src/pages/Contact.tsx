import Layout from "../components/Layout";
import GlowOrb from "../components/GlowOrb";
import { profile } from "../data/content";

const rows = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Location", value: profile.location },
  {
    label: "GitHub",
    value: profile.github.replace("https://", ""),
    href: profile.github,
  },
  {
    label: "LinkedIn",
    value: profile.linkedin.replace("https://", ""),
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <Layout left={profile.base} right="CONTACT / VOL.07">
      <GlowOrb className="w-[450px] h-[450px] top-1/4 right-0" />

      <div className="relative flex-1 flex flex-col justify-center px-6 md:px-10 animate-fade-in">
        <p className="font-mono text-xs tracking-widest text-ember uppercase mb-4">
          Let's talk
        </p>

        <h2 className="font-display text-3xl md:text-5xl text-bone font-medium max-w-xl leading-tight">
          {profile.contactTagline}
        </h2>

        <div className="mt-8 space-y-4 max-w-md">
          {rows.map((row) =>
            row.href ? (
              <a
                key={row.label}
                href={row.href}
                target={row.href.startsWith("http") ? "_blank" : undefined}
                rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between border-b border-line pb-3 group"
              >
                <span className="font-mono text-[10px] tracking-widest text-mute uppercase">
                  {row.label}
                </span>

                <span className="font-mono text-sm text-bone group-hover:text-ember transition-colors">
                  {row.value}
                </span>
              </a>
            ) : (
              <div
                key={row.label}
                className="flex items-center justify-between border-b border-line pb-3"
              >
                <span className="font-mono text-[10px] tracking-widest text-mute uppercase">
                  {row.label}
                </span>

                <span className="font-mono text-sm text-bone">
                  {row.value}
                </span>
              </div>
            )
          )}
        </div>

        <a
          href={profile.resumeUrl}
          className="mt-8 inline-block w-fit bg-bone text-void font-mono text-xs tracking-widest uppercase px-5 py-3 rounded hover:bg-ember transition-colors"
        >
          Download Resume →
        </a>
      </div>
    </Layout>
  );
}