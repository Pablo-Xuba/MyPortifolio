import { motion as Motion } from "framer-motion";
import { Section } from "../ui/Section";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import {
  revealViewport,
  sectionVariants,
  itemVariants,
} from "../../lib/motion";

const groups = [
  { key: "languages", label: "Languages" },
  { key: "frameworks", label: "Frameworks" },
  { key: "tools", label: "Tools" },
  { key: "databases", label: "Databases" },
];

export function Skills({ skills }) {
  const reduced = useReducedMotion();

  return (
    <Section id="skills" title="Skills">
      <Motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        variants={sectionVariants(reduced)}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <Motion.p
          variants={itemVariants(reduced)}
          className="col-span-full font-mono text-[11px] font-medium uppercase tracking-[0.26em] text-muted-foreground"
        >
          Stack
        </Motion.p>
        <Motion.div
          variants={itemVariants(reduced)}
          className="col-span-full mt-0.5 h-px w-16 bg-gradient-to-r from-accent/70 to-transparent"
          aria-hidden
        />
        {groups.map((g) => {
          const items = skills[g.key] ?? [];
          return (
            <Motion.article
              key={g.key}
              variants={itemVariants(reduced)}
              className="flex h-full min-h-0 flex-col overflow-hidden rounded-lg border border-border/90 bg-surface"
            >
              <header className="shrink-0 border-b border-border/70 px-5 py-4 md:px-6 md:py-[1.125rem]">
                <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  {g.label}
                </h3>
              </header>
              <ul className="divide-y divide-border/50 px-5 py-1.5 md:px-6">
                {items.map((item) => (
                  <li
                    key={item}
                    className="py-3 text-[0.9375rem] leading-[1.45] text-foreground/95 md:text-[0.96875rem] md:leading-snug"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Motion.article>
          );
        })}
      </Motion.div>
    </Section>
  );
}
