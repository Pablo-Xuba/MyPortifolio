import { motion as Motion } from "framer-motion";
import { ExternalLinkIcon } from "../ui/ExternalLinkIcon";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { cardHoverTransition } from "../../lib/motion";

const metaRows = [
  { key: "role", label: "Role" },
  { key: "challenge", label: "Challenge" },
  { key: "result", label: "Result" },
];

const projectLinkClass =
  "inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-[#9ee4ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function ProjectCard({ project, index }) {
  const reduced = useReducedMotion();
  const idx = String(index).padStart(2, "0");

  return (
    <Motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border/90 bg-surface transition-[border-color,box-shadow] duration-300 hover:border-accent/25 hover:shadow-[0_1px_0_0_rgba(125,211,252,0.12)]"
      whileHover={
        reduced
          ? undefined
          : { y: -2, transition: cardHoverTransition(reduced) }
      }
    >
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="flex flex-1 flex-col px-6 pb-7 pt-7 md:px-8 md:pb-8 md:pt-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-balance font-display text-[1.125rem] font-semibold leading-tight tracking-tight text-foreground sm:text-xl md:text-[1.3125rem] md:leading-snug">
            {project.title}
          </h3>
          <span
            className="shrink-0 font-mono text-[11px] font-medium tabular-nums text-muted-foreground/80"
            aria-hidden
          >
            {idx}
          </span>
        </div>

        <p className="mt-5 max-w-prose text-body">
          {project.description}
        </p>

        <ul className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech}>
              <span className="inline-block rounded border border-border/80 bg-background/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                {tech}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-md border border-border/60 bg-background/25 p-5 md:p-6">
          <dl className="space-y-5 md:space-y-6">
            {metaRows.map((row) => (
              <div key={row.key}>
                <dt className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {row.label}
                </dt>
                <dd className="mt-2.5 text-[0.9375rem] leading-[1.55] text-foreground/90 md:text-sm md:leading-relaxed">
                  {project[row.key]}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border/60 pt-7">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={projectLinkClass}
            >
              Source
              <ExternalLinkIcon />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={projectLinkClass}
            >
              Live
              <ExternalLinkIcon />
            </a>
          )}
          {!project.githubUrl && !project.liveUrl && (
            <span className="text-sm text-muted-foreground">
              No public links yet
            </span>
          )}
        </div>
      </div>
    </Motion.article>
  );
}
