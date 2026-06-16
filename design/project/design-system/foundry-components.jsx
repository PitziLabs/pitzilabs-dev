// Pitzi Labs / Foundry Platform — UI kit components.
// Loaded as a Babel <script>; exposes components on window.

const PL_FONT_LINK = "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap";

function Mark({ size = 28 }) {
  const radius = Math.round(size * 0.21);
  const fontSize = Math.round(size * 0.46);
  return (
    <div style={{
      width: size, height: size, background: "#1a1816", borderRadius: radius,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-mono)", fontWeight: 600, color: "#faf7f2",
      fontSize, letterSpacing: "-0.02em", lineHeight: 1, flexShrink: 0
    }}>
      pl<span style={{ color: "#c4533a" }}>/</span>
    </div>
  );
}

function NavBar({ active = "Practice" }) {
  const items = ["Practice", "Work", "Writing", "Contact"];
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(250,247,242,0.92)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--color-border)",
      padding: "14px 32px", display: "flex", justifyContent: "space-between", alignItems: "center"
    }}>
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0, whiteSpace: "nowrap" }}>
        <Mark />
        <span style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--fg1)", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>Pitzi Labs</span>
      </a>
      <ul style={{ display: "flex", gap: 28, listStyle: "none", margin: 0, padding: 0 }}>
        {items.map(i => (
          <li key={i}>
            <a href="#" style={{
              fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 500,
              textTransform: "uppercase", letterSpacing: "0.06em",
              color: i === active ? "var(--color-accent)" : "var(--fg1)",
              textDecoration: "none"
            }}>{i}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <header style={{
      background: "linear-gradient(145deg,#2d2a26,#4a3f35)",
      color: "var(--fg-on-dark)", padding: "80px 32px 72px", textAlign: "center"
    }}>
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: 11, color: "#b8aea4",
        letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 18
      }}>PRACTICE · EST. 1999 · INFRASTRUCTURE OPS</div>
      <h1 style={{
        fontFamily: "var(--font-display)", fontSize: 64, lineHeight: 1.05,
        letterSpacing: "-0.015em", margin: "0 0 14px"
      }}>Production<br /><span style={{ color: "var(--color-accent)" }}>that shows up.</span></h1>
      <p style={{
        fontFamily: "var(--font-body)", fontSize: 17, color: "#b8aea4",
        margin: "0 auto", maxWidth: 560, lineHeight: 1.6
      }}>Twenty-five years of bare-metal data centers, 24×7 ops, and single-homed environments — now bridging into cloud-native architecture by building it, breaking it, and operating it.</p>
      <div style={{ marginTop: 26, display: "flex", gap: 10, justifyContent: "center" }}>
        <button style={{
          background: "var(--color-accent)", color: "#fff", border: 0,
          padding: "11px 20px", borderRadius: 6, fontFamily: "var(--font-body)",
          fontWeight: 500, fontSize: 14, cursor: "pointer"
        }}>Book a consult</button>
        <button style={{
          background: "transparent", color: "#faf7f2", border: "1px solid #6b6560",
          padding: "11px 20px", borderRadius: 6, fontFamily: "var(--font-body)",
          fontWeight: 500, fontSize: 14, cursor: "pointer"
        }}>View runbook</button>
      </div>
    </header>
  );
}

function ServiceCard({ tag, title, desc, status }) {
  const statusColors = {
    ok: "#4a9e82", warn: "#d4a12e", info: "#d07030", err: "#c4533a"
  };
  return (
    <div style={{
      background: "#fff", border: "1px solid var(--color-border)",
      borderRadius: 8, padding: "20px 22px", position: "relative", overflow: "hidden"
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: statusColors[status] }} />
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{tag}</div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--fg1)", margin: "6px 0 8px" }}>{title}</h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--fg2)", lineHeight: 1.55, margin: 0 }}>{desc}</p>
    </div>
  );
}

function ServicesGrid() {
  const services = [
    { tag: "01", title: "Platform engineering", desc: "Greenfield AWS/GCP/Azure builds. Terraform-managed. Multi-AZ, least-privilege, observable from day one.", status: "ok" },
    { tag: "02", title: "Cost & posture audits", desc: "Find the NAT gateway eating your budget. Find the IAM role nobody owns. Get a one-page report.", status: "warn" },
    { tag: "03", title: "Incident & on-call", desc: "Set up runbooks, alarms, and rotations that humans can actually live with. Pager hygiene included.", status: "info" },
    { tag: "04", title: "CI/CD & supply chain", desc: "OIDC, signed images, plan-on-PR, apply-on-merge. No long-lived credentials anywhere.", status: "err" }
  ];
  return (
    <section style={{ maxWidth: 1024, margin: "0 auto", padding: "72px 24px" }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>SERVICES</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, color: "var(--fg1)", letterSpacing: "-0.01em", margin: 0 }}>What I'll do for you.</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 16 }}>
        {services.map(s => <ServiceCard key={s.tag} {...s} />)}
      </div>
    </section>
  );
}

function StatusStrip() {
  const items = [
    { label: "icecreamtofightover.com", status: "ok", value: "200 OK · 142ms" },
    { label: "ECS Fargate · foundry-dev", status: "ok", value: "2/2 healthy" },
    { label: "RDS · postgres", status: "warn", value: "CPU 73%" },
    { label: "Last terraform apply", status: "ok", value: "2h ago · 0 drift" }
  ];
  const dotColor = { ok: "#4a9e82", warn: "#d4a12e", err: "#c4533a" };
  return (
    <section style={{
      background: "var(--color-bg-alt)", borderTop: "1px solid var(--color-border)",
      borderBottom: "1px solid var(--color-border)", padding: "18px 32px"
    }}>
      <div style={{ maxWidth: 1024, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg3)", letterSpacing: "0.08em", textTransform: "uppercase" }}>LIVE STATUS</div>
        {items.map(i => (
          <div key={i.label} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: 12 }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: dotColor[i.status] }} />
            <span style={{ color: "var(--fg1)" }}>{i.label}</span>
            <span style={{ color: "var(--fg3)" }}>{i.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--color-border)", padding: "32px",
      textAlign: "center", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fg3)"
    }}>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", alignItems: "center", marginBottom: 10 }}>
        <Mark size={20} />
        <span style={{ fontFamily: "var(--font-display)", color: "var(--fg2)" }}>Pitzi Labs</span>
      </div>
      <div>Christopher Pitzi · christopher@pitzilabs.com · © 2026</div>
    </footer>
  );
}

Object.assign(window, { Mark, NavBar, Hero, ServiceCard, ServicesGrid, StatusStrip, Footer, PL_FONT_LINK });
