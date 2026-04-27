import { motion as Motion } from "framer-motion";
import { contact } from "../../data/site";
import { Section } from "../ui/Section";
import { ExternalLinkIcon } from "../ui/ExternalLinkIcon";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import {
  revealViewport,
  sectionVariants,
  itemVariants,
} from "../../lib/motion";

const links = [
  { label: "Email", key: "email", href: (v) => `mailto:${v}`, external: false },
  {
    label: "GitHub",
    key: "github",
    href: (v) => v,
    external: true,
    hint: "Profile and repositories",
  },
  {
    label: "LinkedIn",
    key: "linkedin",
    href: (v) => v,
    external: true,
    hint: "Professional profile",
  },
];

export function Contact({ profile }) {
  const reduced = useReducedMotion();

  return (
    <Section
      id="contact"
      title="Contact"
      className="border-t border-border/40 !pb-28 md:!pb-36"
    >
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
          Reach out
        </Motion.p>
        <Motion.div
          variants={itemVariants(reduced)}
          className="mt-5 h-px w-16 bg-gradient-to-r from-accent/70 to-transparent"
          aria-hidden
        />

        <Motion.div
          variants={itemVariants(reduced)}
          className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:items-start lg:gap-x-16 xl:gap-x-20"
        >
          <div className="min-w-0 max-w-prose">
            <p className="text-body">{contact.intro}</p>
          </div>

          <ul className="flex min-w-0 flex-col gap-3.5 lg:max-w-md lg:justify-self-end xl:max-w-lg">
            {links.map((item) => {
              const value = profile[item.key];
              const href = item.href(value);
              const line = item.hint ?? value;
              return (
                <li key={item.key}>
                  <a
                    href={href}
                    {...(item.external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="group flex items-start justify-between gap-4 rounded-lg border border-border/90 bg-surface px-5 py-4 transition-[border-color,background-color] duration-200 hover:border-accent/25 hover:bg-background/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:px-6 md:py-5"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                        {item.label}
                      </span>
                      <p className="mt-2 text-[0.9375rem] font-medium leading-snug text-foreground">
                        {line}
                      </p>
                    </div>
                    {item.external ? (
                      <span className="mt-0.5 shrink-0 text-accent opacity-80 transition-opacity group-hover:opacity-100">
                        <ExternalLinkIcon />
                      </span>
                    ) : (
                      <span className="mt-1 shrink-0 font-mono text-xs text-muted-foreground transition-colors group-hover:text-accent">
                        →
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </Motion.div>
      </Motion.div>
    </Section>
  );
}
