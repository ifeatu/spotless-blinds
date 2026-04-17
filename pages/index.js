import { useState, useEffect } from "react";
import Head from "next/head";

const BASE = "/spotless-blinds";
const LOGO_SRC = `${BASE}/logo.png`;

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
        <link rel="icon" href={`${BASE}/favicon.png`} />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; color: ${B.text}; background: ${B.warmWhite}; overflow-x: hidden; }

        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 12px 20px; transition: all 0.3s ease; }
        .nav-scrolled { background: rgba(15,25,35,0.97); backdrop-filter: blur(12px); box-shadow: 0 2px 24px rgba(0,0,0,0.2); }
        .nav-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .nav-logo { height: 45px; width: auto; }
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
        .hero-logo { height: 125px; width: auto; margin-bottom: 32px; filter: drop-shadow(0 4px 20px rgba(201,169,110,0.15)); }
        .hero h1 { font-family: 'Playfair Display', serif; font-size: 64px; font-weight: 600; color: white; line-height: 1.08; margin-bottom: 20px; }
        .hero h1 span { color: ${B.gold}; }
        .hero p { font-size: 18px; color: rgba(255,255,255,0.65); line-height: 1.6; max-width: 580px; margin: 0 auto 36px; font-weight: 300; }
        .hero-cta { display: inline-flex; align-items: center; gap: 10px; background: ${B.gold}; color: ${B.navy};
          font-size: 16px; font-weight: 600; padding: 16px 36px; border-radius: 100px; text-decoration: none; transition: all 0.3s; }
        .hero-cta:hover { background: ${B.goldLight}; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(201,169,110,0.3); }

        @media (max-width: 768px) {
          .hero { min-height: auto; padding: 120px 20px 60px; }
          .hero-logo { height: 80px; margin-bottom: 24px; }
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
        .footer-logo { height: 50px; margin-bottom: 12px; filter: drop-shadow(0 2px 12px rgba(201,169,110,0.1)); }
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
                <div><strong style={{color:B.navy}}>Email</strong><br/><span style={{color:"#7A8A7E"}}>chimae.t@gmail.com</span></div>
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
                <form onSubmit={(e) => { e.preventDefault(); const f = e.target; const name = f.name_field.value; const email = f.email_field.value; const phone = f.phone_field.value; const msg = f.message_field.value; const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0A${msg}`; window.location.href = `mailto:chimae.t@gmail.com?subject=Quote Request from ${name}&body=${body}`; setSubmitted(true); setTimeout(() => setSubmitted(false), 4000); }} style={{display:"flex",flexDirection:"column",gap:14}}>
                  <input className="form-input" name="name_field" placeholder="Your name" required />
                  <input className="form-input" name="email_field" placeholder="Email address" type="email" required />
                  <input className="form-input" name="phone_field" placeholder="Phone number" type="tel" />
                  <textarea className="form-input" name="message_field" placeholder="Tell us about your home" rows={4} style={{resize:"vertical"}} />
                  <button type="submit" className="submit-btn">
                    Request Free Quote
                  </button>
                </form>
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
