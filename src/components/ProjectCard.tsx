import type { Project } from "../data/content";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-line rounded-md p-5 flex flex-col justify-between hover:border-ember/60 transition-colors bg-surface/40">
      <div>
        <p className="font-mono text-[10px] tracking-widest text-ember uppercase mb-2">
          {project.tag}
        </p>
        <h3 className="font-display text-lg md:text-xl text-bone font-medium">
          {project.title}
        </h3>
        <p className="mt-2 text-mute text-sm font-body leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[10px] uppercase tracking-wide text-mute border border-line rounded px-2 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}