// Business card primitives. Card = 3.5x2in printed.
// We render at 2x: 672 x 384 px. Bleed line at 0.125in = 24px from edge.

const CARD_W = 672;
const CARD_H = 384;

function CardShell({ children, bg = "var(--color-bg)", color = "var(--fg1)", style }) {
  return (
    <div style={{
      width: CARD_W, height: CARD_H,
      background: bg, color,
      position: "relative", overflow: "hidden",
      boxShadow: "0 1px 2px rgba(45,42,38,0.08), 0 8px 24px rgba(45,42,38,0.12)",
      borderRadius: 6,
      ...style
    }}>{children}</div>
  );
}

function CardPair({ front, back, label }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `${CARD_W}px ${CARD_W}px`, gap: 32, alignItems: "start" }}>
      <div>
        <div style={cardCaption}>FRONT</div>
        {front}
      </div>
      <div>
        <div style={cardCaption}>BACK</div>
        {back}
      </div>
    </div>
  );
}

const cardCaption = {
  fontFamily: "var(--font-mono)", fontSize: 11,
  color: "var(--fg3)", letterSpacing: "0.12em",
  textTransform: "uppercase", marginBottom: 10,
};

function PlMark({ size = 32, dark = false }) {
  const navy   = dark ? "#faf7f2" : "#1c3552";
  const orange = "var(--card-accent, var(--color-accent))";
  const ink    = dark ? "#1c3552" : "#faf7f2";
  const radius = Math.round(size * 0.21);
  const fontSize = Math.round(size * 0.42);
  return (
    <div style={{
      width: size, height: size, background: navy,
      borderRadius: radius,
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-mono)", fontWeight: 700,
      color: ink, fontSize, letterSpacing: "-0.04em", lineHeight: 1,
      flexShrink: 0, gap: 1
    }}>
      <span style={{ color: orange }}>&lt;</span>
      <span>pl</span>
      <span style={{ color: orange }}>:&gt;</span>
    </div>
  );
}

function PromptSmile({ size = 24, color = "var(--card-accent, var(--color-accent))" }) {
  return (
    <span style={{
      fontFamily: "var(--font-mono)", fontWeight: 700,
      fontSize: size, color, letterSpacing: "-0.05em", lineHeight: 1
    }}>:&gt;</span>
  );
}

function StatusDot({ size = 8, color = "#4a9e82", pulse = true }) {
  return (
    <span style={{
      display: "inline-block",
      width: size, height: size, borderRadius: 999, background: color,
      boxShadow: `0 0 0 3px ${color}22`,
      animation: pulse ? "card-pulse 2s ease-in-out infinite" : "none"
    }} />
  );
}

Object.assign(window, { CardShell, CardPair, PlMark, PromptSmile, StatusDot, CARD_W, CARD_H });
