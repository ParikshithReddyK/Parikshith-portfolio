import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { profile, projects } from "../data/content";

export default function Projects() {
  return (
    <Layout left={profile.base} right="PROJECTS / VOL.03">
      <div className="relative flex-1 px-6 md:px-10 py-8 animate-fade-in overflow-y-auto">
        <p className="font-mono text-xs tracking-widest text-ember uppercase mb-2">
          Selected Work
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-bone font-medium mb-6">
          Systems I've built and broken.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}