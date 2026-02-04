import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header id="main-header">
    <div className="container">
      <nav>
        <a href="index.html" className="nav-logo">
          <img src="https://jqovtbiellasfchtdmbu.supabase.co/storage/v1/object/public/website-builder-assets/70558917-a924-4110-aaca-0167e221b4b5/1770117972837-1tb2la.png" alt="Aladdin Logo" />
        </a>
        <ul className="nav-links">
          <li><a href="features.html">Features</a></li>
          <li><a href="#ai">AI Intelligence</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
        <div className="nav-cta">
          <a href="#" className="btn btn-primary" style={{ padding: "0.7rem 1.75rem", fontSize: "0.9rem", borderRadius: "10px" }}>Get Started</a>
        </div>
        <div className="menu-toggle" id="mobile-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  </header>
      <main>
        <Outlet />
      </main>
      <footer>
    <div className="container">
      <div className="footer-grid">
        <div>
          <a href="index.html" className="footer-logo">
            <img src="https://jqovtbiellasfchtdmbu.supabase.co/storage/v1/object/public/website-builder-assets/70558917-a924-4110-aaca-0167e221b4b5/1770117972837-1tb2la.png" alt="Aladdin Logo" />
          </a>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>The intelligent operating system for modern business teams. CRM, AI, and Automation, unified.</p>
        </div>
        <div className="footer-links">
          <h4>Platform</h4>
          <ul>
            <li><a href="features.html">Capabilities</a></li>
            <li><a href="#ai">AI Engine</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Open Roles</a></li>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">API Status</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>
      <div style={{ marginTop: "6rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem", color: "var(--muted)" }}>
        <p>© 2024 Aladdin Inc. All rights reserved.</p>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          <a href="#" style={{ color: "var(--muted)", textDecoration: "none" }}>Twitter / X</a>
          <a href="#" style={{ color: "var(--muted)", textDecoration: "none" }}>LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
    </>
  );
};

export default Layout;
