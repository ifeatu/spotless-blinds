import { useState, useEffect } from "react";
import Head from "next/head";

const LOGO_SRC = "data:image/png;base64,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";

const BRAND = {
  forest: "#1B4332",
  darkGreen: "#2D6A4F",
  green: "#40916C",
  sage: "#52B788",
  mint: "#74C69D",
  light: "#B7E4C7",
  cream: "#D8F3DC",
  white: "#F8FBF9",
  gold: "#C9A96E",
  charcoal: "#1A1A2E",
  text: "#2C3E2D",
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <Head>
        <title>Spotless Blinds Co. | Premium Blind Cleaning - Bay Area</title>
        <meta name="description" content="Professional ultrasonic blind cleaning for homes in Marin, Walnut Creek, Tiburon and the SF Bay Area. We remove allergens your dusting misses." />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ fontFamily: "'DM Sans', sans-serif", color: BRAND.text, background: BRAND.white }}>

        {/* NAV */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "12px 32px",
          background: scrolled ? "rgba(27,67,50,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.12)" : "none",
          transition: "all 0.3s ease"
        }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img src={LOGO_SRC} alt="Spotless Blinds Co." style={{ height: 44, width: "auto" }} />
            </div>
            <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
              {["Services","Process","Why It Matters","Areas"].map(t => (
                <a key={t} href={`#${t.toLowerCase().replace(/ /g,"-")}`}
                  style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>{t}</a>
              ))}
              <a href="#contact" style={{
                background: BRAND.gold, color: BRAND.forest, padding: "10px 24px",
                borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none"
              }}>Get a Free Quote</a>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section style={{
          minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
          background: `linear-gradient(135deg, ${BRAND.forest} 0%, ${BRAND.darkGreen} 40%, ${BRAND.green} 100%)`,
          position: "relative", overflow: "hidden"
        }}>
          <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px", maxWidth: 900 }}>
            <img src={LOGO_SRC} alt="Spotless Blinds Co." style={{ height: 100, width: "auto", marginBottom: 32 }} />
            <h1 style={{
              fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px, 7vw, 80px)",
              fontWeight: 600, color: "white", lineHeight: 1.08, marginBottom: 24
            }}>
              Clean Air Starts<br/>at the <span style={{ color: BRAND.mint }}>Window</span>
            </h1>
            <p style={{
              fontSize: "clamp(16px, 2.2vw, 20px)", color: "rgba(255,255,255,0.8)",
              lineHeight: 1.6, maxWidth: 640, margin: "0 auto 40px", fontWeight: 300
            }}>
              Professional ultrasonic blind cleaning for homes in Marin, Walnut Creek,
              Tiburon, and across the Bay Area. We remove allergens your dusting misses.
            </p>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: BRAND.gold, color: BRAND.forest,
              fontSize: 16, fontWeight: 600, padding: "16px 40px",
              borderRadius: 100, textDecoration: "none"
            }}>Schedule Free Assessment &rarr;</a>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" style={{ padding: "100px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 600, color: BRAND.forest, marginBottom: 16 }}>What we do</h2>
            <p style={{ fontSize: 17, color: "#6B7C6D", lineHeight: 1.7, maxWidth: 600, marginBottom: 56 }}>
              Ultrasonic technology cleans every slat, string, and mechanism in under two minutes per blind.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
              {[
                { icon: "\u2600", name: "Standard clean", desc: "Full ultrasonic cleaning of all window blinds with careful removal and reinstallation.", price: "From $400" },
                { icon: "\u2728", name: "Deep clean plus", desc: "Standard plus track/mechanism detail and anti-static treatment.", price: "From $800" },
                { icon: "\uD83C\uDFE0", name: "Full treatment", desc: "Blind cleaning, window washing (interior/exterior), and screen cleaning.", price: "From $1,200" },
                { icon: "\uD83C\uDFE2", name: "Commercial", desc: "Offices, restaurants, medical facilities. Volume pricing, flexible scheduling.", price: "Custom quote" },
                { icon: "\uD83D\uDD27", name: "Blind repair", desc: "Restringing, cord replacement, mechanism repair at a fraction of replacement cost.", price: "From $40/blind" },
                { icon: "\uD83D\uDCA7", name: "Window cleaning", desc: "Interior and exterior window washing with streak-free, mineral-free water.", price: "Add-on from $200" },
              ].map((s, i) => (
                <div key={i} style={{
                  background: "white", border: "1px solid #E8EDE9", borderRadius: 16, padding: "36px 32px",
                  transition: "all 0.3s ease", position: "relative", overflow: "hidden"
                }}>
                  <div style={{ fontSize: 26, marginBottom: 20, width: 56, height: 56, borderRadius: 14, background: BRAND.cream, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: BRAND.forest, marginBottom: 12 }}>{s.name}</div>
                  <div style={{ fontSize: 15, color: "#6B7C6D", lineHeight: 1.65 }}>{s.desc}</div>
                  <div style={{ marginTop: 16, fontSize: 14, fontWeight: 600, color: BRAND.gold }}>{s.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" style={{ padding: "100px 24px", background: BRAND.forest }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 600, color: "white", marginBottom: 16 }}>How it works</h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 600, marginBottom: 56 }}>Four steps to cleaner air and blinds that look new.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
              {[
                { n: "01", title: "Free assessment", desc: "We visit, inspect, and provide an honest quote." },
                { n: "02", title: "Careful removal", desc: "Blinds are removed with drop cloths protecting your floors." },
                { n: "03", title: "Ultrasonic cleaning", desc: "Sound waves remove every trace of dust and allergens in 2 min per blind." },
                { n: "04", title: "Reinstallation", desc: "Dried, inspected, and rehung. We photograph the results." },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center", padding: 24 }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: "rgba(255,255,255,0.08)", marginBottom: 16 }}>{s.n}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, color: BRAND.mint, marginBottom: 10 }}>{s.title}</div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HEALTH */}
        <section id="why-it-matters" style={{ padding: "100px 24px", background: BRAND.cream }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 600, color: BRAND.forest, marginBottom: 56 }}>Why it matters</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
              {[
                { num: "40+", label: "Pounds of dust the average home collects per year" },
                { num: "10x", label: "More allergens removed vs manual dusting" },
                { num: "2 min", label: "Per blind in the ultrasonic tank" },
                { num: "6 mo", label: "Recommended cleaning interval" },
              ].map((s, i) => (
                <div key={i} style={{ background: "white", borderRadius: 14, padding: 32, textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 700, color: BRAND.forest, marginBottom: 8 }}>{s.num}</div>
                  <div style={{ fontSize: 14, color: "#6B7C6D", lineHeight: 1.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AREAS */}
        <section id="areas" style={{ padding: "100px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 600, color: BRAND.forest, marginBottom: 56 }}>Where we serve</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
              {[
                { region: "Marin County", cities: ["Tiburon","Mill Valley","Sausalito","San Rafael","Ross","Corte Madera"] },
                { region: "Contra Costa", cities: ["Walnut Creek","Danville","Orinda","Lafayette","Moraga","Alamo"] },
                { region: "East Bay & beyond", cities: ["Piedmont","Berkeley Hills","Oakland Hills","Fremont","Pleasanton"] },
              ].map((r, i) => (
                <div key={i}>
                  <div style={{ fontWeight: 600, color: BRAND.forest, marginBottom: 12, fontSize: 15, letterSpacing: 1, textTransform: "uppercase" }}>{r.region}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                    {r.cities.map(c => (
                      <span key={c} style={{ background: "white", border: "1px solid #E8EDE9", borderRadius: 100, padding: "10px 24px", fontSize: 14, fontWeight: 500, color: BRAND.darkGreen }}>{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ padding: "100px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 600, color: BRAND.forest, marginBottom: 16 }}>Get your free quote</h2>
              <p style={{ fontSize: 16, color: "#6B7C6D", lineHeight: 1.7, marginBottom: 32 }}>
                Tell us about your home and we will respond within 24 hours.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div><div style={{ fontWeight: 600, color: BRAND.forest }}>Phone</div><div style={{ color: "#6B7C6D" }}>(510) 282-8901</div></div>
                <div><div style={{ fontWeight: 600, color: BRAND.forest }}>Email</div><div style={{ color: "#6B7C6D" }}>hello@spotlessblinds.co</div></div>
                <div><div style={{ fontWeight: 600, color: BRAND.forest }}>Hours</div><div style={{ color: "#6B7C6D" }}>Monday - Saturday, 8am - 6pm</div></div>
              </div>
            </div>
            <div>
              {submitted ? (
                <div style={{ background: BRAND.cream, borderRadius: 16, padding: 48, textAlign: "center" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>\u2713</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: BRAND.forest }}>Thank you!</div>
                  <div style={{ color: "#6B7C6D" }}>We will be in touch within 24 hours.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {["Your name","Email address","Phone number"].map((ph,i) => (
                    <input key={i} placeholder={ph} style={{
                      width: "100%", padding: "14px 20px", border: "1.5px solid #E0E5E1",
                      borderRadius: 10, fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                      color: BRAND.text, background: BRAND.white, outline: "none"
                    }} />
                  ))}
                  <textarea placeholder="Tell us about your home" rows={4} style={{
                    width: "100%", padding: "14px 20px", border: "1.5px solid #E0E5E1",
                    borderRadius: 10, fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                    color: BRAND.text, background: BRAND.white, outline: "none", resize: "vertical"
                  }} />
                  <button type="submit" style={{
                    background: BRAND.forest, color: "white", padding: "16px 32px",
                    border: "none", borderRadius: 10, fontFamily: "'DM Sans', sans-serif",
                    fontSize: 16, fontWeight: 600, cursor: "pointer", alignSelf: "flex-start"
                  }}>Request Free Quote</button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: BRAND.charcoal, color: "rgba(255,255,255,0.5)", padding: "60px 24px", textAlign: "center" }}>
          <img src={LOGO_SRC} alt="Spotless Blinds Co." style={{ height: 48, marginBottom: 16 }} />
          <div style={{ fontSize: 14, marginBottom: 32, color: "rgba(255,255,255,0.4)" }}>Clean Air Starts at the Window</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>&copy; 2026 Spotless Blinds Co. All rights reserved. Bay Area, California.</div>
        </footer>
      </div>
    </>
  );
}
