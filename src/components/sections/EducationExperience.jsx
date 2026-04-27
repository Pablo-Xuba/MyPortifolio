import { motion as Motion } from "framer-motion";
import { Section } from "../ui/Section";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import {
  revealViewport,
  sectionVariants,
  itemVariants,
} from "../../lib/motion";

function EducationEntry({ entry }) {
  return (
    <article className="overflow-hidden rounded-lg border border-border/90 bg-surface">
      <header className="border-b border-border/70 bg-background/20 px-6 py-6 md:px-8 md:py-7">
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            {entry.dates}
          </p>
          <h3 className="mt-3 text-balance font-display text-xl font-semibold leading-[1.2] tracking-tight text-foreground md:text-2xl md:leading-[1.15]">
            {entry.title}
          </h3>
          <p className="mt-2.5 text-[0.9375rem] leading-snug text-muted md:text-base">
            {entry.org}
          </p>
        </div>
      </header>
      <ul className="divide-y divide-border/50 px-6 md:px-8">
        {entry.details.map((line) => (
          <li
            key={line}
            className="py-4 text-body first:pt-5 last:pb-5"
          >
            {line}
          </li>
        ))}
      </ul>
    </article>
  );
}

function ExperienceTimeline({ title, org, dates, details, isLast }) {
  return (
    <div className="relative pl-8">
      <span
        className="absolute left-0 top-2 h-2 w-2 rounded-full bg-accent"
        aria-hidden
      />
      {!isLast && (
        <span
          className="absolute left-[3px] top-4 bottom-0 w-px bg-border"
          aria-hidden
        />
      )}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h4 className="font-display text-base font-semibold text-foreground">
          {title}
        </h4>
        <p className="font-mono text-xs text-muted-foreground sm:text-right">
          {dates}
        </p>
      </div>
      <p className="mt-1 text-sm text-muted">{org}</p>
      <ul className="mt-4 list-disc space-y-2.5 pl-4 text-[0.9375rem] leading-[1.6] text-muted marker:text-muted-foreground md:text-sm md:leading-relaxed">
        {details.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceEmpty() {
  return (
    <div className="rounded-lg border border-border/80 bg-background/20 px-6 py-8 md:px-8 md:py-9">
      <p className="max-w-prose text-body">
        Internships, employment, and other formal roles belong in this column when I
        have them to show. Nothing is listed here yet so the layout stays honest.
      </p>
    </div>
  );
}

export function EducationExperience({ education, experience }) {
  const reduced = useReducedMotion();
  const hasExperience = experience.length > 0;

  return (
    <Section id="experience" title="Education and experience">
      <Motion.div
        variants={sectionVariants(reduced)}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <Motion.p
          variants={itemVariants(reduced)}
          className="font-mono text-[11px] font-medium uppercase tracking-[0.26em] text-muted-foreground"
        >
          Background
        </Motion.p>
        <Motion.div
          variants={itemVariants(reduced)}
          className="mt-5 h-px w-16 bg-gradient-to-r from-accent/70 to-transparent"
          aria-hidden
        />

        <div
          className={
            hasExperience
              ? "mt-12 grid gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12"
              : "mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-x-16 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,20rem)]"
          }
        >
          <Motion.div variants={itemVariants(reduced)} className="min-w-0 space-y-6">
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Education
            </h3>
            <div className="space-y-9">
              {education.map((entry, i) => (
                <EducationEntry
                  key={`edu-${entry.org}-${entry.title}-${i}`}
                  entry={entry}
                />
              ))}
            </div>
          </Motion.div>

          <Motion.div variants={itemVariants(reduced)} className="min-w-0">
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Experience
            </h3>
            <div className="mt-7 space-y-12">
              {hasExperience ? (
                experience.map((entry, i) => (
                  <ExperienceTimeline
                    key={`exp-${entry.org}-${entry.title}-${i}`}
                    title={entry.title}
                    org={entry.org}
                    dates={entry.dates}
                    details={entry.details}
                    isLast={i === experience.length - 1}
                  />
                ))
              ) : (
                <ExperienceEmpty />
              )}
            </div>
          </Motion.div>
        </div>
      </Motion.div>
    </Section>
  );
}
