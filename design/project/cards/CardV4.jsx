// Variation 4 — Live-ops status console.
// FRONT: cream, looks like a status dashboard row. BACK: dark, big mark + principle.

function CardV4Front({ nameVariant = "display" }) {
  const items = [
    { k: "name",   v: "christopher pitzi", status: "ok"  },
    { k: "scope",  v: "infrastructure ops", status: "ok"  },
    { k: "since",  v: "1997 → present",    status: "ok"  },
    { k: "pager",  v: "0 open",            status: "ok"  },
  ];
  return (
    <CardShell bg="#faf7f2" color="#1a1816">
      <div style={{ padding: "28px 36px", height: "100%", display: "flex", flexDirection: "column", gap: 14 }}>
        {/* status bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 12, borderBottom: "1px solid var(--color-border)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <PlMark size={22} />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em" }}>Pitzi Labs</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            <StatusDot size={6} color="#4a9e82" /> LIVE · 200 OK
          </div>
        </div>

        {/* big name */}
        {nameVariant === "display" ? (
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, letterSpacing: "-0.03em", lineHeight: 1.02, margin: "2px 0" }}>
            Christopher Pitzi
          </div>
        ) : (
          <div style={{ fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "2px 0" }}>
            christopher_pitzi
          </div>
        )}

        {/* status table */}
        <div style={{ display: "grid", gap: 4, fontFamily: "var(--font-mono)", fontSize: 11 }}>
          {items.map(i => (
            <div key={i.k} style={{ display: "grid", gridTemplateColumns: "18px 60px 1fr", alignItems: "center", gap: 8 }}>
              <StatusDot size={6} color="#4a9e82" pulse={false} />
              <span style={{ color: "var(--fg3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{i.k}</span>
              <span style={{ color: "var(--fg1)" }}>{i.v}</span>
            </div>
          ))}
        </div>

        {/* footer */}
        <div style={{ marginTop: "auto", paddingTop: 10, borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--card-accent, var(--color-accent))" }}>
          <span>chris@pitzilabs.dev</span>
          <span style={{ color: "var(--fg3)" }}>github.com/PitziLabs</span>
        </div>
      </div>
    </CardShell>
  );
}

function CardV4Back() {
  return (
    <CardShell bg="#0a1628" color="#faf7f2">
      {/* giant smile watermark */}
      <div style={{
        position: "absolute", right: -30, bottom: -90,
        fontFamily: "var(--font-mono)", fontWeight: 700,
        fontSize: 380, color: "rgba(224,132,56,0.13)",
        lineHeight: 0.85, letterSpacing: "-0.05em",
        userSelect: "none", pointerEvents: "none"
      }}>:&gt;</div>

      <div style={{ position: "relative", padding: "40px 44px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--card-accent, var(--color-accent))", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          ◆ 04 of 06 · core
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, lineHeight: 1.08, letterSpacing: "-0.025em", maxWidth: 460 }}>
          Observable<br/>from <span style={{ color: "var(--card-accent, var(--color-accent))" }}>day one.</span>
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#9a948c", display: "flex", alignItems: "center", gap: 8 }}>
          <StatusDot size={6} color="#4a9e82" /> all systems operational
        </div>
      </div>
    </CardShell>
  );
}

Object.assign(window, { CardV4Front, CardV4Back });
