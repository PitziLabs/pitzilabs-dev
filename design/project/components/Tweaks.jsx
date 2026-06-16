// Tweaks panel — exposes a few aesthetic/layout choices live.
// Defaults block below is rewritten by the host when persisted.

const TWEAKS_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "dark",
  "accent": "#e08438",
  "showStatusStrip": true,
  "density": "comfortable"
} /*EDITMODE-END*/;

function TweaksPanel({ values, setValues, visible }) {
  if (!visible) return null;

  const set = (k, v) => {
    const next = { ...values, [k]: v };
    setValues(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  };

  const row = { display: "grid", gap: 8, marginBottom: 16 };
  const label = {
    fontFamily: "var(--font-mono)", fontSize: 10.5,
    color: "var(--fg3)", letterSpacing: "0.1em",
    textTransform: "uppercase"
  };

  return (
    <div style={{
      position: "fixed", bottom: 20, right: 20, zIndex: 1000,
      width: 300, background: "var(--color-ink-strong)",

      borderRadius: 10,
      padding: "18px 18px 16px",
      boxShadow: "0 20px 48px rgba(0,0,0,0.35)",
      border: "1px solid #3a3530",
      fontFamily: "var(--font-body)", color: "rgb(138, 160, 189)"
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", marginBottom: 16,
        paddingBottom: 12, borderBottom: "1px solid #3a3530"
      }}>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 11,
          letterSpacing: "0.1em", textTransform: "uppercase",
          color: "var(--color-accent)"
        }}>◆ Tweaks</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#9a948c" }}>live</span>
      </div>

      <div style={row}>
        <div style={label}>Hero variant</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4 }}>
          {["dark", "paper", "split"].map((v) =>
          <button key={v} onClick={() => set("heroVariant", v)} style={{
            background: values.heroVariant === v ? "var(--color-accent)" : "transparent",
            color: "#faf7f2",
            border: "1px solid " + (values.heroVariant === v ? "var(--color-accent)" : "#3a3530"),
            padding: "7px 8px", borderRadius: 4,
            fontFamily: "var(--font-mono)", fontSize: 11,
            cursor: "pointer"
          }}>{v}</button>
          )}
        </div>
      </div>

      <div style={row}>
        <div style={label}>Accent</div>
        <div style={{ display: "flex", gap: 6 }}>
          {[
          { label: "orange", val: "#e08438" },
          { label: "rust", val: "#c54a2a" },
          { label: "navy", val: "#1c3552" },
          { label: "ink", val: "#1a1816" }].
          map((c) =>
          <button key={c.val} onClick={() => set("accent", c.val)} title={c.label} style={{
            width: 32, height: 32, borderRadius: 4,
            background: c.val,
            border: values.accent === c.val ? "2px solid #faf7f2" : "1px solid #3a3530",
            cursor: "pointer", padding: 0
          }} />
          )}
        </div>
      </div>

      <div style={row}>
        <div style={label}>Density</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
          {["comfortable", "compact"].map((v) =>
          <button key={v} onClick={() => set("density", v)} style={{
            background: values.density === v ? "var(--color-accent)" : "transparent",
            color: "#faf7f2",
            border: "1px solid " + (values.density === v ? "var(--color-accent)" : "#3a3530"),
            padding: "7px 8px", borderRadius: 4,
            fontFamily: "var(--font-mono)", fontSize: 11,
            cursor: "pointer"
          }}>{v}</button>
          )}
        </div>
      </div>

      <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", marginTop: 8 }}>
        <input type="checkbox" checked={values.showStatusStrip} onChange={(e) => set("showStatusStrip", e.target.checked)} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#d8cec2" }}>Show live status strip</span>
      </label>
    </div>);

}

Object.assign(window, { TWEAKS_DEFAULTS, TweaksPanel });