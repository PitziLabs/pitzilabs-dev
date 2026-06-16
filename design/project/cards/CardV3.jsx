// Variation 3 — Diecut / die-line accent. Industrial orange edge stripe.
// FRONT: cream with orange left edge. BACK: dark with orange-stamped principle.

function CardV3Front({ nameVariant = "display" }) {
  return (
    <CardShell bg="#faf7f2" color="#1a1816">
      {/* die-line stripe */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0,
        width: 56, background: "var(--card-accent, var(--color-accent))",
        display: "flex", alignItems: "flex-end", justifyContent: "center",
        paddingBottom: 18
      }}>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 9, color: "#faf7f2",
          letterSpacing: "0.2em", writingMode: "vertical-rl",
          transform: "rotate(180deg)", textTransform: "uppercase"
        }}>
          PITZI LABS · OPS · 1997
        </div>
      </div>

      {/* perforation dots */}
      <div style={{
        position: "absolute", left: 56, top: 16, bottom: 16, width: 1,
        backgroundImage: "repeating-linear-gradient(to bottom, var(--color-border-strong) 0 4px, transparent 4px 10px)"
      }} />

      <div style={{ paddingLeft: 88, paddingRight: 36, paddingTop: 36, paddingBottom: 36, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <PlMark size={28} />
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "var(--fg3)", letterSpacing: "0.1em", textAlign: "right", lineHeight: 1.5 }}>
            FORM · 03B<br/>NO. 0142
          </div>
        </div>

        <div>
          {nameVariant === "display" ? (
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, letterSpacing: "-0.03em", lineHeight: 1.02 }}>
              Christopher<br/>Pitzi
            </div>
          ) : (
            <div style={{ fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 26, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              christopher.pitzi
            </div>
          )}
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--card-accent, var(--color-accent))", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 8 }}>
            Infrastructure ops · Pitzi Labs
          </div>
        </div>

        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--fg2)", lineHeight: 1.7, display: "grid", gap: 2 }}>
          <span>chris@pitzilabs.dev</span>
          <span style={{ color: "var(--fg3)" }}>github.com/PitziLabs</span>
        </div>
      </div>
    </CardShell>
  );
}

function CardV3Back() {
  return (
    <CardShell bg="#0a1628" color="#faf7f2">
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0,
        width: 56, background: "var(--card-accent, var(--color-accent))"
      }} />
      <div style={{
        position: "absolute", right: 56, top: 16, bottom: 16, width: 1,
        backgroundImage: "repeating-linear-gradient(to bottom, rgba(250,247,242,0.18) 0 4px, transparent 4px 10px)"
      }} />

      <div style={{ paddingRight: 88, paddingLeft: 40, paddingTop: 36, paddingBottom: 36, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#9a948c", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          ◆ Operating principle
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, lineHeight: 1.06, letterSpacing: "-0.025em", color: "#faf7f2" }}>
          Blast radius<br/>over <span style={{ color: "var(--card-accent, var(--color-accent))" }}>blast capacity.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "var(--font-mono)", fontSize: 10.5, color: "#9a948c", letterSpacing: "0.06em" }}>
          <span>pitzilabs.dev</span>
          <span>02 / 06</span>
        </div>
      </div>
    </CardShell>
  );
}

Object.assign(window, { CardV3Front, CardV3Back });
