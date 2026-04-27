import { motion as Motion } from "framer-motion";
import { Section } from "../ui/Section";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import {
  revealViewport,
  sectionVariants,
  itemVariants,
} from "../../lib/motion";

export function About({ paragraphs }) {
  const reduced = useReducedMotion();

  return (
    <Section id="about" title="About">
      <Motion.div
        className="max-w-prose"
        variants={sectionVariants(reduced)}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <Motion.p
          variants={itemVariants(reduced)}
          className="font-mono text-[11px] font-medium uppercase tracking-[0.26em] text-muted-foreground"
        >
          How I work
        </Motion.p>
        <Motion.div
          variants={itemVariants(reduced)}
          className="mt-5 h-px w-16 bg-gradient-to-r from-accent/70 to-transparent"
          aria-hidden
        />
        <div className="mt-7 space-y-6">
          {paragraphs.map((text, i) => (
            <Motion.p
              key={i}
              variants={itemVariants(reduced)}
              className="text-body"
            >
              {text}
            </Motion.p>
          ))}
        </div>
      </Motion.div>
    </Section>
  );
}
