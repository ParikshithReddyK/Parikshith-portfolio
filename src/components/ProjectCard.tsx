import type { Project } from "../data/content";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-line rounded-md p-5 bg-surface/40 hover:border-ember/60 transition-colors">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex items-start gap-4">
          <span className="font-mono text-xs text-ember border border-ember/40 rounded-full h-7 w-7 flex items-center justify-center shrink-0">
            {project.number}
          </span>

          <div>
            <p className="font-mono text-[10px] tracking-widest text-ember uppercase mb-1">
              {project.tag}
            </p>

            <h3 className="font-display text-lg text-bone font-medium">
              {project.title}
            </h3>

            <p className="mt-1 text-mute text-sm font-body leading-relaxed max-w-xl">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
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
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 self-start font-mono text-xs tracking-widest uppercase border border-line rounded px-3 py-2 text-bone hover:border-ember hover:text-ember transition-colors whitespace-nowrap"
          >
            View on GitHub →
          </a>
        )}
      </div>
    </div>
  );
}