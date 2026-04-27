import { useId, useMemo } from "react";

function randomBinaryChar() {
  return Math.random() > 0.5 ? "1" : "0";
}

function buildAnomalyGlyphs(width, height, gapX, gapY, density, seedOffset = 0) {
  const glyphs = [];
  let id = 0;

  for (let y = 8; y < height - 6; y += gapY) {
    for (let x = 6; x < width - 6; x += gapX) {
      const keep = Math.random() < density;
      if (!keep) continue;

      glyphs.push({
        id: `${seedOffset}-${id}`,
        char: randomBinaryChar(),
        x: x + (Math.random() - 0.5) * 2.4,
        y: y + (Math.random() - 0.5) * 2.4,
        size: 7.4 + Math.random() * 2.1,
        opacity: 0.44 + Math.random() * 0.5,
      });
      id += 1;
    }
  }

  return glyphs;
}

export function BinaryName({ name }) {
  const id = useId().replace(/:/g, "");
  const clipId = `binary-name-clip-${id}`;
  const glyphGradientId = `binary-glyph-gradient-${id}`;
  const glyphGradientDimId = `binary-glyph-gradient-dim-${id}`;

  const words = name.trim().split(/\s+/);
  const topLine = words.slice(0, Math.max(1, words.length - 1)).join(" ");
  const bottomLine = words.length > 1 ? words[words.length - 1] : "";

  const primaryGlyphs = useMemo(
    () => buildAnomalyGlyphs(940, 300, 7.2, 8.6, 0.9, 1),
    [],
  );
  const secondaryGlyphs = useMemo(
    () => buildAnomalyGlyphs(940, 300, 10.8, 11.2, 0.62, 2),
    [],
  );
  const tertiaryGlyphs = useMemo(
    () => buildAnomalyGlyphs(940, 300, 14.6, 14.8, 0.45, 3),
    [],
  );

  return (
    <div className="binary-name-heading" role="img" aria-label={name}>
      <svg
        className="binary-name-svg"
        viewBox="0 0 940 300"
        preserveAspectRatio="xMinYMin meet"
      >
        <defs>
          <linearGradient id={glyphGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a1ffb0" />
            <stop offset="52%" stopColor="#52e66f" />
            <stop offset="100%" stopColor="#16c24a" />
          </linearGradient>
          <linearGradient id={glyphGradientDimId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7ee08d" />
            <stop offset="100%" stopColor="#1cae4c" />
          </linearGradient>
          <clipPath id={clipId}>
            <text className="binary-name-mask-line" x="4" y="132">
              {topLine}
            </text>
            {bottomLine && (
              <text className="binary-name-mask-line" x="4" y="252">
                {bottomLine}
              </text>
            )}
          </clipPath>
        </defs>

        <g clipPath={`url(#${clipId})`}>
          <g className="binary-static-layer">
            {primaryGlyphs.map((glyph) => (
              <text
                key={`primary-${glyph.id}`}
                className="binary-glyph"
                x={glyph.x}
                y={glyph.y}
                fontSize={glyph.size}
                opacity={glyph.opacity}
                fill={`url(#${glyphGradientId})`}
              >
                {glyph.char}
              </text>
            ))}
          </g>

          <g className="binary-static-layer binary-static-layer-alt">
            {secondaryGlyphs.map((glyph) => (
              <text
                key={`secondary-${glyph.id}`}
                className="binary-glyph binary-glyph-dim"
                x={glyph.x}
                y={glyph.y}
                fontSize={glyph.size - 1}
                opacity={Math.max(0.12, glyph.opacity * 0.45)}
                fill={`url(#${glyphGradientDimId})`}
              >
                {glyph.char}
              </text>
            ))}
          </g>

          <g className="binary-static-layer binary-static-layer-tertiary">
            {tertiaryGlyphs.map((glyph) => (
              <text
                key={`tertiary-${glyph.id}`}
                className="binary-glyph binary-glyph-dim"
                x={glyph.x}
                y={glyph.y}
                fontSize={glyph.size - 0.4}
                opacity={Math.max(0.1, glyph.opacity * 0.35)}
                fill={`url(#${glyphGradientDimId})`}
              >
                {glyph.char}
              </text>
            ))}
          </g>
        </g>

      </svg>
    </div>
  );
}
