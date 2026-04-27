import { motion as Motion } from "framer-motion";
import { Section } from "../ui/Section";
import { ProjectCard } from "./ProjectCard";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import {
  revealViewport,
  sectionVariants,
  itemVariants,
} from "../../lib/motion";

export function Projects({ projects }) {
  const reduced = useReducedMotion();

  return (
    <Section id="projects" title="Projects">
      <Motion.div
        className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 lg:gap-9"
        variants={sectionVariants(reduced)}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <Motion.p
          variants={itemVariants(reduced)}
          className="col-span-full font-mono text-[11px] font-medium uppercase tracking-[0.26em] text-muted-foreground"
        >
          Selected work
        </Motion.p>
        <Motion.div
          variants={itemVariants(reduced)}
          className="col-span-full mt-0.5 h-px w-16 bg-gradient-to-r from-accent/70 to-transparent"
          aria-hidden
        />
        {projects.map((project, i) => (
          <Motion.div
            key={project.id}
            variants={itemVariants(reduced)}
            className="min-h-0"
          >
            <ProjectCard project={project} index={i + 1} />
          </Motion.div>
        ))}
      </Motion.div>
    </Section>
  );
}
