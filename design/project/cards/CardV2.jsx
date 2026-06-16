// Variation 2 — Terminal / runbook card.
// FRONT: cream, looks like a runbook page. BACK: dark, terminal session.

function CardV2Front({ nameVariant = "display" }) {
  return (
    <CardShell bg="#faf7f2" color="#1a1816">
      <div style={{ padding: "32px 40px", height: "100%", display: "flex", flexDirection: "column" }}>
        {/* file header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 14, borderBottom: "1px solid var(--color-border)", fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--fg3)", letterSpacing: "0.06em" }}>
          <span>~/pitzi-labs/contact.md</span>
          <span>v2026.05</span>
        </div>

        {/* body */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--card-accent, var(--color-accent))", letterSpacing: "0.08em" }}>
              <span style={{ color: "var(--card-accent, var(--color-accent))" }}>$</span> whoami
            </div>
            {nameVariant === "display" ? (
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, letterSpacing: "-0.03em", lineHeight: 1.05, marginTop: 4 }}>
                Christopher Pitzi
              </div>
            ) : (
              <div style={{ fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 24, letterSpacing: "-0.02em", lineHeight: 1.1, marginTop: 6 }}>
                christopher_pitzi
              </div>
            )}
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fg2)", marginTop: 4 }}>
              Infrastructure operations · 25y · pitzilabs.dev
            </div>
          </div>

          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg1)", lineHeight: 1.7 }}>
            <div><span style={{ color: "var(--card-accent, var(--color-accent))" }}>$</span> <span style={{ color: "var(--fg3)" }}>cat</span> contact.txt</div>
            <div style={{ paddingLeft: 14, color: "var(--fg2)" }}>email = chris@pitzilabs.dev</div>
            <div style={{ paddingLeft: 14, color: "var(--fg2)" }}>git&nbsp;&nbsp; = github.com/PitziLabs</div>
          </div>
        </div>

        {/* footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid var(--color-border)" }}>
          <PlMark size={20} />
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg3)", display: "flex", alignItems: "center", gap: 6, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <StatusDot size={6} color="#4a9e82" pulse={false} /> available · q3 '26
          </div>
        </div>
      </div>
    </CardShell>
  );
}

function CardV2Back() {
  return (
    <CardShell bg="#0a1628" color="#faf7f2">
      <div style={{ padding: "36px 40px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, lineHeight: 1.85, color: "#c8d4e6" }}>
          <div><span style={{ color: "var(--card-accent, var(--color-accent))" }}>&lt;pl:&gt;</span> ./principle --tier=core</div>
          <div style={{ color: "#8aa0bd" }}>  loading...</div>
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#faf7f2" }}>
          Build it.<br/>
          <span style={{ color: "var(--card-accent, var(--color-accent))" }}>Break it.</span> Operate it.
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "#8aa0bd", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span><span style={{ color: "var(--card-accent, var(--color-accent))" }}>&lt;pl:&gt;</span> exit 0</span>
          <PromptSmile size={20} />
        </div>
      </div>
    </CardShell>
  );
}

Object.assign(window, { CardV2Front, CardV2Back });
