import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HTML_FRAGMENT = "<header id=\"main-header\">\n    <div class=\"container\">\n      <nav>\n        <a href=\"/\" class=\"nav-logo\">\n          <img src=\"https://jqovtbiellasfchtdmbu.supabase.co/storage/v1/object/public/website-builder-assets/70558917-a924-4110-aaca-0167e221b4b5/1770117972837-1tb2la.png\" alt=\"Aladdin Logo\">\n        </a>\n        <ul class=\"nav-links\">\n          <li><a href=\"/features\">Features</a></li>\n          <li><a href=\"#ai\">AI Intelligence</a></li>\n          <li><a href=\"#solutions\">Solutions</a></li>\n          <li><a href=\"#pricing\">Pricing</a></li>\n        </ul>\n        <div class=\"nav-cta\">\n          <a href=\"#\" class=\"btn btn-primary\" style=\"padding: 0.7rem 1.75rem; font-size: 0.9rem; border-radius: 10px;\">Get Started</a>\n        </div>\n        <div class=\"menu-toggle\" id=\"mobile-toggle\">\n          <span></span>\n          <span></span>\n          <span></span>\n        </div>\n      </nav>\n    </div>\n  </header>\n\n  <!-- MOBILE MENU -->\n  <div class=\"menu-overlay\" id=\"menu-overlay\"></div>\n  <div class=\"mobile-menu\" id=\"mobile-menu\">\n    <div class=\"close-menu\" id=\"mobile-close\">×</div>\n    <ul>\n      <li><a href=\"/features\">Features</a></li>\n      <li><a href=\"index.html#ai\" class=\"mobile-link\">AI Intelligence</a></li>\n      <li><a href=\"#solutions\" class=\"mobile-link\">Solutions</a></li>\n      <li><a href=\"#pricing\" class=\"mobile-link\">Pricing</a></li>\n    </ul>\n    <div style=\"margin-top: auto; padding-top: 2rem; border-top: 1px solid var(--border);\">\n      <a href=\"#\" class=\"btn btn-primary\" style=\"width: 100%; justify-content: center; font-size: 1rem;\">Get Started</a>\n    </div>\n  </div>\n\n  <section style=\"padding-top: 14rem; text-align: center; background: radial-gradient(circle at 50% 0%, rgba(0, 85, 255, 0.05) 0%, transparent 60%);\">\n    <div class=\"container\">\n      <span style=\"text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700; color: var(--primary); font-size: 0.8rem; display: block; margin-bottom: 1.5rem;\">The Infrastructure</span>\n      <h1>Built for speed.<br>Designed for clarity.</h1>\n      <p style=\"max-width: 700px; margin: 2rem auto 4rem; font-size: 1.25rem;\">Explore the powerful tools that make Aladdin the preferred choice for 2,000+ high-growth teams.</p>\n    </div>\n  </section>\n\n  <section class=\"container\">\n    <div class=\"detail-row\">\n      <div>\n        <h2 style=\"margin-bottom: 1.5rem;\">Intelligent Contact Management</h2>\n        <p style=\"margin-bottom: 2.5rem;\">Beyond a simple database. Aladdin creates a living record of every prospect, enriched with 200+ data points in real-time.</p>\n        <ul style=\"list-style: none; display: flex; flex-direction: column; gap: 1rem;\">\n          <li style=\"display: flex; align-items: center; gap: 1rem; font-weight: 600;\"><div style=\"width: 20px; height: 20px; background: var(--primary); border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.7rem;\">✓</div> Auto-Enrichment from LinkedIn & Web</li>\n          <li style=\"display: flex; align-items: center; gap: 1rem; font-weight: 600;\"><div style=\"width: 20px; height: 20px; background: var(--primary); border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.7rem;\">✓</div> Real-time Intent Signaling</li>\n          <li style=\"display: flex; align-items: center; gap: 1rem; font-weight: 600;\"><div style=\"width: 20px; height: 20px; background: var(--primary); border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.7rem;\">✓</div> Unified Interaction Timeline</li>\n        </ul>\n      </div>\n      <div class=\"detail-visual\">\n        <div style=\"height: 300px; background: white; border-radius: 1rem; box-shadow: var(--shadow-xl); padding: 2rem;\">\n          <div style=\"display: flex; gap: 1rem; align-items: center; margin-bottom: 2rem;\">\n            <div style=\"width: 48px; height: 48px; border-radius: 50%; background: #f1f5f9;\"></div>\n            <div style=\"flex: 1;\">\n              <div style=\"height: 12px; width: 60%; background: #eee; border-radius: 6px; margin-bottom: 8px;\"></div>\n              <div style=\"height: 8px; width: 30%; background: #f8fafc; border-radius: 4px;\"></div>\n            </div>\n          </div>\n          <div style=\"height: 100px; width: 100%; border: 1px dashed var(--border); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: var(--muted);\">Data Visualization</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"detail-row\" style=\"direction: rtl;\">\n      <div style=\"direction: ltr;\">\n        <h2 style=\"margin-bottom: 1.5rem;\">Visual Pipeline Automation</h2>\n        <p style=\"margin-bottom: 2.5rem;\">Move deals faster with a canvas-style interface that handles the grunt work. If you can dream it, you can automate it.</p>\n        <ul style=\"list-style: none; display: flex; flex-direction: column; gap: 1rem;\">\n          <li style=\"display: flex; align-items: center; gap: 1rem; font-weight: 600;\"><div style=\"width: 20px; height: 20px; background: var(--primary); border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.7rem;\">✓</div> Multi-stage visual pipelines</li>\n          <li style=\"display: flex; align-items: center; gap: 1rem; font-weight: 600;\"><div style=\"width: 20px; height: 20px; background: var(--primary); border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.7rem;\">✓</div> Drag-and-drop workflow builder</li>\n          <li style=\"display: flex; align-items: center; gap: 1rem; font-weight: 600;\"><div style=\"width: 20px; height: 20px; background: var(--primary); border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.7rem;\">✓</div> Automated follow-ups & tasks</li>\n        </ul>\n      </div>\n      <div class=\"detail-visual\">\n         <div style=\"display: flex; gap: 1rem;\">\n           <div style=\"flex: 1; height: 200px; background: white; border-radius: 1rem; border: 1px solid var(--border);\"></div>\n           <div style=\"flex: 1; height: 200px; background: var(--primary); opacity: 0.1; border-radius: 1rem; border: 1px solid var(--primary);\"></div>\n         </div>\n      </div>\n    </div>\n  </section>\n\n  <footer>\n    <div class=\"container\">\n      <div class=\"footer-grid\">\n        <div>\n          <a href=\"/\" class=\"footer-logo\">\n            <img src=\"https://jqovtbiellasfchtdmbu.supabase.co/storage/v1/object/public/website-builder-assets/70558917-a924-4110-aaca-0167e221b4b5/1770117972837-1tb2la.png\" alt=\"Aladdin Logo\">\n          </a>\n          <p style=\"font-size: 1rem; line-height: 1.6;\">The intelligent operating system for modern business teams. CRM, AI, and Automation, unified.</p>\n        </div>\n        <div class=\"footer-links\">\n          <h4>Platform</h4>\n          <ul>\n            <li><a href=\"/features\">Capabilities</a></li>\n            <li><a href=\"#ai\">AI Engine</a></li>\n            <li><a href=\"#\">Security</a></li>\n            <li><a href=\"#pricing\">Pricing</a></li>\n          </ul>\n        </div>\n        <div class=\"footer-links\">\n          <h4>Company</h4>\n          <ul>\n            <li><a href=\"#\">Our Story</a></li>\n            <li><a href=\"#\">Open Roles</a></li>\n            <li><a href=\"#\">Newsroom</a></li>\n            <li><a href=\"#\">Contact</a></li>\n          </ul>\n        </div>\n        <div class=\"footer-links\">\n          <h4>Resources</h4>\n          <ul>\n            <li><a href=\"#\">Documentation</a></li>\n            <li><a href=\"#\">API Status</a></li>\n            <li><a href=\"#\">Privacy</a></li>\n            <li><a href=\"#\">Terms</a></li>\n          </ul>\n        </div>\n      </div>\n      <div style=\"margin-top: 6rem; padding-top: 2rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: var(--muted);\">\n        <p>© 2024 Aladdin Inc. All rights reserved.</p>\n        <div style=\"display: flex; gap: 2.5rem;\">\n          <a href=\"#\" style=\"color: var(--muted); text-decoration: none;\">Twitter / X</a>\n          <a href=\"#\" style=\"color: var(--muted); text-decoration: none;\">LinkedIn</a>\n        </div>\n      </div>\n    </div>\n  </footer>\n\n  <script>\n    window.addEventListener('scroll', function() {\n      const header = document.getElementById('main-header');\n      if (window.scrollY > 50) header.classList.add('scrolled');\n      else header.classList.remove('scrolled');\n    });\n\n    // Mobile Menu Toggle logic\n    const toggle = document.getElementById('mobile-toggle');\n    const closeBtn = document.getElementById('mobile-close');\n    const menu = document.getElementById('mobile-menu');\n    const overlay = document.getElementById('menu-overlay');\n\n    function toggleMenu() {\n      menu.classList.toggle('active');\n      overlay.classList.toggle('active');\n      document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';\n    }\n\n    toggle.addEventListener('click', toggleMenu);\n    closeBtn.addEventListener('click', toggleMenu);\n    overlay.addEventListener('click', toggleMenu);\n  </script>";
const PAGE_JS = "window.addEventListener('scroll', function() {\n      const header = document.getElementById('main-header');\n      if (window.scrollY > 50) header.classList.add('scrolled');\n      else header.classList.remove('scrolled');\n    });\n\n    // Mobile Menu Toggle logic\n    const toggle = document.getElementById('mobile-toggle');\n    const closeBtn = document.getElementById('mobile-close');\n    const menu = document.getElementById('mobile-menu');\n    const overlay = document.getElementById('menu-overlay');\n\n    function toggleMenu() {\n      menu.classList.toggle('active');\n      overlay.classList.toggle('active');\n      document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';\n    }\n\n    toggle.addEventListener('click', toggleMenu);\n    closeBtn.addEventListener('click', toggleMenu);\n    overlay.addEventListener('click', toggleMenu);";

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Features | Aladdin - The Intelligent Operating System";
  }, []);

  // Handle internal navigation clicks - intercept <a> tags and use React Router
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Check if it's an internal link (starts with / or is relative without http)
      if (href.startsWith('/') || (!href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:'))) {
        e.preventDefault();
        // Handle hash links for same-page scrolling
        if (href.startsWith('#')) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          navigate(href);
        }
      }
    };

    container.addEventListener('click', handleClick);
    return () => container.removeEventListener('click', handleClick);
  }, [navigate]);

  // Execute page-specific JavaScript
  useEffect(() => {
    if (!PAGE_JS) return;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.dataset.generated = "website-builder";
    script.textContent = PAGE_JS;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div ref={containerRef} dangerouslySetInnerHTML={{ __html: HTML_FRAGMENT }} />
    </motion.div>
  );
};

export default Features;
