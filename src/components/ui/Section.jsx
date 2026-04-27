import { Container } from "./Container";

export function Section({ id, title, children, className = "" }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-24 md:py-32 ${className}`}
    >
      <Container>
        {title && (
          <header className="mb-12 md:mb-16">
            <h2 className="text-balance font-display text-[1.75rem] font-semibold leading-[1.12] tracking-tight text-foreground md:text-[2.125rem] md:leading-[1.1]">
              {title}
            </h2>
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
