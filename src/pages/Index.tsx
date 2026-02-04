import { useEffect } from "react";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    document.title = "Homepage";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <!-- HEADER -->
  {/* Header is in Layout */}

  <!-- MOBILE MENU -->
  <div className="menu-overlay" id="menu-overlay"></div>
  <div className="mobile-menu" id="mobile-menu">
    <div className="close-menu" id="mobile-close">×</div>
    <ul>
      <li><a href="features.html">Features</a></li>
      <li><a href="#ai" className="mobile-link">AI Intelligence</a></li>
      <li><a href="#solutions" className="mobile-link">Solutions</a></li>
      <li><a href="#pricing" className="mobile-link">Pricing</a></li>
    </ul>
    <div style={{ marginTop: "auto", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
      <a href="#" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1rem" }}>Get Started</a>
    </div>
  </div>

  <!-- HERO SECTION -->
  <section className="hero">
    <div className="hero-gradient-bg">
      <div className="hero-orb orb-1"></div>
      <div className="hero-orb orb-2"></div>
    </div>
    <div className="container">
      <span className="hero-badge animate-fade-in">Now Available: Aladdin 2.0</span>
      <h1 className="animate-fade-in-up">The intelligent<br />spine of your business.</h1>
      <p className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>One platform for CRM, automation, and custom AI tools. Designed for teams who value speed, clarity, and performance.</p>
      <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <a href="#" className="btn btn-primary">Start Building</a>
        <a href="#" className="btn btn-secondary">Request Demo</a>
      </div>

      <div className="hero-mockup animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <div className="mockup-main">
          <div className="mockup-sidebar">
            <div className="mockup-bar" style={{ width: "100%", height: "44px", marginBottom: "3rem", background: "#eee" }}></div>
            <div className="mockup-bar" style={{ width: "85%" }}></div>
            <div className="mockup-bar" style={{ width: "65%" }}></div>
            <div className="mockup-bar" style={{ width: "75%" }}></div>
            <div className="mockup-bar" style={{ width: "55%", marginTop: "2rem" }}></div>
          </div>
          <div className="mockup-content">
            <div style={{ display: "flex", gap: "1.5rem", marginBottom: "3rem" }}>
              <div className="mockup-bar" style={{ flex: "1", height: "140px", borderRadius: "16px" }}></div>
              <div className="mockup-bar" style={{ flex: "1", height: "140px", borderRadius: "16px" }}></div>
              <div className="mockup-bar" style={{ flex: "1", height: "140px", borderRadius: "16px" }}></div>
            </div>
            <div className="mockup-bar" style={{ width: "100%", height: "260px", borderRadius: "16px" }}></div>
          </div>
        </div>
        
        <!-- Floating Glass Cards -->
        <div className="floating-card glass card-ai">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }}></div>
            <span style={{ font- letterSpacing: "0.05em" }}>AI Copilot</span>
          </div>
          <p style={{ fontSize: "0.95rem", color: "var(--foreground)", lineHeight: "1.4" }}>"Analyzing market trends... Found 12 high-intent leads in your region."</p>
        </div>
        <div className="floating-card glass card-stats">
          <div style={{ fontWeight: "700", fontSize: "1.75rem", color: "var(--foreground)", letterSpacing: "-0.04em" }}>98.4%</div>
          <p style={{ fontSize: "0.85rem", marginBottom: "1.25rem" }}>Lead Accuracy</p>
          <div style={{ height: "6px", width: "100%", background: "rgba(0,0,0,0.05)", borderRadius: "3px" }}>
            <div style={{ height: "100%", width: "85%", background: "var(--primary)", borderRadius: "3px" }}></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section id="features" className="container" style={{ paddingBottom: "15rem" }}>
    <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 7rem" }}>
      <h2 style={{ marginBottom: "2rem" }}>High performance,<br />minimal effort.</h2>
      <p style={{ fontSize: "1.25rem" }}>Legacy CRMs are cluttered with features you'll never use. Aladdin is built around a single philosophy: Clarity is power.</p>
    </div>

    <div className="grid grid-3">
      <div className="feature-card glass">
        <div className="icon-box">✦</div>
        <h3>Smart Contacts</h3>
        <p>A multidimensional view of your customers. Automatic enrichment pulls social, professional, and firmographic data in real-time.</p>
      </div>
      <div className="feature-card glass">
        <div className="icon-box">✥</div>
        <h3>Fluid Pipelines</h3>
        <p>Manage high-velocity sales cycles with a canvas-style interface. Drag, drop, and automate deal progression seamlessly.</p>
      </div>
      <div className="feature-card glass">
        <div className="icon-box">✧</div>
        <h3>Auto-Workflows</h3>
        <p>Beyond simple "if-then" logic. Build complex, intelligent chains of action that handle the busy work across your entire tech stack.</p>
      </div>
    </div>
  </section>

  <!-- AI INTELLIGENCE -->
  <section id="ai" className="ai-section ai-glow" style={{ padding: "6rem 0", marginTop: "2rem", background: "var(--background-alt)", color: "var(--foreground)", borderRadius: "3.5rem" }}>
    <div className="container">
      <div className="grid grid-2" style={{ alignItems: "center", gap: "5rem" }}>
        <div className="animate-fade-in-up">
          <span style={{ color: "var(--primary)", fontWeight: "700", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.15em", marginBottom: "1rem", display: "block" }}>Machine Intelligence</span>
          <h2 style={{ marginBottom: "1.5rem", color: "var(--foreground)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>Intelligence that<br />anticipates.</h2>
          <p style={{ marginBottom: "2.5rem", fontSize: "1.1rem", color: "var(--muted)", lineHeight: "1.6", maxWidth: "500px" }}>Aladdin interprets your data in real-time. Our engine surfaces critical business insights before you even ask the question.</p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
              <div style={{ color: "var(--primary)", fontSize: "1.25rem", fontWeight: "700", fontFamily: "var(--font-heading)", lineHeight: "1", opacity: "0.8" }}>01</div>
              <div>
                <h4 style={{ fontSize: "1.15rem", marginBottom: "0.4rem", color: "var(--foreground)", letterSpacing: "-0.01em" }}>Predictive Lead Scoring</h4>
                <p style={{ fontSize: "0.95rem", color: "var(--muted)" }}>Prioritize high-value accounts with precision accuracy.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
              <div style={{ color: "var(--primary)", fontSize: "1.25rem", fontWeight: "700", fontFamily: "var(--font-heading)", lineHeight: "1", opacity: "0.8" }}>02</div>
              <div>
                <h4 style={{ fontSize: "1.15rem", marginBottom: "0.4rem", color: "var(--foreground)", letterSpacing: "-0.01em" }}>Hyper-Personalization</h4>
                <p style={{ fontSize: "0.95rem", color: "var(--muted)" }}>Generate outreach based on years of interaction history.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ position: "relative" }} className="animate-fade-in">
          <!-- Dark Contrast Card for the Brain Interface -->
          <div style={{ background: "#0f172a", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "2rem", padding: "2.5rem", boxShadow: "0 30px 60px -12px rgba(0,0,0,0.25)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "48px", height: "48px", background: "linear-gradient(135deg, var(--primary), var(--primary-light))", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", boxShadow: "0 0 30px rgba(0, 85, 255, 0.3)" }}>✦</div>
                <div>
                  <span style={{ display: "block", fontWeight: "700", fontSize: "1.1rem", color: "#ffffff", letterSpacing: "-0.02em" }}>Aladdin Brain</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.15rem" }}>
                    <span className="ai-status-pulse"></span>
                    <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Analyzing</span>
                  </div>
                </div>
              </div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.8rem", color: "#475569", fontWeight: "600" }}>v4.2 PRO</div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "1.5rem", borderRadius: "1rem", border: "1px solid rgba(255, 255, 255, 0.05)", position: "relative" }}>
                <div style={{ position: "absolute", top: "0", left: "0", width: "3px", height: "100%", background: "var(--primary)" }}></div>
                <p style={{ fontSize: "1rem", color: "#e2e8f0", fontWeight: "400", lineHeight: "1.5", fontStyle: "italic" }}>"I've detected an engagement drop. I recommend triggering the Q4 sequence for 12 accounts."</p>
              </div>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
                <div>
                  <div style={{ fontSize: "0.65rem", color: "#64748b", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em" }}>Confidence</div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "#ffffff", fontWeight: "700" }}>98.4%</div>
                </div>
                <button className="btn" style={{ background: "#ffffff", color: "#0f172a", fontWeight: "700", borderRadius: "8px", padding: "0.75rem 1.25rem", fontSize: "0.85rem", border: "none", cursor: "pointer", transition: "all 0.2s" }}>
                  Execute
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>
      #ai .ai-status-pulse {
        width: 6px;
        height: 6px;
        background: #10b981;
        border-radius: 50%;
        display: inline-block;
        box-shadow: 0 0 10px #10b981;
        animation: ai-glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      @keyframes ai-glow-pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(1.3); }
      }
      #ai .btn:hover {
        transform: translateY(-2px);
        background: #f1f5f9;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }
    </style>
  </section>

  <!-- TRUST & SECURITY -->
  <section style={{ background: "white" }}>
    <div className="container">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "8rem" }}>
        <h2 style={{ marginBottom: "2rem" }}>Fortified Intelligence.</h2>
        <p style={{ maxWidth: "700px" }}>Your data is the fuel of your business. We treat it with enterprise-grade security, ensuring total privacy and sovereignty.</p>
      </div>
      
      <div className="grid grid-3">
        <div style={{ padding: "2.5rem", background: "#fafafa", borderRadius: "2rem" }}>
          <div style={{ fontWeight: "700", fontSize: "2.5rem", marginBottom: "1rem", color: "var(--foreground)", letterSpacing: "-0.05em" }}>256-bit</div>
          <p style={{ fontWeight: "600", color: "var(--foreground)", marginBottom: "0.5rem" }}>AES Encryption</p>
          <p style={{ fontSize: "0.95rem" }}>Military-grade security for every byte of data stored on our platform.</p>
        </div>
        <div style={{ padding: "2.5rem", background: "#fafafa", borderRadius: "2rem" }}>
          <div style={{ fontWeight: "700", fontSize: "2.5rem", marginBottom: "1rem", color: "var(--foreground)", letterSpacing: "-0.05em" }}>SOC2</div>
          <p style={{ fontWeight: "600", color: "var(--foreground)", marginBottom: "0.5rem" }}>Compliant Infrastructure</p>
          <p style={{ fontSize: "0.95rem" }}>Regular external audits to ensure the highest standards of availability and integrity.</p>
        </div>
        <div style={{ padding: "2.5rem", background: "#fafafa", borderRadius: "2rem" }}>
          <div style={{ fontWeight: "700", fontSize: "2.5rem", marginBottom: "1rem", color: "var(--foreground)", letterSpacing: "-0.05em" }}>100%</div>
          <p style={{ fontWeight: "600", color: "var(--foreground)", marginBottom: "0.5rem" }}>Data Ownership</p>
          <p style={{ fontSize: "0.95rem" }}>You own your data. Export it anytime, in any format. No vendor lock-in, ever.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRICING SECTION -->
  <section id="pricing" style={{ background: "var(--background-alt)", padding: "10rem 0" }}>
    <div className="container">
      <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 5rem" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>Scalable Plans for Teams.</h2>
        <p>From individual builders to enterprise-scale marketing operations.</p>
      </div>
      <div className="grid grid-3">
        <div className="feature-card glass" style={{ display: "flex", flexDirection: "column" }}>
          <h3 style={{ marginBottom: "0.5rem", fontSize: "1.5rem" }}>Starter</h3>
          <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "var(--foreground)", marginBottom: "1.5rem" }}>$49<span style={{ fontSize: "1rem", color: "var(--muted)", fontWeight: "400" }}>/mo</span></div>
          <p style={{ fontSize: "0.95rem", marginBottom: "2rem" }}>Basic CRM and automation tools for growing teams.</p>
          <ul style={{ listStyle: "none", marginBottom: "auto", paddingBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
             <li style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}><span style={{ color: "var(--primary)" }}>✓</span> 1,000 Contacts</li>
             <li style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}><span style={{ color: "var(--primary)" }}>✓</span> Standard Pipelines</li>
             <li style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}><span style={{ color: "var(--primary)" }}>✓</span> Email Support</li>
          </ul>
          <a href="#" className="btn btn-secondary" style={{ width: "100%", justifyContent: "center", marginLeft: "0" }}>Get Started</a>
        </div>

        <div className="feature-card glass" style={{ display: "flex", flexDirection: "column", border: "2px solid var(--primary)", position: "relative", transform: "translateY(-10px)" }}>
          <div style={{ position: "absolute", top: "-15px", left: "50%", transform: "translateX(-50%)", background: "var(--primary)", color: "white", padding: "0.25rem 1rem", borderRadius: "20px", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.05em" }}>MOST POPULAR</div>
          <h3 style={{ marginBottom: "0.5rem", fontSize: "1.5rem" }}>Marketing Services</h3>
          <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "var(--foreground)", marginBottom: "1.5rem" }}>$200<span style={{ fontSize: "1rem", color: "var(--muted)", fontWeight: "400" }}>/mo</span></div>
          <p style={{ fontSize: "0.95rem", marginBottom: "2rem" }}>Advanced AI marketing engine and full-scale lead generation.</p>
          <ul style={{ listStyle: "none", marginBottom: "auto", paddingBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
             <li style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}><span style={{ color: "var(--primary)" }}>✓</span> 10,000 Contacts</li>
             <li style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}><span style={{ color: "var(--primary)" }}>✓</span> AI Outreach Copilot</li>
             <li style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}><span style={{ color: "var(--primary)" }}>✓</span> Marketing Automation</li>
             <li style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}><span style={{ color: "var(--primary)" }}>✓</span> Priority Support</li>
          </ul>
          <!-- Checkout Button -->
          <button 
            id="checkout-btn-aladine" 
            style={{ width: "100%", padding: "14px 28px", background: "linear-gradient(135deg, #0ea5e9, #06b6d4)", color: "white", border: "none", borderRadius: "10px", cursor: "pointer", fontSize: "16px", fontWeight: "600", boxShadow: "0 4px 14px rgba(99, 102, 241, 0.4)", transition: "all 0.2s ease" }}
            onMouseOver="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(99, 102, 241, 0.5)';"
            onMouseOut="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 14px rgba(99, 102, 241, 0.4)';"
          >
            Buy now
          </button>

          <script>
          (function() {
            var btn = document.getElementById('checkout-btn-aladine');
            if (btn) {
              btn.addEventListener('click', function() {
                var width = 550;
                var height = 750;
                var left = (screen.width - width) / 2;
                var top = (screen.height - height) / 2;
                window.open(
                  'https://app.aladine.io/checkout/aladine', 
                  'checkout', 
                  'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top + ',toolbar=no,menubar=no,scrollbars=yes,resizable=yes'
                );
              });
            }
          })();
          </script>
        </div>

        <div className="feature-card glass" style={{ display: "flex", flexDirection: "column" }}>
          <h3 style={{ marginBottom: "0.5rem", fontSize: "1.5rem" }}>Enterprise</h3>
          <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "var(--foreground)", marginBottom: "1.5rem" }}>Custom</div>
          <p style={{ fontSize: "0.95rem", marginBottom: "2rem" }}>Unlimited power for high-velocity operations and custom AI.</p>
          <ul style={{ listStyle: "none", marginBottom: "rem" }}>
             <li style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}><span style={{ color: "var(--primary)" }}>✓</span> Unlimited Contacts</li>
             <li style={{ fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}><span style={{ color: "var(--primary", alignItems: "center", gap: "0.5rem" }}><span style={{ color: "var(--primary)" }}>✓</span> Dedicated Manager</li>
          </ul>
          <a href="#" className="btn btn-secondary" style={{ width: "100%", justifyContent: "center", marginLeft: "0" }}>Contact Sales</a>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section id="cta" style={{ paddingBottom: "8rem" }}>
    <div className="container">
      <div style={{ background: "var(--foreground)", padding: "8rem 4rem", borderRadius: "3.5rem", textAlign: "center", position: "relative", overflow: "hidden", marginBottom: "4rem" }}>
        <div style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", background: "radial-gradient(circle at center, rgba(0, 85, 255, 0.2) 0%, transparent 70%)", pointerEvents: "none" }}></div>
        <h2 style={{ color: "white", marginBottom: "2.5rem", position: "relative" }}>Ready to evolve?</h2>
        <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "0 auto 4rem", fontSize: "1.25rem", position: "relative" }}>Join 2,000+ scaling teams who have moved their operations to Aladdin.</p>
        <div style={{ position: "relative" }}>
          <a href="#" className="btn btn-primary" style={{ background: "white", color: "var(--foreground)", fontSize: "1.1rem", padding: "1.25rem 3.5rem" }}>Get Started for Free</a>
        </div>
        <p style={{ color: "#64748b", marginTop: "2rem", fontSize: "0.9rem" }}>Full access. No credit card required.</p>
      </div>

      <!-- Form Iframe -->
      <div style={{ width: "100%", maxWidth: "900px", margin: "0 auto", background: "white", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-xl)" }}>
        <iframe 
          src="https://app.aladine.io/form/f7fe5c50-b20a-4f29-a354-98f72c2dc413" 
          width="100%" 
          height="600px" 
          frameborder="0" 
          style={{ borderRadius: "0px", overflow: "hidden", display: "block" }}
          allow="clipboard-write"
        ></iframe>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  {/* Footer is in Layout */}

  <script>
    // Header Scroll Effect
    window.addEventListener('scroll', function() {
      const header = document.getElementById('main-header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Mobile Menu Toggle
    const toggle = document.getElementById('mobile-toggle');
    const closeBtn = document.getElementById('mobile-close');
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
      toggle.classList.toggle('active');
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    }

    toggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu();
      });
    });
  </script>

  <!-- Professional Floating Chatbot Widget -->
  <div id="cashflow-chatbot-chatbot_agent-1770188684248"></div>
  <script>
  (function() {
    // Configuration
    const config = {
      chatbotUrl: 'https://app.aladine.io/chatbot/preview/chatbot_agent-1770188684248?name=Mein+Chatbot&welcomeMessage=Wie+kann+ich+dir+helfen%3F&headerSubtitle=Online&typingText=Schreibt...&inputPlaceholder=Schreibe+eine+Nachricht...&primaryColor=%238b5cf6&secondaryColor=%233b82f6&backgroundColor=%230f172a&backgroundGradient=%231e293b&textColor=%23ffffff&borderColor=%23475569&iconColor=%23ffffff&selectedIcon=MessageCircleMore&width=400&height=600',
      primaryColor: '#8b5cf6',
      secondaryColor: '#3b82f6',
      name: 'Mein Chatbot'
    };

    // Create chat container with close button
    const container = document.createElement('div');
    container.id = 'cashflow-chat-container';
    container.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 400px;
      height: 600px;
      border-radius: 20px;
      box-shadow: 0 25px 50px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.15);
      overflow: hidden;
      z-index: 9999;
      opacity: 0;
      transform: translateY(30px) scale(0.9);
      pointer-events: none;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      display: none;
    `;

    // Create close button inside container
    const closeBtn = document.createElement('button');
    closeBtn.id = 'cashflow-close-btn';
    closeBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;
    closeBtn.style.cssText = `
      position: absolute;
      top: 16px;
      right: 16px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(0,0,0,0.2);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.2);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      transition: all 0.2s ease;
    `;

    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.src = config.chatbotUrl;
    iframe.style.cssText = `
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 20px;
      background: transparent;
    `;
    iframe.title = config.name;

    container.appendChild(closeBtn);
    container.appendChild(iframe);

    // Create floating button
    const button = document.createElement('button');
    button.id = 'cashflow-chat-button';
    button.innerHTML = `
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z M8 12h.01 M12 12h.01 M16 12h.01"></path>
      </svg>
    `;
    button.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: linear-gradient(135deg, ${config.primaryColor} 0%, ${config.secondaryColor} 100%);
      box-shadow: 0 8px 24px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.1);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9998;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: none;
      outline: none;
    `;

    // Open chat
    button.addEventListener('click', function() {
      container.style.display = 'block';
      button.style.opacity = '0';
      button.style.transform = 'scale(0.8)';
      button.style.pointerEvents = 'none';
      
      setTimeout(function() {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0) scale(1)';
        container.style.pointerEvents = 'auto';
      }, 50);
    });

    // Close chat
    closeBtn.addEventListener('click', function() {
      container.style.opacity = '0';
      container.style.transform = 'translateY(30px) scale(0.9)';
      container.style.pointerEvents = 'none';
      
      setTimeout(function() {
        container.style.display = 'none';
        button.style.opacity = '1';
        button.style.transform = 'scale(1)';
        button.style.pointerEvents = 'auto';
      }, 300);
    });

    // Hover effects for buttons
    button.addEventListener('mouseenter', function() {
      button.style.transform = 'scale(1.08)';
      button.style.boxShadow = '0 12px 32px rgba(0,0,0,0.2), 0 6px 16px rgba(0,0,0,0.15)';
    });

    button.addEventListener('mouseleave', function() {
      if (container.style.display === 'none') {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.1)';
      }
    });

    closeBtn.addEventListener('mouseenter', function() {
      closeBtn.style.background = 'rgba(0,0,0,0.4)';
      closeBtn.style.transform = 'scale(1.1)';
    });

    closeBtn.addEventListener('mouseleave', function() {
      closeBtn.style.background = 'rgba(0,0,0,0.2)';
      closeBtn.style.transform = 'scale(1)';
    });

    // Responsive design
    function adjustForMobile() {
      if (window.innerWidth < 480) {
        container.style.width = 'calc(100vw - 24px)';
        container.style.height = 'calc(100vh - 80px)';
        container.style.right = '12px';
        container.style.bottom = '12px';
        container.style.borderRadius = '16px';
        button.style.right = '16px';
        button.style.bottom = '16px';
        button.style.width = '56px';
        button.style.height = '56px';
      } else {
        container.style.width = '400px';
        container.style.height = '600px';
        container.style.right = '24px';
        container.style.bottom = '24px';
        container.style.borderRadius = '20px';
        button.style.right = '24px';
        button.style.bottom = '24px';
        button.style.width = '64px';
        button.style.height = '64px';
      }
    }

    window.addEventListener('resize', adjustForMobile);
    adjustForMobile();

    // Append to DOM
    document.body.appendChild(button);
    document.body.appendChild(container);
  })();
  </script>
  <style>
    @keyframes chatbot-pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.25); }
      50% { box-shadow: 0 0 0 8px rgba(139, 92, 246, 0); }
    }
  </style>
    </motion.div>
  );
};

export default Index;
