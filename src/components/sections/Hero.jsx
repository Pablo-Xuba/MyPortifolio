import { motion as Motion } from "framer-motion";
import { Container } from "../ui/Container";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { sectionVariants, itemVariants } from "../../lib/motion";

export function Hero({ profile }) {
  const reduced = useReducedMotion();

  return (
    <div
      id="top"
      className="relative min-h-[min(88svh,52rem)] overflow-hidden border-b border-border/80 pt-[6.5rem] md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-background to-background" />
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          }}
        />
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/[0.045] blur-3xl" />
      </div>

      <Container className="pb-28 md:pb-36">
        <Motion.div
          className="max-w-[40rem]"
          variants={sectionVariants(reduced)}
          initial="hidden"
          animate="visible"
        >
          <Motion.p
            variants={itemVariants(reduced)}
            className="font-mono text-[11px] font-medium uppercase tracking-[0.26em] text-muted-foreground"
          >
            {profile.location}
          </Motion.p>

          <Motion.h1
            variants={itemVariants(reduced)}
            className="mt-7 text-balance font-display text-[2.125rem] font-medium leading-[1.08] tracking-[-0.02em] text-foreground sm:text-5xl md:text-[3.125rem] md:leading-[1.05]"
          >
            {profile.name}
          </Motion.h1>

          <Motion.p
            variants={itemVariants(reduced)}
            className="mt-5 max-w-md text-[1.0625rem] leading-snug text-muted md:text-lg md:leading-relaxed"
          >
            {profile.title}
          </Motion.p>

          <Motion.div
            variants={itemVariants(reduced)}
            className="mt-9 h-px w-16 bg-gradient-to-r from-accent/70 to-transparent"
            aria-hidden
          />

          <Motion.p
            variants={itemVariants(reduced)}
            className="mt-8 max-w-prose text-body"
          >
            {profile.bio}
          </Motion.p>

          <Motion.nav
            variants={itemVariants(reduced)}
            className="mt-10 flex flex-wrap items-baseline gap-x-10 gap-y-3"
            aria-label="Primary actions"
          >
            <a
              href="#projects"
              className="group text-sm font-medium text-foreground transition-colors duration-200 ease-out hover:text-accent motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span className="border-b border-accent/50 pb-0.5 transition-[border-color] duration-200 group-hover:border-accent">
                Selected work
              </span>
            </a>
            <a
              href="#contact"
              className="text-sm text-muted transition-colors duration-200 ease-out motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-px hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Contact
            </a>
          </Motion.nav>
        </Motion.div>
      </Container>
    </div>
  );
}
