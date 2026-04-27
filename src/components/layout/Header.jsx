import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/Container";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const navLinkClass =
  "rounded-md px-2.5 py-1.5 text-[0.8125rem] font-medium text-muted-foreground transition-colors duration-200 hover:bg-background/60 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:px-3 md:py-2";

export function Header({ name }) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl backdrop-saturate-150">
      <Container className="flex h-14 items-center justify-between md:h-[3.75rem]">
        <a
          href="#top"
          className="font-display text-[0.8125rem] font-medium tracking-tight text-foreground transition-colors duration-200 hover:text-accent md:text-sm"
        >
          {name}
        </a>

        <nav
          className="hidden items-center gap-0.5 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-transparent text-foreground transition-colors hover:border-border/60 hover:bg-surface/60 md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden
          >
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      <AnimatePresence initial={false}>
        {open && (
          <Motion.div
            id="mobile-nav"
            className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden"
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: reduced ? 0.12 : 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Container className="flex flex-col gap-0.5 py-3 pb-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-[0.9375rem] font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground active:bg-surface"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </Container>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
