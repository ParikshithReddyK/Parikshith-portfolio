import Layout from "../components/Layout";
import GlowOrb from "../components/GlowOrb";
import { profile, capabilities } from "../data/content";

export default function About() {
  return (
    <Layout left={profile.base} right="ABOUT / VOL.02">
      <GlowOrb className="w-[400px] h-[400px] top-1/3 -left-40" />

      <div className="relative flex-1 flex flex-col md:flex-row px-6 md:px-10 py-8 gap-12 animate-fade-in overflow-y-auto">
        {/* Left */}
        <div className="flex-1 max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-ember uppercase mb-4">
            About
          </p>

          <h2 className="font-display text-3xl md:text-5xl text-bone font-medium leading-tight">
            Building software that scales.
            <br />
            Learning systems that last.
          </h2>

          <p className="mt-6 text-mute text-base md:text-lg font-body leading-8">
            I'm <span className="text-bone">Parikshith Reddy</span>, an
            Associate Software Engineer at SplashBI, where I work on
            production-grade enterprise software. My day-to-day work involves
            debugging complex backend issues, optimizing Oracle SQL queries,
            investigating production incidents, and delivering reliable fixes
            through Git-based development workflows.
          </p>

          <p className="mt-5 text-mute text-base md:text-lg font-body leading-8">
            Beyond my professional work, I'm focused on becoming a Backend &
            Cloud Engineer with AI integration expertise. I'm deeply interested
            in distributed systems, microservices, scalable architectures,
            cloud-native applications, and building software that remains
            reliable under real-world traffic.
          </p>

          <p className="mt-5 text-mute text-base md:text-lg font-body leading-8">
            I believe the best way to learn engineering is by building. That's
            why I spend my time creating production-inspired projects,
            strengthening my foundation in Data Structures & Algorithms,
            mastering Spring Boot and AWS, and exploring modern AI systems such
            as Retrieval-Augmented Generation (RAG), LLM integrations, and
            intelligent backend services.
          </p>

          <p className="mt-5 text-mute text-base md:text-lg font-body leading-8">
            My long-term vision is to contribute to engineering teams solving
            complex, large-scale problems while pursuing graduate studies in
            Artificial Intelligence and Machine Learning. Every project I build
            and every technology I learn is a step toward designing systems that
            are scalable, resilient, and impactful.
          </p>
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
                className="flex items-center justify-between px-4 py-3"
              >
                <span className="font-mono text-xs text-mute uppercase">
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