function NavBar({ active = "Practice" }) {
  const items = [
    { label: "Practice", href: "#practice" },
    { label: "Work",     href: "#work" },
    { label: "Writing",  href: "#writing" },
    { label: "About",    href: "#about" },
    { label: "Contact",  href: "#contact" },
  ];
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(250,247,242,0.92)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--color-border)",
      padding: "14px 40px",
      display: "flex", justifyContent: "space-between", alignItems: "center"
    }}>
      <a href="#top" style={{
        display: "flex", alignItems: "center", gap: 10,
        textDecoration: "none", flexShrink: 0, whiteSpace: "nowrap"
      }}>
        <Mark />
        <span style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: 17, color: "var(--fg1)", letterSpacing: "-0.02em"
        }}>Pitzi Labs</span>
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <ul style={{ display: "flex", gap: 28, listStyle: "none", margin: 0, padding: 0 }}>
          {items.map(i => (
            <li key={i.label}>
              <a href={i.href} style={{
                fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 500,
                textTransform: "uppercase", letterSpacing: "0.06em",
                color: i.label === active ? "var(--color-accent)" : "var(--fg1)",
                textDecoration: "none",
                transition: "color 120ms var(--ease-standard)"
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--color-accent)"}
              onMouseLeave={e => e.currentTarget.style.color = i.label === active ? "var(--color-accent)" : "var(--fg1)"}
              >{i.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" style={{
          fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500,
          color: "#faf7f2", background: "var(--color-ink-strong)",
          padding: "9px 14px", borderRadius: 6, textDecoration: "none",
          display: "inline-flex", alignItems: "center", gap: 8,
          whiteSpace: "nowrap"
        }}>
          <StatusDot status="ok" size={6} />
          <span>Available · Q2 '26</span>
        </a>
      </div>
    </nav>
  );
}

Object.assign(window, { NavBar });
