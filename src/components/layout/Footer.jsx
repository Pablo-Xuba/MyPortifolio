import { motion as Motion } from "framer-motion";
import { Container } from "../ui/Container";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { itemVariants, revealViewport } from "../../lib/motion";

export function Footer({ name, github, linkedin, email }) {
  const year = new Date().getFullYear();
  const reduced = useReducedMotion();

  return (
    <Motion.footer
      className="border-t border-border py-12 md:py-14"
      variants={itemVariants(reduced)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <p className="text-[0.9375rem] leading-snug text-muted">
          {name} · {year}
        </p>
        <div className="flex flex-wrap gap-7 text-[0.9375rem] leading-snug">
          <a
            href={`mailto:${email}`}
            className="text-muted transition-colors duration-200 ease-out hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Email
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted transition-colors duration-200 ease-out hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted transition-colors duration-200 ease-out hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            LinkedIn
          </a>
        </div>
      </Container>
    </Motion.footer>
  );
}
