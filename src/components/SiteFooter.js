export default function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--black)", backgroundColor: "var(--white)" }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          paddingTop: "40px",
          paddingBottom: "40px",
          fontSize: "14px",
        }}
      >
        <p style={{ fontWeight: 500 }}>Symi System</p>
        <p style={{ maxWidth: "560px", color: "var(--gray-700)" }}>
          Custom internal software for business services, professional services, and specialized markets.
        </p>
        <a href="mailto:contact@symi.io?subject=Project%20Consultation" style={{ fontWeight: 500 }}>
          contact@symi.io
        </a>
      </div>
    </footer>
  );
}
