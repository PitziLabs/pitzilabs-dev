// Variation 1 — Status indicator card.
// FRONT: dark, name in display + live-ops dot meta. BACK: cream, single principle.

function CardV1Front({ nameVariant = "display" }) {
  return (
    <CardShell bg="#0a1628" color="#faf7f2">
      {/* graph paper */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(250,247,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(250,247,242,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px", pointerEvents: "none"
      }} />
      <div style={{ position: "relative", padding: "40px 44px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        {/* Top row: mark + status */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <PlMark size={36} />
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: 11, color: "#8aa0bd", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <StatusDot color="#4a9e82" /> ON-CALL
          </div>
        </div>

        {/* Name */}
        <div>
          {nameVariant === "display" ? (
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 38, letterSpacing: "-0.03em", lineHeight: 1.05,
              margin: 0, color: "#faf7f2"
            }}>
              Christopher<br/>Pitzi
            </div>
          ) : (
            <div style={{
              fontFamily: "var(--font-mono)", fontWeight: 500,
              fontSize: 28, letterSpacing: "-0.02em", lineHeight: 1.1,
              margin: 0, color: "#faf7f2"
            }}>
              christopher<br/>pitzi
            </div>
          )}
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 11,
            color: "var(--card-accent, var(--color-accent))",
            letterSpacing: "0.1em", textTransform: "uppercase",
            marginTop: 12
          }}>
            Pitzi Labs · Infrastructure ops
          </div>
        </div>

        {/* Bottom: contact */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "var(--font-mono)", fontSize: 12, color: "#c8d4e6" }}>
          <div style={{ display: "grid", gap: 4 }}>
            <span>chris@pitzilabs.dev</span>
            <span style={{ color: "#8aa0bd" }}>github.com/PitziLabs</span>
          </div>
          <PromptSmile size={32} color="var(--card-accent, var(--color-accent))" />
        </div>
      </div>
    </CardShell>
  );
}

function CardV1Back() {
  return (
    <CardShell bg="#faf7f2" color="#1a1816">
      <div style={{ padding: "40px 44px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--card-accent, var(--color-accent))", letterSpacing: "0.12em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 8 }}>
          <StatusDot color="var(--card-accent, var(--color-accent))" pulse={false} size={6} />
          Operating principle · 03 / 06
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, lineHeight: 1.08, letterSpacing: "-0.025em" }}>
          Runbooks beat <span style={{ color: "var(--card-accent, var(--color-accent))" }}>heroics.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <PlMark size={22} />
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--fg3)", letterSpacing: "0.08em", textAlign: "right" }}>
            pitzilabs.dev
          </div>
        </div>
      </div>
    </CardShell>
  );
}

Object.assign(window, { CardV1Front, CardV1Back });
