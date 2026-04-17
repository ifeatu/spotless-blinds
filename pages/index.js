import { useState, useEffect } from "react";
import Head from "next/head";

const LOGO_SRC = "data:image/png;base64,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";

const B = {
  navy: "#0F1923", dark: "#162029", slate: "#1E2A36", steel: "#2A3A48",
  gold: "#C9A96E", goldLight: "#D4B87A", goldMuted: "#A08B5B",
  mint: "#74C69D", sage: "#52B788", green: "#40916C",
  cream: "#F5F0E8", warmWhite: "#FAF8F5", offwhite: "#F2EDE5",
  text: "#2C3E2D", lightText: "#8A9BA0", white: "#FFFFFF",
  forest: "#1B4332",
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <Head>
        <title>Spotless Blinds Co. | Premium Blind Cleaning - Bay Area</title>
        <meta name="description" content="Professional ultrasonic blind cleaning for homes in Marin, Walnut Creek, Tiburon and the SF Bay Area." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; color: ${B.text}; background: ${B.warmWhite}; overflow-x: hidden; }

        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 12px 20px; transition: all 0.3s ease; }
        .nav-scrolled { background: rgba(15,25,35,0.97); backdrop-filter: blur(12px); box-shadow: 0 2px 24px rgba(0,0,0,0.2); }
        .nav-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .nav-logo { height: 36px; width: auto; }
        .nav-links { display: flex; gap: 28px; align-items: center; }
        .nav-links a { color: rgba(255,255,255,0.75); text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
        .nav-links a:hover { color: ${B.gold}; }
        .nav-cta { background: ${B.gold}; color: ${B.navy}; padding: 10px 22px; border-radius: 100px; font-size: 14px; font-weight: 600; text-decoration: none; border: none; cursor: pointer; transition: all 0.2s; }
        .nav-cta:hover { background: ${B.goldLight}; }
        .hamburger { display: none; background: none; border: none; cursor: pointer; padding: 8px; }
        .hamburger span { display: block; width: 24px; height: 2px; background: white; margin: 5px 0; transition: 0.3s; }
        .mobile-menu { display: none; position: fixed; top: 60px; left: 0; right: 0; background: rgba(15,25,35,0.98); backdrop-filter: blur(12px); padding: 20px; z-index: 99; }
        .mobile-menu a { display: block; color: white; text-decoration: none; padding: 14px 0; font-size: 16px; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .mobile-menu .nav-cta { display: inline-block; margin-top: 16px; text-align: center; width: 100%; }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
          .mobile-menu.open { display: block; }
        }

        .hero { min-height: 100vh; display: flex; align-items: center; justify-content: center;
          background: linear-gradient(160deg, ${B.navy} 0%, ${B.dark} 35%, ${B.slate} 70%, ${B.steel} 100%);
          padding: 100px 20px 60px; text-align: center; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 30% 20%, rgba(201,169,110,0.06) 0%, transparent 60%),
                      radial-gradient(ellipse at 70% 80%, rgba(116,198,157,0.04) 0%, transparent 50%);
          pointer-events: none; }
        .hero-inner { position: relative; z-index: 2; max-width: 800px; }
        .hero-logo { height: 100px; width: auto; margin-bottom: 32px; filter: drop-shadow(0 4px 20px rgba(201,169,110,0.15)); }
        .hero h1 { font-family: 'Playfair Display', serif; font-size: 64px; font-weight: 600; color: white; line-height: 1.08; margin-bottom: 20px; }
        .hero h1 span { color: ${B.gold}; }
        .hero p { font-size: 18px; color: rgba(255,255,255,0.65); line-height: 1.6; max-width: 580px; margin: 0 auto 36px; font-weight: 300; }
        .hero-cta { display: inline-flex; align-items: center; gap: 10px; background: ${B.gold}; color: ${B.navy};
          font-size: 16px; font-weight: 600; padding: 16px 36px; border-radius: 100px; text-decoration: none; transition: all 0.3s; }
        .hero-cta:hover { background: ${B.goldLight}; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(201,169,110,0.3); }

        @media (max-width: 768px) {
          .hero { min-height: auto; padding: 120px 20px 60px; }
          .hero-logo { height: 64px; margin-bottom: 24px; }
          .hero h1 { font-size: 36px; }
          .hero p { font-size: 16px; }
          .hero-cta { padding: 14px 28px; font-size: 15px; width: 100%; justify-content: center; }
        }

        .section { padding: 80px 20px; }
        .section-inner { max-width: 1100px; margin: 0 auto; }
        .section-title { font-family: 'Playfair Display', serif; font-size: 42px; font-weight: 600; color: ${B.navy}; margin-bottom: 14px; }
        .section-sub { font-size: 16px; color: #7A8A7E; line-height: 1.7; max-width: 560px; margin-bottom: 48px; }

        @media (max-width: 768px) {
          .section { padding: 56px 16px; }
          .section-title { font-size: 28px; }
          .section-sub { font-size: 15px; margin-bottom: 32px; }
        }

        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .svc-card { background: white; border: 1px solid ${B.offwhite}; border-radius: 14px; padding: 28px 24px; transition: all 0.3s; position: relative; overflow: hidden; }
        .svc-card::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, ${B.gold}, ${B.sage}); transform: scaleX(0); transform-origin: left; transition: transform 0.4s; }
        .svc-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(15,25,35,0.06); }
        .svc-card:hover::after { transform: scaleX(1); }
        .svc-icon { font-size: 24px; width: 48px; height: 48px; border-radius: 12px; background: ${B.cream}; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .svc-name { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 600; color: ${B.navy}; margin-bottom: 10px; }
        .svc-desc { font-size: 14px; color: #7A8A7E; line-height: 1.6; }
        .svc-price { margin-top: 14px; font-size: 13px; font-weight: 600; color: ${B.gold}; }

        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .services-grid { grid-template-columns: 1fr; } }

        .process { background: ${B.navy}; }
        .process .section-title { color: white; }
        .process .section-sub { color: rgba(255,255,255,0.5); }
        .process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .step { text-align: center; padding: 20px 12px; }
        .step-num { font-family: 'Playfair Display', serif; font-size: 40px; font-weight: 700; color: rgba(201,169,110,0.12); margin-bottom: 12px; }
        .step-title { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 600; color: ${B.gold}; margin-bottom: 8px; }
        .step-desc { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.6; }

        @media (max-width: 768px) { .process-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
        @media (max-width: 480px) { .process-grid { grid-template-columns: 1fr; } }

        .health { background: ${B.cream}; }
        .health-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .health-card { background: white; border-radius: 12px; padding: 28px 20px; text-align: center; }
        .health-num { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 700; color: ${B.navy}; margin-bottom: 6px; }
        .health-label { font-size: 13px; color: #7A8A7E; line-height: 1.5; }

        @media (max-width: 768px) { .health-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .health-grid { grid-template-columns: 1fr; } .health-num { font-size: 32px; } }

        .areas-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .area-label { font-weight: 600; color: ${B.navy}; margin-bottom: 10px; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; }
        .pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .pill { background: white; border: 1px solid ${B.offwhite}; border-radius: 100px; padding: 8px 18px; font-size: 13px; font-weight: 500; color: ${B.steel}; transition: all 0.2s; }
        .pill:hover { background: ${B.navy}; color: white; border-color: ${B.navy}; }

        @media (max-width: 768px) { .areas-row { grid-template-columns: 1fr; gap: 24px; } }

        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        .form-input { width: 100%; padding: 14px 18px; border: 1.5px solid ${B.offwhite}; border-radius: 10px;
          font-family: 'DM Sans', sans-serif; font-size: 15px; color: ${B.text}; background: white; outline: none; }
        .form-input:focus { border-color: ${B.gold}; }
        .form-input::placeholder { color: #B0B8B2; }
        .submit-btn { background: ${B.navy}; color: white; padding: 14px 28px; border: none; border-radius: 10px;
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 600; cursor: pointer; width: 100%; transition: all 0.2s; }
        .submit-btn:hover { background: ${B.slate}; }

        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; gap: 32px; } }

        .footer { background: ${B.navy}; color: rgba(255,255,255,0.5); padding: 48px 20px; text-align: center; }
        .footer-logo { height: 40px; margin-bottom: 12px; filter: drop-shadow(0 2px 12px rgba(201,169,110,0.1)); }
        .footer-tag { font-size: 13px; margin-bottom: 24px; color: rgba(255,255,255,0.35); }
        .footer-copy { font-size: 12px; color: rgba(255,255,255,0.25); }
      `}</style>

      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <img src={LOGO_SRC} alt="Spotless Blinds" className="nav-logo" />
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#health">Why It Matters</a>
            <a href="#areas">Areas</a>
            <a href="#contact" className="nav-cta">Free Quote</a>
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
        <a href="#health" onClick={() => setMenuOpen(false)}>Why It Matters</a>
        <a href="#areas" onClick={() => setMenuOpen(false)}>Areas</a>
        <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Get a Free Quote</a>
      </div>

      <section className="hero">
        <div className="hero-inner">
          <img src={LOGO_SRC} alt="Spotless Blinds Co." className="hero-logo" />
          <h1>Clean Air Starts<br/>at the <span>Window</span></h1>
          <p>Professional ultrasonic blind cleaning for homes in Marin, Walnut Creek,
          Tiburon, and across the Bay Area. We remove allergens your dusting misses.</p>
          <a href="#contact" className="hero-cta">Schedule Free Assessment &#8594;</a>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-inner">
          <div className="section-title">What we do</div>
          <div className="section-sub">Ultrasonic technology cleans every slat, string, and mechanism in under two minutes per blind.</div>
          <div className="services-grid">
            {[
              { icon: "\u2600\uFE0F", name: "Standard clean", desc: "Full ultrasonic cleaning of all blinds with careful removal and reinstallation.", price: "From $400" },
              { icon: "\u2728", name: "Deep clean plus", desc: "Standard plus track/mechanism detail and anti-static treatment.", price: "From $800" },
              { icon: "\uD83C\uDFE0", name: "Full treatment", desc: "Blind cleaning, window washing, and screen cleaning. Your view, fully restored.", price: "From $1,200" },
              { icon: "\uD83C\uDFE2", name: "Commercial", desc: "Offices, restaurants, medical facilities. Volume pricing.", price: "Custom quote" },
              { icon: "\uD83D\uDD27", name: "Blind repair", desc: "Restringing, cord replacement, mechanism repair.", price: "From $40/blind" },
              { icon: "\uD83D\uDCA7", name: "Window cleaning", desc: "Interior and exterior window washing, streak-free.", price: "Add-on from $200" },
            ].map((s, i) => (
              <div key={i} className="svc-card">
                <div className="svc-icon">{s.icon}</div>
                <div className="svc-name">{s.name}</div>
                <div className="svc-desc">{s.desc}</div>
                <div className="svc-price">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process" id="process">
        <div className="section-inner">
          <div className="section-title">How it works</div>
          <div className="section-sub">Four steps to cleaner air and blinds that look new.</div>
          <div className="process-grid">
            {[
              { n: "01", t: "Free assessment", d: "We visit, inspect, and quote. No obligation." },
              { n: "02", t: "Careful removal", d: "Blinds removed with drop cloths protecting floors." },
              { n: "03", t: "Ultrasonic clean", d: "Sound waves remove dust and allergens in 2 min per blind." },
              { n: "04", t: "Reinstall", d: "Dried, inspected, rehung. We photograph the results." },
            ].map((s, i) => (
              <div key={i} className="step">
                <div className="step-num">{s.n}</div>
                <div className="step-title">{s.t}</div>
                <div className="step-desc">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section health" id="health">
        <div className="section-inner">
          <div className="section-title">Why it matters</div>
          <div className="section-sub">Your blinds are one of the largest dust collectors in your home.</div>
          <div className="health-grid">
            {[
              { n: "40+", l: "Pounds of dust collected yearly" },
              { n: "10x", l: "More allergens removed vs dusting" },
              { n: "2 min", l: "Per blind in the ultrasonic tank" },
              { n: "6 mo", l: "Recommended cleaning interval" },
            ].map((s, i) => (
              <div key={i} className="health-card">
                <div className="health-num">{s.n}</div>
                <div className="health-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="areas">
        <div className="section-inner">
          <div className="section-title">Where we serve</div>
          <div className="section-sub">Serving the Bay Area's finest neighborhoods.</div>
          <div className="areas-row">
            {[
              { r: "Marin County", c: ["Tiburon","Mill Valley","Sausalito","San Rafael","Ross"] },
              { r: "Contra Costa", c: ["Walnut Creek","Danville","Orinda","Lafayette","Alamo"] },
              { r: "East Bay", c: ["Piedmont","Berkeley Hills","Oakland Hills","Fremont"] },
            ].map((a, i) => (
              <div key={i}>
                <div className="area-label">{a.r}</div>
                <div className="pills">{a.c.map(c => <span key={c} className="pill">{c}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section-inner">
          <div className="contact-grid">
            <div>
              <div className="section-title" style={{marginBottom:14}}>Get your free quote</div>
              <p style={{fontSize:15,color:"#7A8A7E",lineHeight:1.7,marginBottom:28}}>
                Tell us about your home and we will respond within 24 hours.
              </p>
              <div style={{display:"flex",flexDirection:"column",gap:20}}>
                <div><strong style={{color:B.navy}}>Phone</strong><br/><span style={{color:"#7A8A7E"}}>(510) 282-8901</span></div>
                <div><strong style={{color:B.navy}}>Email</strong><br/><span style={{color:"#7A8A7E"}}>hello@spotlessblinds.co</span></div>
                <div><strong style={{color:B.navy}}>Hours</strong><br/><span style={{color:"#7A8A7E"}}>Mon - Sat, 8am - 6pm</span></div>
              </div>
            </div>
            <div>
              {submitted ? (
                <div style={{background:B.cream,borderRadius:14,padding:"40px 24px",textAlign:"center"}}>
                  <div style={{fontSize:40,marginBottom:12}}>\u2713</div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,color:B.navy}}>Thank you!</div>
                  <div style={{color:"#7A8A7E",fontSize:14}}>We will be in touch within 24 hours.</div>
                </div>
              ) : (
                <div style={{display:"flex",flexDirection:"column",gap:14}}>
                  <input className="form-input" placeholder="Your name" />
                  <input className="form-input" placeholder="Email address" type="email" />
                  <input className="form-input" placeholder="Phone number" type="tel" />
                  <textarea className="form-input" placeholder="Tell us about your home" rows={4} style={{resize:"vertical"}} />
                  <button className="submit-btn" onClick={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000); }}>
                    Request Free Quote
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <img src={LOGO_SRC} alt="Spotless Blinds Co." className="footer-logo" />
        <div className="footer-tag">Clean Air Starts at the Window</div>
        <div className="footer-copy">&copy; 2026 Spotless Blinds Co. All rights reserved. Bay Area, California.</div>
      </footer>
    </>
  );
}
