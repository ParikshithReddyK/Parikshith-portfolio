import Layout from "../components/Layout";
import { profile, certifications } from "../data/content";

export default function Certifications() {
  return (
    <Layout left={profile.base} right="CERTS / VOL.06">
      <div className="relative flex-1 px-6 md:px-10 py-8 animate-fade-in overflow-y-auto">
        <p className="font-mono text-xs tracking-widest text-ember uppercase mb-2">
          Certifications
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-bone font-medium mb-6">
          Continuous learning.
        </h2>

        {certifications.length > 0 ? (
          <div className="space-y-3 max-w-2xl">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="border border-line rounded-md p-4 bg-surface/40 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="h-9 w-9 rounded border border-line flex items-center justify-center shrink-0">
                    <span className="h-2 w-2 rounded-full bg-ember" />
                  </span>
                  <div>
                    <p className="text-bone text-sm font-medium font-body">
                      {cert.title}
                      {cert.platform && (
                        <span className="text-mute"> ({cert.platform})</span>
                      )}
                    </p>
                    <p className="font-mono text-[10px] tracking-widest text-mute uppercase mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-mute shrink-0">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-mute text-sm font-body">
            Certifications coming soon.
          </p>
        )}

        <p className="mt-6 font-mono text-xs text-mute uppercase tracking-widest">
          Always exploring and learning new technologies.
        </p>
      </div>
    </Layout>
  );
}