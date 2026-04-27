import { useMemo } from "react";

export function AmbientEffects({ reduced }) {
  const trails = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        top: 12 + i * 13.5,
        left: -18 - i * 12,
        duration: 8.5 + i * 1.7,
        delay: i * 3.1,
      })),
    [],
  );

  return (
    <div className="ambient-overlay" aria-hidden>
      <div className="ambient-stars" />
      <div className="ambient-nebula" />
      <div className="ambient-glow" />
      <div className={`meteor-trails${reduced ? " is-reduced" : ""}`}>
        {trails.map((trail) => (
          <span
            key={trail.id}
            className="meteor-trail"
            style={{
              top: `${trail.top}%`,
              left: `${trail.left}%`,
              animationDuration: `${trail.duration}s`,
              animationDelay: `-${trail.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="orbit-ring" />
    </div>
  );
}
