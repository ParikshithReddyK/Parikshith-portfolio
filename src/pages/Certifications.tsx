import Layout from "../components/Layout";
import { profile, certifications } from "../data/content";

export default function Certifications() {
  return (
    <Layout left={profile.base} right="CERTS / VOL.08">
      <div className="relative flex-1 px-6 md:px-10 py-8 animate-fade-in overflow-y-auto">
        <p className="font-mono text-xs tracking-widest text-ember uppercase mb-2">
          Certifications
        </p>

        <h2 className="font-display text-3xl md:text-4xl text-bone font-medium mb-6">
          Verified skills.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="border border-line rounded-md p-5 bg-surface/40 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-base text-bone font-medium">
                  {cert.title}
                </h3>

                <p className="font-mono text-xs text-ember uppercase tracking-wide mt-1">
                  {cert.issuer}
                </p>

                <p className="font-mono text-[10px] text-mute uppercase tracking-widest mt-1">
                  {cert.date}
                </p>
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 font-mono text-xs tracking-widest uppercase text-bone hover:text-ember transition-colors"
                >
                  Verify →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}