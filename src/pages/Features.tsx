import { useEffect } from "react";
import { motion } from "framer-motion";

const Features = () => {
  useEffect(() => {
    document.title = "Features | Aladdin - The Intelligent Operating System";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Header is in Layout */}

  <!-- MOBILE MENU -->
  <div className="menu-overlay" id="menu-overlay"></div>
  <div className="mobile-menu" id="mobile-menu">
    <div className="close-menu" id="mobile-close">×</div>
    <ul>
      <li><a href="features.html">Features</a></li>
      <li><a href="index.html#ai" className="mobile-link">AI Intelligence</a></li>
      <li><a href="#solutions" className="mobile-link">Solutions</a></li>
      <li><a href="#pricing" className="mobile-link">Pricing</a></li>
    </ul>
    <div style={{ marginTop: "auto", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
      <a href="#" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1rem" }}>Get Started</a>
    </div>
  </div>

  <section style={{ paddingTop: "14rem", textAlign: "center", background: "radial-gradient(circle at 50% 0%, rgba(0, 85, 255, 0.05) 0%, transparent 60%)" }}>
    <div className="container">
      <span style={{ textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: "700", color: "var(--primary)", fontSize: "0.8rem", display: "block", marginBottom: "1.5rem" }}>The Infrastructure</span>
      <h1>Built for speed.<br />Designed for clarity.</h1>
      <p style={{ maxWidth: "700px", margin: "2rem auto 4rem", fontSize: "1.25rem" }}>Explore the powerful tools that make Aladdin the preferred choice for 2,000+ high-growth teams.</p>
    </div>
  </section>

  <section className="container">
    <div className="detail-row">
      <div>
        <h2 style={{ marginBottom: "1.5rem" }}>Intelligent Contact Management</h2>
        <p style={{ marginBottom: "2.5rem" }}>Beyond a simple database. Aladdin creates a living record of every prospect, enriched with 200+ data points in real-time.</p>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <li style={{ display: "flex", alignItems: "center", gap: "1rem", fontWeight: "600" }}><div style={{ width: "20px", height: "20px", background: "var(--primary)", borderRadius: "50%", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem" }}>✓</div> Auto-Enrichment from LinkedIn & Web</li>
          <li style={{ display: "flex", alignItems: "center", gap: "1rem", fontWeight: "600" }}><div style={{ width: "20px", height: "20px", background: "var(--primary)", borderRadius: "50%", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem" }}>✓</div> Real-time Intent Signaling</li>
          <li style={{ display: "flex", alignItems: "center", gap: "1rem", fontWeight: "600" }}><div style={{ width: "20px", height: "20px", background: "var(--primary)", borderRadius: "50%", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem" }}>✓</div> Unified Interaction Timeline</li>
        </ul>
      </div>
      <div className="detail-visual">
        <div style={{ height: "300px", background: "white", borderRadius: "1rem", boxShadow: "var(--shadow-xl)", padding: "2rem" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "2rem" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#f1f5f9" }}></div>
            <div style={{ flex: "1" }}>
              <div style={{ height: "12px", width: "60%", background: "#eee", borderRadius: "6px", marginBottom: "8px" }}></div>
              <div style={{ height: "8px", width: "30%", background: "#f8fafc", borderRadius: "4px" }}></div>
            </div>
          </div>
          <div style={{ height: "100px", width: "100%", border: "1px dashed var(--border)", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)" }}>Data Visualization</div>
        </div>
      </div>
    </div>

    <div className="detail-row" style={{ direction: "rtl" }}>
      <div style={{ direction: "ltr" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>Visual Pipeline Automation</h2>
        <p style={{ marginBottom: "2.5rem" }}>Move deals faster with a canvas-style interface that handles the grunt work. If you can dream it, you can automate it.</p>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <li style={{ display: "flex", alignItems: "center", gap: "1rem", fontWeight: "600" }}><div style={{ width: "20px", height: "20px", background: "var(--primary)", borderRadius: "50%", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem" }}>✓</div> Multi-stage visual pipelines</li>
          <li style={{ display: "flex", alignItems: "center", gap: "1rem", fontWeight: "600" }}><div style={{ width: "20px", height: "20px", background: "var(--primary)", borderRadius: "50%", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem" }}>✓</div> Drag-and-drop workflow builder</li>
          <li style={{ display: "flex", alignItems: "center", gap: "1rem", fontWeight: "600" }}><div style={{ width: "20px", height: "20px", background: "var(--primary)", borderRadius: "50%", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem" }}>✓</div> Automated follow-ups & tasks</li>
        </ul>
      </div>
      <div className="detail-visual">
         <div style={{ display: "flex", gap: "1rem" }}>
           <div style={{ flex: "1", height: "200px", background: "white", borderRadius: "1rem", border: "1px solid var(--border)" }}></div>
           <div style={{ flex: "1", height: "200px", background: "var(--primary)", opacity: "0.1", borderRadius: "1rem", border: "1px solid var(--primary)" }}></div>
         </div>
      </div>
    </div>
  </section>

  {/* Footer is in Layout */}

  <script>
    window.addEventListener('scroll', function() {
      const header = document.getElementById('main-header');
      if (window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    });

    // Mobile Menu Toggle logic
    const toggle = document.getElementById('mobile-toggle');
    const closeBtn = document.getElementById('mobile-close');
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('menu-overlay');

    function toggleMenu() {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    }

    toggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
  </script>
    </motion.div>
  );
};

export default Features;
