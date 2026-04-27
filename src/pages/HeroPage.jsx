import { motion as Motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { BinaryName } from "../components/ui/BinaryName";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { sectionVariants, itemVariants } from "../lib/motion";

export function HeroPage({ profile }) {
  const reduced = useReducedMotion();

  return (
    <div
      id="top"
      className={`hero-shell relative overflow-hidden pt-[6.5rem] md:pt-32${reduced ? " hero-reduced-motion" : ""}`}
    >
      <div className="hero-bg-base" aria-hidden>
        <div className="hero-stars-layer-1" />
        <div className="hero-stars-layer-2" />
        <div className="hero-nebula" />
        <div className="hero-planets">
          <span className="hero-planet hero-planet-a" />
          <span className="hero-planet hero-planet-b" />
          <span className="hero-planet hero-planet-c" />
        </div>
        <div className="hero-spaceship" />
        <div className="hero-blackhole" />
        <div className="hero-content-scrim" />
        <div className="hero-left-galaxy" />
      </div>

      <Container className="pb-28 md:pb-36">
        <Motion.div
          className="hero-content grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)] lg:gap-10 xl:gap-14"
          variants={sectionVariants(reduced)}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-[40rem]">
            <Motion.p
              variants={itemVariants(reduced)}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.26em] text-muted-foreground"
            >
              {profile.location}
            </Motion.p>

            <Motion.div variants={itemVariants(reduced)} className="mt-4">
              <BinaryName name={profile.name} />
            </Motion.div>

            <Motion.p
              variants={itemVariants(reduced)}
              className="mt-4 max-w-md text-[1.14rem] font-medium leading-snug text-foreground/95 md:text-[1.27rem] md:leading-relaxed"
            >
              {profile.title}
            </Motion.p>

            <Motion.div
              variants={itemVariants(reduced)}
              className="mt-10 h-px w-20 bg-gradient-to-r from-accent/85 to-transparent"
              aria-hidden
            />

            <Motion.p
              variants={itemVariants(reduced)}
              className="mt-10 max-w-prose text-body text-foreground/84"
            >
              {profile.bio}
            </Motion.p>

            <Motion.nav
              variants={itemVariants(reduced)}
              className="mt-12 flex flex-wrap items-baseline gap-x-7 gap-y-3 md:gap-x-10"
              aria-label="Primary actions"
            >
              <a
                href="#projects"
                className="group relative rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors duration-200 ease-out hover:text-accent motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span className="border-b border-accent/80 pb-0.5 transition-[border-color] duration-200 group-hover:border-accent">
                  Selected work
                </span>
              </a>
              <a
                href="#contact"
                className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors duration-200 ease-out motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-px hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Contact
              </a>
            </Motion.nav>
          </div>

          <Motion.aside
            variants={itemVariants(reduced)}
            className="hero-terminal-shell hidden lg:mt-16 lg:block xl:mt-24"
            aria-label="Intro terminal panel"
          >
            <div className="hero-terminal">
              <div className="hero-terminal-dots" aria-hidden>
                <span className="hero-terminal-dot hero-terminal-dot-red" />
                <span className="hero-terminal-dot hero-terminal-dot-yellow" />
                <span className="hero-terminal-dot hero-terminal-dot-green" />
              </div>
              <div className="hero-terminal-content">
                <p className="hero-terminal-command">$ whoami</p>
                <p className="hero-terminal-response">Takudzwa - Creative Coder</p>
                <p className="hero-terminal-command">$ fun_fact</p>
                <p className="hero-terminal-response">
                  "I once debugged a site at 3am with coffee and jazz!"
                </p>
                <p className="hero-terminal-command">$ motto</p>
                <p className="hero-terminal-response">Code with heart, deploy with courage.</p>
              </div>
            </div>
          </Motion.aside>
        </Motion.div>
      </Container>
    </div>
  );
}
