import React, { useEffect, useRef, useState } from "react";
import rosePortrait from "./assets/rose-portrait.jpg";
import { ODC_PROJECTS } from "./data/projectsData";
import CaseStudyModal from "./components/CaseStudyModal";
import CanvaGallery from "./components/CanvaGallery";

/* ─── Scroll animation hook ─── */
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("visible");
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── Geometric Starburst Ornament ─── */
function Starburst({
  size = 44,
  color = "currentColor",
  opacity = 1,
}: {
  size?: number;
  color?: string;
  opacity?: number;
}) {
  const lines = Array.from({ length: 24 }, (_, i) => i * (360 / 24));
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      style={{ opacity }}
      className="transition-transform duration-700 hover:rotate-90"
    >
      {lines.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 24 + Math.cos(rad) * 9;
        const y1 = 24 + Math.sin(rad) * 9;
        const x2 = 24 + Math.cos(rad) * 22;
        const y2 = 24 + Math.sin(rad) * 22;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

/* ─── Section Header Badge ─── */
function SectionLabel({
  num,
  text,
  light = false,
}: {
  num: string;
  text: string;
  light?: boolean;
}) {
  return (
    <span
      className="pill-tag mb-5 inline-flex items-center gap-2"
      style={{
        color: light ? "#F6DDE4" : "#7A1838",
        borderColor: light ? "rgba(246,221,228,0.4)" : "rgba(122,24,56,0.3)",
        background: light ? "rgba(246,221,228,0.08)" : "rgba(217,140,155,0.12)",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: light ? "#D98C9B" : "#7A1838" }}
      />
      {num} — {text}
    </span>
  );
}

/* ─── Navigation ─── */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#a-propos", label: "À propos" },
    { href: "#evolution", label: "Parcours" },
    { href: "#experiences", label: "Expériences" },
    { href: "#competences", label: "Compétences" },
    { href: "#formations", label: "Formations" },
    { href: "#services", label: "Services" },
    { href: "#projets", label: "Projets ODC" },
    { href: "#canva", label: "Créations Canva" },
    { href: "#temoignages", label: "Témoignages" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255, 249, 246, 0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(217, 140, 155, 0.2)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(74, 38, 53, 0.05)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Brand */}
        <a
          href="#accueil"
          className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]"
        >
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center font-display text-sm font-semibold transition-colors"
            style={{
              background: scrolled ? "#7A1838" : "#FFF9F6",
              color: scrolled ? "#FFF9F6" : "#7A1838",
            }}
          >
            R
          </span>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              color: scrolled ? "#7A1838" : "#FFF9F6",
              fontSize: "1.2rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            Rose Niang Diallo
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-wider transition-all duration-200 hover:opacity-100 relative py-1"
              style={{
                color: scrolled ? "#4A2635" : "rgba(255, 249, 246, 0.9)",
                fontWeight: 500,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="pill-tag text-xs font-semibold transition-all duration-300 hover:scale-105"
            style={{
              ...(scrolled
                ? {
                    color: "#FFF9F6",
                    background: "#7A1838",
                    borderColor: "#7A1838",
                  }
                : {
                    color: "#7A1838",
                    background: "#FFF9F6",
                    borderColor: "#FFF9F6",
                  }),
              padding: "0.55rem 1.4rem",
              borderRadius: "99px",
            }}
          >
            Me contacter
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          className="lg:hidden p-2.5 rounded-lg flex flex-col gap-1.5 focus:outline-none"
          style={{
            background: scrolled
              ? "rgba(122,24,56,0.08)"
              : "rgba(255,249,246,0.15)",
          }}
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: scrolled ? "#7A1838" : "#FFF9F6",
              transform: open ? "translateY(8px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: scrolled ? "#7A1838" : "#FFF9F6",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: scrolled ? "#7A1838" : "#FFF9F6",
              transform: open ? "translateY(-8px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="lg:hidden px-8 py-8 flex flex-col gap-4 border-b shadow-xl transition-all"
          style={{
            background: "rgba(255, 249, 246, 0.98)",
            borderColor: "rgba(217, 140, 155, 0.3)",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium py-1.5 transition-colors"
              style={{ color: "#4A2635" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="pill-tag text-center justify-center mt-3 py-3"
            style={{
              background: "#7A1838",
              color: "#FFF9F6",
              borderColor: "#7A1838",
            }}
          >
            Me contacter
          </a>
        </div>
      )}
    </header>
  );
}

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden grain pt-28 pb-16"
      style={{
        background:
          "radial-gradient(ellipse 130% 90% at 75% 15%, #C4576E 0%, #7A1838 42%, #4A2635 80%, #361522 100%)",
      }}
    >
      {/* Decorative radial glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "55vw",
          height: "55vw",
          maxWidth: 650,
          maxHeight: 650,
          top: "-15%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(217,140,155,0.22) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "45vw",
          height: "45vw",
          maxWidth: 500,
          maxHeight: 500,
          bottom: "5%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(255,249,246,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full flex-1 flex flex-col justify-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2.5">
            <span
              className="pill-tag"
              style={{
                color: "#F6DDE4",
                borderColor: "rgba(246,221,228,0.35)",
                background: "rgba(255,249,246,0.08)",
              }}
            >
              PORTFOLIO PROFESSIONNEL
            </span>
            <span
              className="pill-tag hidden sm:inline-flex"
              style={{
                color: "#D98C9B",
                borderColor: "rgba(217,140,155,0.3)",
              }}
            >
              DAKAR, SÉNÉGAL
            </span>
          </div>

          <span
            className="pill-tag"
            style={{
              color: "#F6DDE4",
              borderColor: "rgba(246,221,228,0.35)",
              background: "rgba(255,249,246,0.08)",
            }}
          >
            DISPONIBLE &amp; À L'ÉCOUTE
          </span>
        </div>

        {/* Main Grid: Text on Left, Portrait on Right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Very Prominent Name */}
            <div>
              <p
                className="text-xs md:text-sm uppercase tracking-[0.25em] mb-2 font-medium"
                style={{ color: "#D98C9B" }}
              >
                Identité &amp; Créativité
              </p>
              <h1
                className="leading-[1.04] tracking-[-0.02em] font-normal"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
                  color: "#FFF9F6",
                }}
              >
                Rose Niang Diallo
              </h1>
            </div>

            {/* Profile Subtitle */}
            <div
              className="inline-flex flex-wrap items-center gap-2 py-2 px-4 rounded-xl max-w-2xl"
              style={{
                background: "rgba(255,249,246,0.08)",
                border: "1px solid rgba(217,140,155,0.25)",
              }}
            >
              <span
                className="text-sm md:text-base font-medium tracking-wide"
                style={{ color: "#FFF9F6" }}
              >
                Assistante Digitale
              </span>
              <span style={{ color: "#D98C9B" }}>•</span>
              <span
                className="text-sm md:text-base font-medium tracking-wide"
                style={{ color: "#FFF9F6" }}
              >
                Communication
              </span>
              <span style={{ color: "#D98C9B" }}>•</span>
              <span
                className="text-sm md:text-base font-medium tracking-wide"
                style={{ color: "#FFF9F6" }}
              >
                Marketing Digital
              </span>
              <span style={{ color: "#D98C9B" }}>•</span>
              <span
                className="text-sm md:text-base font-medium tracking-wide"
                style={{ color: "#FFF9F6" }}
              >
                Création de contenu
              </span>
              <span style={{ color: "#D98C9B" }}>•</span>
              <span
                className="text-sm md:text-base font-medium tracking-wide"
                style={{ color: "#FFF9F6" }}
              >
                Design
              </span>
            </div>

            {/* Accroche */}
            <div className="flex items-start gap-4 pt-2">
              <div className="mt-1 flex-shrink-0">
                <Starburst size={38} color="#D98C9B" opacity={0.9} />
              </div>
              <blockquote
                className="text-lg md:text-xl font-light italic leading-relaxed"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#FFF9F6",
                }}
              >
                « Transformer les idées en expériences digitales créatives,
                utiles et humaines. »
              </blockquote>
            </div>

            {/* Description */}
            <p
              className="text-sm md:text-base font-light leading-relaxed max-w-xl"
              style={{ color: "rgba(255, 249, 246, 0.82)" }}
            >
              Professionnelle polyvalente, organisée et créative, j'évolue avec
              passion dans l'univers du digital. Mon bagage dans le commercial,
              la relation client et la gestion nourrit aujourd'hui une approche
              digitale centrée sur l'humain, l'esthétique et la performance.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#experiences"
                className="px-7 py-3.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-md flex items-center gap-2"
                style={{
                  background: "#FFF9F6",
                  color: "#7A1838",
                  border: "1px solid #FFF9F6",
                }}
              >
                <span>Découvrir mon parcours</span>
                <span>↓</span>
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[rgba(217,140,155,0.2)]"
                style={{
                  color: "#FFF9F6",
                  border: "1px solid rgba(255, 249, 246, 0.5)",
                }}
              >
                Me contacter
              </a>
            </div>
          </div>

          {/* Right Column: Professional Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative halo */}
              <div
                className="absolute inset-0 -m-4 rounded-3xl opacity-40 blur-xl pointer-events-none"
                style={{ background: "#D98C9B" }}
              />

              {/* Photo Card Container */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                style={{
                  border: "1.5px solid rgba(255, 249, 246, 0.3)",
                  background: "rgba(74, 38, 53, 0.4)",
                  boxShadow: "0 25px 50px -12px rgba(54, 21, 34, 0.7)",
                }}
              >
                <img
                  src={rosePortrait}
                  alt="Portrait professionnel de Rose Niang Diallo dans son bureau"
                  className="w-full h-[460px] md:h-[500px] object-cover object-top"
                  loading="eager"
                />

                {/* Glassmorphic Overlay Badge at Bottom */}
                <div
                  className="absolute bottom-0 inset-x-0 p-5 backdrop-blur-md"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(74, 38, 53, 0.92) 0%, rgba(74, 38, 53, 0.6) 80%, transparent 100%)",
                    borderTop: "1px solid rgba(217, 140, 155, 0.25)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        className="text-base font-semibold"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "#FFF9F6",
                        }}
                      >
                        Rose Niang Diallo
                      </p>
                      <p
                        className="text-xs font-light"
                        style={{ color: "#D98C9B" }}
                      >
                        Assistante Digitale &amp; Créative
                      </p>
                    </div>
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] tracking-wider uppercase font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(217, 140, 155, 0.2)",
                        color: "#F6DDE4",
                        border: "1px solid rgba(217, 140, 155, 0.4)",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Actif
                    </span>
                  </div>
                </div>
              </div>

              {/* Little Floating Starburst Badge */}
              <div
                className="absolute -top-4 -right-4 p-3 rounded-full shadow-lg backdrop-blur-md hidden sm:flex items-center justify-center"
                style={{
                  background: "rgba(255, 249, 246, 0.95)",
                  border: "1px solid rgba(217, 140, 155, 0.3)",
                }}
              >
                <Starburst size={30} color="#7A1838" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom ticker bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-light text-rose-100/70">
        <span className="tracking-wider">
          DESIGN • COMMUNICATION • MARKETING • IA
        </span>
        <span className="tracking-wider">DAKAR • COLLABORATION INTERNATIONALE</span>
      </div>
    </section>
  );
}

/* ─── Section 01: À Propos ─── */
function About() {
  const ref = useFadeUp();

  const qualities = [
    {
      title: "Créativité",
      desc: "Idéation originale, sensibilité visuelle et sens du détail.",
    },
    {
      title: "Adaptabilité",
      desc: "Aisance face aux nouveaux outils et contextes dynamiques.",
    },
    {
      title: "Organisation",
      desc: "Rigueur méthodique, anticipation et gestion des priorités.",
    },
    {
      title: "Écoute",
      desc: "Compréhension fine des besoins utilisateurs et des clients.",
    },
    {
      title: "Esprit d'équipe",
      desc: "Collaboration bienveillante, partage et dynamique collective.",
    },
    {
      title: "Motivation",
      desc: "Curiosité permanente, soif d'apprendre et persévérance.",
    },
    {
      title: "Communication",
      desc: "Clarté d'expression, aisance relationnelle et transmission fluide.",
    },
  ];

  return (
    <section id="a-propos" style={{ background: "#FFF9F6" }} className="py-28">
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        <SectionLabel num="01" text="À propos" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Storytelling */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2
              className="leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                fontWeight: 400,
                color: "#7A1838",
              }}
            >
              Une vision humaine &amp; créative du digital
            </h2>

            <div
              className="p-6 md:p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: "#F6DDE4",
                border: "1px solid rgba(217,140,155,0.25)",
              }}
            >
              <div className="absolute top-4 right-4 opacity-15">
                <Starburst size={80} color="#7A1838" />
              </div>

              <p
                className="text-base md:text-lg leading-relaxed mb-6 font-normal"
                style={{ color: "#4A2635" }}
              >
                Je suis <strong>Rose Niang Diallo</strong>, une professionnelle
                polyvalente et créative qui évolue aujourd'hui dans l'univers du
                digital. Mon parcours m'a permis de développer une solide
                expérience dans le commercial, la relation client, la gestion et
                la communication, avant de me spécialiser progressivement dans
                le marketing digital, le design et la création de contenu.
              </p>

              <p
                className="text-base md:text-lg leading-relaxed font-normal"
                style={{ color: "#4A2635" }}
              >
                Curieuse, motivée et toujours prête à apprendre, j'aime
                transformer une idée en projet concret et créer des solutions à
                la fois esthétiques, utiles et adaptées aux besoins des
                utilisateurs.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#evolution"
                className="pill-tag transition-all duration-300 hover:bg-[#7A1838] hover:text-[#FFF9F6]"
                style={{
                  color: "#7A1838",
                  borderColor: "#7A1838",
                  padding: "0.6rem 1.4rem",
                }}
              >
                Découvrir mon évolution narrative →
              </a>
              <a
                href="#competences"
                className="pill-tag transition-all duration-300 hover:bg-[#D98C9B] hover:text-[#FFF9F6]"
                style={{
                  color: "#4A2635",
                  borderColor: "rgba(74,38,53,0.3)",
                  padding: "0.6rem 1.4rem",
                }}
              >
                Voir mes compétences
              </a>
            </div>
          </div>

          {/* Right Column: 7 Qualities */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3
              className="text-xl font-medium mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#7A1838",
              }}
            >
              Mes qualités professionnelles
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {qualities.map((q, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm flex items-start gap-3.5"
                  style={{
                    background: "#FFF9F6",
                    border: "1px solid rgba(217, 140, 155, 0.3)",
                  }}
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5"
                    style={{ background: "#7A1838", color: "#FFF9F6" }}
                  >
                    ✦
                  </span>
                  <div>
                    <h4
                      className="text-sm font-semibold mb-0.5"
                      style={{ color: "#7A1838" }}
                    >
                      {q.title}
                    </h4>
                    <p
                      className="text-xs font-light leading-relaxed"
                      style={{ color: "#4A2635" }}
                    >
                      {q.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 02: Évolution Professionnelle ─── */
function Evolution() {
  const ref = useFadeUp();

  return (
    <section id="evolution" style={{ background: "#F6DDE4" }} className="py-24">
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        <SectionLabel num="02" text="Évolution narrative" />

        <div className="max-w-4xl">
          <h2
            className="leading-tight mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
              fontWeight: 400,
              color: "#7A1838",
            }}
          >
            « D'une expérience dans le commercial et la relation client vers le
            digital, le design et la communication. »
          </h2>

          <div
            className="p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-sm"
            style={{
              background: "#FFF9F6",
              border: "1px solid rgba(217,140,155,0.3)",
            }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                  style={{ background: "rgba(122,24,56,0.1)", color: "#7A1838" }}
                >
                  01
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#7A1838",
                  }}
                >
                  Compréhension client
                </h3>
                <p
                  className="text-xs md:text-sm font-light leading-relaxed"
                  style={{ color: "#4A2635" }}
                >
                  Mes années en prospection, call center et gestion client ont
                  forgé une capacité innée à cerner les attentes réelles, les
                  freins psychologiques et les besoins des utilisateurs.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                  style={{ background: "rgba(122,24,56,0.1)", color: "#7A1838" }}
                >
                  02
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#7A1838",
                  }}
                >
                  Rigueur &amp; Gestion
                </h3>
                <p
                  className="text-xs md:text-sm font-light leading-relaxed"
                  style={{ color: "#4A2635" }}
                >
                  Mon expérience en assistance comptable et en management de
                  point de vente m'a inculqué le respect scrupuleux des délais,
                  l'organisation administrative et le sens des chiffres.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                  style={{ background: "rgba(122,24,56,0.1)", color: "#7A1838" }}
                >
                  03
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#7A1838",
                  }}
                >
                  Créativité digitale
                </h3>
                <p
                  className="text-xs md:text-sm font-light leading-relaxed"
                  style={{ color: "#4A2635" }}
                >
                  Aujourd'hui, j'exprime cette polyvalence dans le design
                  d'interfaces (Figma), le branding, la communication digitale
                  et le community management pour concevoir des projets
                  pertinents et viables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 03: Expériences Professionnelles (Ordre strict) ─── */
function Experiences() {
  const ref = useFadeUp();

  const experiencesData = [
    {
      company: "MCP Contacts",
      role: "Commerciale",
      duration: null,
      skills: [
        "Vente",
        "Prospection",
        "Relation client",
        "Communication commerciale",
      ],
      description:
        "Développement du portefeuille client, prospection active et valorisation de l'offre commerciale avec une écoute attentive des besoins prospects.",
    },
    {
      company: "Way2Call",
      role: "Conseillère Client – Call Center",
      duration: "Durée : 6 mois",
      skills: [
        "Relation client",
        "Communication",
        "Écoute",
        "Gestion des demandes",
        "Conseil",
      ],
      description:
        "Prise en charge des appels entrants et sortants, résolution méthodique des réclamations et conseil personnalisé avec haute exigence de satisfaction client.",
    },
    {
      company: "Xamlema",
      role: "Commerciale",
      duration: null,
      skills: [
        "Vente",
        "Prospection",
        "Relation client",
        "Communication commerciale",
      ],
      description:
        "Conduite de négociations commerciales, suivi de clientèle et structuration de discours de vente percutants.",
    },
    {
      company: "Actunow",
      role: "Stagiaire Commerciale – Vente en ligne",
      duration: "Durée : 3 mois",
      skills: [
        "Vente en ligne",
        "Communication digitale",
        "Relation client",
        "Commercialisation",
      ],
      description:
        "Gestion des canaux de vente sur le web, relation client numérique et déploiement de stratégies de promotion commerciale en ligne.",
    },
    {
      company: "Wommat Groupe",
      role: "Commerciale",
      duration: null,
      skills: ["Vente", "Prospection", "Relation client", "Communication"],
      description:
        "Actions commerciales sur le terrain et à distance, fidélisation et renforcement de l'image de marque auprès des partenaires.",
    },
    {
      company: "Franchise Holding",
      role: "Assistante Comptable",
      duration: "Durée : 6 mois",
      skills: [
        "Assistance comptable",
        "Organisation",
        "Gestion administrative",
        "Suivi des documents",
      ],
      description:
        "Structure spécialisée dans les activités d'agence de voyage et d'investissement. Gestion rigoureuse des pièces comptables, archivage et appui administratif.",
    },
    {
      company: "Les Délices de Thia",
      role: "Manager / Caissière",
      duration: null,
      skills: [
        "Gestion",
        "Encaissement",
        "Organisation",
        "Accueil client",
        "Management",
      ],
      description:
        "Supervision du point de vente, accueil et satisfaction de la clientèle, gestion de caisse et coordination de l'équipe au quotidien.",
    },
  ];

  return (
    <section id="experiences" style={{ background: "#FFF9F6" }} className="py-28">
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        <SectionLabel num="03" text="Expériences" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 400,
                color: "#7A1838",
              }}
            >
              Expériences professionnelles
            </h2>
            <p className="text-sm font-light mt-2" style={{ color: "#6B3A4F" }}>
              Une trajectoire riche en relations humaines, rigueur et sens
              commercial.
            </p>
          </div>
          <span
            className="pill-tag text-xs font-semibold"
            style={{ color: "#7A1838", borderColor: "#7A1838" }}
          >
            7 Expériences Clés
          </span>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-[#D98C9B]/30 ml-4 md:ml-8 pl-6 md:pl-10 flex flex-col gap-10">
          {experiencesData.map((exp, i) => (
            <div
              key={i}
              className="relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-md"
              style={{
                background: "#F6DDE4",
                border: "1px solid rgba(217, 140, 155, 0.25)",
              }}
            >
              {/* Timeline Bullet */}
              <div
                className="absolute -left-[31px] md:-left-[47px] top-8 w-4 h-4 rounded-full border-2 border-[#FFF9F6]"
                style={{ background: "#7A1838" }}
              />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-mono font-semibold"
                    style={{ color: "#D98C9B" }}
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className="text-xl md:text-2xl font-medium"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#7A1838",
                    }}
                  >
                    {exp.company}
                  </h3>
                </div>

                {exp.duration && (
                  <span
                    className="pill-tag text-xs font-semibold"
                    style={{
                      background: "rgba(122,24,56,0.1)",
                      color: "#7A1838",
                      borderColor: "rgba(122,24,56,0.3)",
                    }}
                  >
                    {exp.duration}
                  </span>
                )}
              </div>

              <p
                className="text-base font-semibold mb-3"
                style={{ color: "#4A2635" }}
              >
                {exp.role}
              </p>

              <p
                className="text-sm font-light leading-relaxed mb-5"
                style={{ color: "#4A2635" }}
              >
                {exp.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="text-xs font-medium uppercase tracking-wider mr-1"
                  style={{ color: "#7A1838" }}
                >
                  Compétences :
                </span>
                {exp.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full font-light"
                    style={{
                      background: "rgba(255, 249, 246, 0.8)",
                      color: "#7A1838",
                      border: "1px solid rgba(122, 24, 56, 0.15)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 04: Formations & Certifications ─── */
function Formations() {
  const ref = useFadeUp();

  const orangeSkills = [
    "UX/UI Design",
    "Design Systems",
    "Wireframing",
    "Prototypage avec Figma",
    "Branding",
    "Charte graphique",
    "Création de contenu",
    "Communication digitale",
    "Marketing digital",
    "Community management",
    "Canva & design",
    "Outils collaboratifs",
    "Méthodes Agile",
    "Trello",
    "Monday.com",
    "Burndown Chart",
    "Microsoft Word",
    "Google Workspace",
  ];

  return (
    <section id="formations" style={{ background: "#F6DDE4" }} className="py-28">
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        <SectionLabel num="04" text="Formations &amp; Certifications" />

        <h2
          className="leading-tight mb-14"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
            fontWeight: 400,
            color: "#7A1838",
          }}
        >
          Formations d'excellence
        </h2>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Major Formation: Orange Digital Center (8 cols) */}
          <div
            className="lg:col-span-8 p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-sm"
            style={{
              background: "#FFF9F6",
              border: "1px solid rgba(217,140,155,0.3)",
            }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span
                className="pill-tag text-xs font-semibold"
                style={{
                  background: "#7A1838",
                  color: "#FFF9F6",
                  borderColor: "#7A1838",
                }}
              >
                FORMATION INTENSIVE — 6 MOIS
              </span>
              <span className="text-xs font-mono" style={{ color: "#D98C9B" }}>
                4 mois formation + 2 mois fil rouge &amp; soutenance
              </span>
            </div>

            <h3
              className="text-2xl md:text-3xl font-medium mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#7A1838",
              }}
            >
              Orange Digital Center – Sonatel Academy
            </h3>

            <p
              className="text-base font-semibold mb-4"
              style={{ color: "#4A2635" }}
            >
              Référentiel Assistant Digital – Hackeuse
            </p>

            <p
              className="text-sm font-light leading-relaxed mb-6"
              style={{ color: "#4A2635" }}
            >
              Cette formation d'élite m'a permis de développer une expertise
              pointue en conception d'interfaces, gestion de projet agile,
              stratégies de communication digitale et identité visuelle :
            </p>

            {/* Competencies Badges */}
            <div className="flex flex-wrap gap-2">
              {orangeSkills.map((sk, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1.5 rounded-xl font-normal transition-colors hover:bg-[#7A1838] hover:text-[#FFF9F6]"
                  style={{
                    background: "#F6DDE4",
                    color: "#7A1838",
                    border: "1px solid rgba(217, 140, 155, 0.35)",
                  }}
                >
                  {sk}
                </span>
              ))}
            </div>
          </div>

          {/* Secondary Certifications (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Certification Marketing Digital */}
            <div
              className="p-8 rounded-3xl flex-1 flex flex-col justify-between"
              style={{
                background: "#FFF9F6",
                border: "1px solid rgba(217,140,155,0.3)",
              }}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Starburst size={24} color="#7A1838" />
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "#D98C9B" }}
                  >
                    Certification Officielle
                  </span>
                </div>
                <h4
                  className="text-xl font-medium mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#7A1838",
                  }}
                >
                  Certification en Marketing Digital
                </h4>
                <p
                  className="text-xs font-light leading-relaxed"
                  style={{ color: "#4A2635" }}
                >
                  Acquisition et validation des fondamentaux du marketing
                  numérique, du référencement et des leviers d'acquisition.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#D98C9B]/20">
                <span
                  className="pill-tag text-[10px]"
                  style={{ color: "#7A1838", borderColor: "rgba(122,24,56,0.3)" }}
                >
                  Marketing Digital
                </span>
              </div>
            </div>

            {/* Formation comptable */}
            <div
              className="p-8 rounded-3xl flex-1 flex flex-col justify-between"
              style={{
                background: "#FFF9F6",
                border: "1px solid rgba(217,140,155,0.3)",
              }}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Starburst size={24} color="#7A1838" />
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "#D98C9B" }}
                  >
                    Gestion &amp; Finance
                  </span>
                </div>
                <h4
                  className="text-xl font-medium mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#7A1838",
                  }}
                >
                  Formation comptable en ligne
                </h4>
                <p
                  className="text-xs font-light leading-relaxed"
                  style={{ color: "#4A2635" }}
                >
                  Formation spécialisée de 3 mois axée sur les principes
                  comptables, la rigueur administrative et le suivi des pièces.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#D98C9B]/20 flex items-center justify-between">
                <span
                  className="pill-tag text-[10px]"
                  style={{ color: "#7A1838", borderColor: "rgba(122,24,56,0.3)" }}
                >
                  Comptabilité
                </span>
                <span className="text-xs font-mono" style={{ color: "#D98C9B" }}>
                  Durée : 3 mois
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 05: Compétences (Hard & Soft sans jauges) ─── */
function Competences() {
  const ref = useFadeUp();

  const hardSkillsGroups = [
    {
      category: "Digital, Marketing & Contenu",
      items: [
        "Digital",
        "Communication digitale",
        "Marketing digital",
        "Community Management",
        "Création de contenu",
      ],
    },
    {
      category: "Design, Branding & UI/UX",
      items: [
        "Branding",
        "Identité visuelle",
        "Design graphique",
        "Canva",
        "Figma",
        "UX/UI Design",
        "Wireframes",
        "Prototypage",
        "Design Systems",
      ],
    },
    {
      category: "Gestion de Projet & Outils",
      items: [
        "Gestion de projet",
        "Méthodes Agile",
        "Google Workspace",
        "Microsoft Word",
        "Trello",
        "Monday.com",
      ],
    },
  ];

  const softSkills = [
    "Communication",
    "Créativité",
    "Organisation",
    "Adaptabilité",
    "Écoute",
    "Esprit d'équipe",
    "Motivation",
    "Prise de parole en public",
    "Sens du relationnel",
  ];

  return (
    <section id="competences" style={{ background: "#FFF9F6" }} className="py-28">
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        <SectionLabel num="05" text="Compétences" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 400,
                color: "#7A1838",
              }}
            >
              Hard &amp; Soft Skills
            </h2>
            <p className="text-sm font-light mt-2" style={{ color: "#6B3A4F" }}>
              Un éventail équilibré alliant créativité digitale, rigueur
              organisationnelle et qualités humaines.
            </p>
          </div>
          <p className="text-xs font-mono italic" style={{ color: "#D98C9B" }}>
            * Approche qualitative sans jauges arbitraires
          </p>
        </div>

        {/* 2 Main Columns: Hard Skills (Left) & Soft Skills (Right) */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Hard Skills (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: "#7A1838" }}
              />
              <h3
                className="text-xl md:text-2xl font-medium"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#7A1838",
                }}
              >
                Hard Skills
              </h3>
            </div>

            <div className="flex flex-col gap-5">
              {hardSkillsGroups.map((grp, i) => (
                <div
                  key={i}
                  className="p-6 md:p-7 rounded-2xl"
                  style={{
                    background: "#F6DDE4",
                    border: "1px solid rgba(217, 140, 155, 0.25)",
                  }}
                >
                  <h4
                    className="text-sm font-semibold uppercase tracking-wider mb-4"
                    style={{ color: "#7A1838" }}
                  >
                    {grp.category}
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {grp.items.map((skill, j) => (
                      <span
                        key={j}
                        className="px-4 py-2 rounded-xl text-xs font-medium transition-transform duration-200 hover:scale-105"
                        style={{
                          background: "#FFF9F6",
                          color: "#4A2635",
                          border: "1px solid rgba(122, 24, 56, 0.15)",
                          boxShadow: "0 2px 4px rgba(74, 38, 53, 0.03)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: "#D98C9B" }}
              />
              <h3
                className="text-xl md:text-2xl font-medium"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#7A1838",
                }}
              >
                Soft Skills
              </h3>
            </div>

            <div
              className="p-6 md:p-8 rounded-3xl"
              style={{
                background: "#FFF9F6",
                border: "1.5px solid rgba(217, 140, 155, 0.35)",
              }}
            >
              <p
                className="text-xs font-light leading-relaxed mb-6"
                style={{ color: "#6B3A4F" }}
              >
                Les compétences relationnelles et comportementales au cœur de
                ma pratique quotidienne :
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {softSkills.map((soft, k) => (
                  <div
                    key={k}
                    className="p-3.5 rounded-xl flex items-center gap-3 transition-colors hover:bg-[#F6DDE4]"
                    style={{
                      background: "rgba(246, 221, 228, 0.4)",
                      border: "1px solid rgba(217, 140, 155, 0.2)",
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: "#7A1838" }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#4A2635" }}
                    >
                      {soft}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 06: Services (7 Cartes élégantes) ─── */
function Services() {
  const ref = useFadeUp();

  const servicesList = [
    {
      num: "01",
      title: "Communication digitale",
      desc: "Création et structuration de contenus adaptés aux différents canaux digitaux.",
      details:
        "Élaboration de plannings éditoriaux, rédaction engageante et diffusion multicanale ciblée.",
    },
    {
      num: "02",
      title: "Marketing digital",
      desc: "Mise en place d'idées et de stratégies permettant de développer une présence digitale cohérente.",
      details:
        "Veille concurrentielle, positionnement sur le web et fidélisation de l'audience.",
    },
    {
      num: "03",
      title: "Community Management",
      desc: "Création de contenus, animation et gestion de communautés digitales.",
      details:
        "Modération, interaction active avec les abonnés, storytelling et croissance organique.",
    },
    {
      num: "04",
      title: "Création de contenu",
      desc: "Conception de visuels, publications, carrousels et supports de communication.",
      details:
        "Formats visuels percutants, harmonie chromatique et clarté des messages visuels.",
    },
    {
      num: "05",
      title: "Branding & identité visuelle",
      desc: "Création d'univers visuels cohérents : couleurs, typographies, moodboards et chartes graphiques.",
      details:
        "Logotypes, guidelines visuelles et déclinaison des supports physiques & digitaux.",
    },
    {
      num: "06",
      title: "UX/UI Design",
      desc: "Recherche, wireframes, conception d'interfaces et prototypage avec Figma.",
      details:
        "Parcours utilisateurs fluides, ergonomie mobile-first et design systems réutilisables.",
    },
    {
      num: "07",
      title: "Gestion de projet digital",
      desc: "Organisation des tâches, collaboration et suivi de projets avec des outils comme Trello et Monday.com.",
      details:
        "Application des rituels agiles, respect des jalons et coordination d'équipes.",
    },
  ];

  return (
    <section id="services" style={{ background: "#F6DDE4" }} className="py-28">
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        <SectionLabel num="06" text="Mes services" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 400,
                color: "#7A1838",
              }}
            >
              Ce que je peux accomplir
              <br />
              <em className="font-light">pour vos projets</em>
            </h2>
          </div>
          <p className="text-sm font-light max-w-sm" style={{ color: "#6B3A4F" }}>
            Des prestations digitales complètes, de la conception stratégique à
            la livraison d'interfaces et supports finaux.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesList.map((s, idx) => (
            <div
              key={s.num}
              className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lg ${
                idx === 6 ? "sm:col-span-2 lg:col-span-3 xl:col-span-2" : ""
              }`}
              style={{
                background: "#FFF9F6",
                border: "1px solid rgba(217, 140, 155, 0.25)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-xs font-mono font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(122,24,56,0.08)",
                      color: "#7A1838",
                    }}
                  >
                    {s.num}
                  </span>
                  <Starburst size={20} color="#D98C9B" />
                </div>

                <h3
                  className="text-xl font-medium mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#7A1838",
                  }}
                >
                  {s.title}
                </h3>

                <p
                  className="text-sm font-normal leading-relaxed mb-4"
                  style={{ color: "#4A2635" }}
                >
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D98C9B]/20">
                <p
                  className="text-xs font-light leading-relaxed"
                  style={{ color: "#6B3A4F" }}
                >
                  {s.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 08: Projets & Réalisations ODC ─── */
function Projects({ onOpenCaseStudy }: { onOpenCaseStudy: (id: string) => void }) {
  const ref = useFadeUp();
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "Tous les projets" },
    { id: "scrum", label: "Agile & Scrum" },
    { id: "ux-ui", label: "UX/UI Design" },
    { id: "branding", label: "Branding" },
    { id: "dataviz", label: "DataViz & IA" },
  ];

  const filteredProjects = ODC_PROJECTS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "scrum") return p.id === "lolli";
    if (filter === "ux-ui") return p.id === "joj-dakar-2026" || p.id === "flo";
    if (filter === "branding") return p.id === "nayrose";
    if (filter === "dataviz") return p.id === "sen-foncier" || p.id === "jambaar";
    return true;
  });

  return (
    <section id="projets" className="py-28 px-6 md:px-10 bg-[#FFF9F6] relative overflow-hidden">
      {/* Decorative glows */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full opacity-10 pointer-events-none blur-3xl"
        style={{ background: "#7A1838" }}
      />

      <div ref={ref} className="fade-up max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel num="08" text="TRAVAUX & RÉALISATIONS ODC" />
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-normal font-display tracking-tight text-[#4A2635] mb-6"
          >
            Projets Réalisés à Orange Digital Center
          </h2>
          <p className="text-sm md:text-base text-[#4A2635]/80 font-light leading-relaxed">
            Chaque réalisation ci-dessous reflète le <strong>travail réellement effectué</strong> au cours de ma formation : de la gestion agile en tant que Scrum Master au cycle complet d'UX/UI Design, en passant par le branding d'une marque artisanale et la visualisation de données citoyennes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                filter === cat.id
                  ? "bg-[#7A1838] text-[#FFF9F6] shadow-md scale-105"
                  : "bg-white text-[#4A2635] border border-[#D98C9B]/30 hover:bg-[#D98C9B]/15"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid: 6 Distinct, Rich Editorial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="group rounded-3xl bg-white border border-[#D98C9B]/30 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
            >
              {/* Card Banner / Visual Preview */}
              <div
                className={`relative p-7 bg-gradient-to-br ${p.heroBgGradient} text-[#FFF9F6] flex flex-col justify-between min-h-[220px] overflow-hidden`}
              >
                {/* Background glow & shape */}
                <div
                  className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full opacity-25 blur-xl group-hover:scale-125 transition-transform duration-700"
                  style={{ background: p.accentColor }}
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm"
                  >
                    {p.category}
                  </span>
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: p.accentColor }}
                  />
                </div>

                <div className="relative z-10 my-auto py-2">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white mb-1">
                    {p.title}
                  </h3>
                  {p.slogan && (
                    <p className="text-xs italic font-display text-[#F6DDE4]/90">
                      {p.slogan}
                    </p>
                  )}
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] text-white/80 pt-2 border-t border-white/15">
                  <span className="font-medium">{p.role}</span>
                  <span className="text-[10px] font-mono opacity-80">{p.year}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-[#4A2635]/85 leading-relaxed">
                    {p.shortDescription}
                  </p>

                  {/* Real Deliverables Badges */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#7A1838] block">
                      Livrables &amp; Rôle Réel
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {p.deliverables.map((d, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[10px] px-2.5 py-0.5 rounded-md bg-[#FFF9F6] border border-[#D98C9B]/30 text-[#4A2635] font-medium"
                        >
                          {d.label}: {d.value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer with CTA */}
                <div className="pt-4 border-t border-[#D98C9B]/20 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1 max-w-[60%]">
                    {p.tools.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] text-[#7A1838] font-mono">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy(p.id)}
                    className="px-4 py-2 rounded-full bg-[#7A1838] group-hover:bg-[#4A2635] text-[#FFF9F6] text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm flex items-center gap-1.5 group-hover:translate-x-0.5"
                  >
                    <span>Voir le projet</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 08: Outils que j'utilise ─── */
function Tools() {
  const ref = useFadeUp();

  const toolsList = [
    {
      name: "Figma",
      type: "UI/UX & Prototypage",
      icon: (
        <svg width="28" height="28" viewBox="0 0 38 57" fill="none">
          <path
            d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
            fill="#7A1838"
          />
          <path
            d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
            fill="#D98C9B"
          />
          <path
            d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
            fill="#7A1838"
          />
          <path
            d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
            fill="#4A2635"
          />
          <path
            d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
            fill="#D98C9B"
          />
        </svg>
      ),
    },
    {
      name: "Canva",
      type: "Design Graphique & Supports",
      icon: (
        <span className="font-display font-bold text-2xl text-[#7A1838]">
          Canva
        </span>
      ),
    },
    {
      name: "Adobe Illustrator",
      type: "Vectoriel & Identités",
      icon: (
        <span className="w-10 h-10 rounded-lg bg-[#7A1838] text-[#FFF9F6] flex items-center justify-center font-bold font-mono text-sm">
          Ai
        </span>
      ),
    },
    {
      name: "Trello",
      type: "Gestion Agile & Rituels",
      icon: (
        <div className="w-9 h-9 rounded-lg bg-[#4A2635] p-1.5 flex gap-1 items-start justify-center">
          <span className="w-3 h-5 bg-[#FFF9F6] rounded-xs" />
          <span className="w-3 h-3 bg-[#FFF9F6] rounded-xs" />
        </div>
      ),
    },
    {
      name: "Monday.com",
      type: "Suivi & Planification",
      icon: (
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-[#7A1838]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D98C9B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#4A2635]" />
        </div>
      ),
    },
    {
      name: "Google Workspace",
      type: "Collaboration Cloud & Docs",
      icon: (
        <span className="font-bold text-lg font-mono text-[#7A1838]">
          G-Suite
        </span>
      ),
    },
    {
      name: "Microsoft Word",
      type: "Rédaction & Rapports",
      icon: (
        <span className="w-10 h-10 rounded-lg bg-[#4A2635] text-[#FFF9F6] flex items-center justify-center font-bold font-mono text-sm">
          W
        </span>
      ),
    },
  ];

  return (
    <section id="outils" style={{ background: "#F6DDE4" }} className="py-24">
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        <SectionLabel num="08" text="Outils" />

        <div className="text-center max-w-xl mx-auto mb-14">
          <h2
            className="leading-tight mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 400,
              color: "#7A1838",
            }}
          >
            Outils que j'utilise
          </h2>
          <p className="text-sm font-light" style={{ color: "#6B3A4F" }}>
            Un écosystème éprouvé au service de la créativité, de l'organisation
            et de la performance digitale.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {toolsList.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{
                background: "#FFF9F6",
                border: "1px solid rgba(217,140,155,0.25)",
              }}
            >
              <div className="h-10 flex items-center justify-center">
                {t.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#7A1838]">
                  {t.name}
                </h3>
                <p className="text-[11px] font-light text-[#6B3A4F] mt-0.5">
                  {t.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 09: Témoignages (Structure Prête) ─── */
function Testimonials() {
  const ref = useFadeUp();

  const testimonialSlots = [
    {
      slot: "01",
      title: "Recommandation Professionnelle",
      note: "Espace réservé pour témoignage d'un manager, collaborateur ou client.",
    },
    {
      slot: "02",
      title: "Retour de Mission & Collaboration",
      note: "Espace réservé pour retour d'expérience sur un projet digital ou commercial.",
    },
    {
      slot: "03",
      title: "Avis Partenaire & Formation",
      note: "Espace réservé pour appréciation de formateur ou partenaire de projet fil rouge.",
    },
  ];

  return (
    <section id="temoignages" style={{ background: "#FFF9F6" }} className="py-24">
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        <SectionLabel num="09" text="Témoignages" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 400,
                color: "#7A1838",
              }}
            >
              Témoignages &amp; Recommandations
            </h2>
            <p className="text-sm font-light mt-2" style={{ color: "#6B3A4F" }}>
              Structure prête à recevoir les retours d'expériences
              professionnelles réelles.
            </p>
          </div>
          <span className="text-xs font-mono italic" style={{ color: "#D98C9B" }}>
            * Aucun faux témoignage inventé
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonialSlots.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl flex flex-col justify-between"
              style={{
                background: "#F6DDE4",
                border: "1.5px dashed rgba(217, 140, 155, 0.45)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: "#7A1838" }}
                  >
                    TÉMOIGNAGE {item.slot}
                  </span>
                  <Starburst size={22} color="#D98C9B" />
                </div>
                <h3
                  className="text-lg font-medium mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#7A1838",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs md:text-sm font-light italic leading-relaxed my-4"
                  style={{ color: "#4A2635" }}
                >
                  « {item.note} »
                </p>
              </div>

              <div className="pt-4 border-t border-[#D98C9B]/30 flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-[#7A1838]">
                  [Nom &amp; Prénom]
                </span>
                <span className="text-[11px] font-light text-[#6B3A4F]">
                  [Fonction — Organisation / Entreprise]
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 10: Contact ─── */
function Contact() {
  const ref = useFadeUp();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden grain"
      style={{
        background:
          "radial-gradient(ellipse 130% 90% at 20% 50%, #C4576E 0%, #7A1838 45%, #4A2635 85%, #361522 100%)",
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          width: "50vw",
          height: "50vw",
          maxWidth: 550,
          maxHeight: 550,
          top: "-15%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(217,140,155,0.2) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div
        ref={ref}
        className="fade-up max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 relative z-10"
      >
        {/* Left Column: Direct info & CTA */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <SectionLabel num="10" text="Contact" light />

            <h2
              className="leading-tight mb-6 font-light"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                color: "#FFF9F6",
              }}
            >
              Échangeons sur votre projet,
              <br />
              <em className="font-normal italic">ou vos opportunités.</em>
            </h2>

            <blockquote
              className="p-5 rounded-2xl mb-8 leading-relaxed font-light text-base md:text-lg"
              style={{
                background: "rgba(255, 249, 246, 0.08)",
                border: "1px solid rgba(217, 140, 155, 0.25)",
                color: "#FFF9F6",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              « Vous avez un projet, une opportunité ou simplement envie
              d'échanger ? Parlons-en. »
            </blockquote>

            {/* Direct Contact Points */}
            <div className="flex flex-col gap-4 mb-8">
              {/* Téléphone 1 */}
              <a
                href="tel:+221776818541"
                className="flex items-center gap-4 p-3.5 rounded-xl transition-all duration-300 hover:bg-white/10 group"
                style={{ border: "1px solid rgba(255,249,246,0.15)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm"
                  style={{
                    background: "rgba(217,140,155,0.25)",
                    color: "#FFF9F6",
                  }}
                >
                  📞
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-wider"
                    style={{ color: "#D98C9B" }}
                  >
                    Téléphone principal
                  </p>
                  <p
                    className="text-base font-medium text-white group-hover:text-[#D98C9B] transition-colors"
                  >
                    77 681 85 41
                  </p>
                </div>
              </a>

              {/* Téléphone 2 */}
              <a
                href="tel:+221763060265"
                className="flex items-center gap-4 p-3.5 rounded-xl transition-all duration-300 hover:bg-white/10 group"
                style={{ border: "1px solid rgba(255,249,246,0.15)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm"
                  style={{
                    background: "rgba(217,140,155,0.25)",
                    color: "#FFF9F6",
                  }}
                >
                  📱
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-wider"
                    style={{ color: "#D98C9B" }}
                  >
                    Ligne directe / WhatsApp
                  </p>
                  <p
                    className="text-base font-medium text-white group-hover:text-[#D98C9B] transition-colors"
                  >
                    76 306 02 65
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:rose.niangdiallo2018@gmail.com"
                className="flex items-center gap-4 p-3.5 rounded-xl transition-all duration-300 hover:bg-white/10 group"
                style={{ border: "1px solid rgba(255,249,246,0.15)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm"
                  style={{
                    background: "rgba(217,140,155,0.25)",
                    color: "#FFF9F6",
                  }}
                >
                  ✉
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-wider"
                    style={{ color: "#D98C9B" }}
                  >
                    Adresse Email
                  </p>
                  <p
                    className="text-base font-medium text-white group-hover:text-[#D98C9B] transition-colors"
                  >
                    rose.niangdiallo2018@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn Placeholder Button */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  alert(
                    "Lien LinkedIn : L'URL de profil de Rose Niang Diallo sera configurée dès réception de l'adresse définitive."
                  );
                }}
                className="flex items-center gap-4 p-3.5 rounded-xl transition-all duration-300 hover:bg-white/10 group cursor-pointer"
                style={{ border: "1px solid rgba(255,249,246,0.15)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-mono"
                  style={{
                    background: "rgba(217,140,155,0.25)",
                    color: "#FFF9F6",
                  }}
                >
                  in
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-wider"
                    style={{ color: "#D98C9B" }}
                  >
                    Réseau Professionnel
                  </p>
                  <p className="text-base font-medium text-white group-hover:text-[#D98C9B] transition-colors">
                    Profil LinkedIn [Lien réservé]
                  </p>
                </div>
              </a>
            </div>
          </div>

          <p className="text-xs font-light text-rose-100/60">
            Localisation : Dakar, Sénégal • Disponible en présentiel et à distance.
          </p>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-6">
          <div
            className="p-8 md:p-10 rounded-3xl shadow-xl backdrop-blur-md"
            style={{
              background: "rgba(255, 249, 246, 0.07)",
              border: "1.5px solid rgba(217, 140, 155, 0.3)",
            }}
          >
            <h3
              className="text-2xl font-medium mb-6 text-[#FFF9F6]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Envoyer un message
            </h3>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-2xl">
                  ✓
                </div>
                <h4
                  className="text-2xl font-medium text-[#FFF9F6]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Merci pour votre message !
                </h4>
                <p className="text-sm text-rose-100/80 max-w-sm">
                  Votre demande a bien été prise en compte. Rose Niang Diallo
                  reviendra vers vous dans les plus brefs délais.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="pill-tag text-xs font-semibold mt-4 py-2 px-6"
                  style={{
                    color: "#FFF9F6",
                    borderColor: "rgba(255,249,246,0.4)",
                  }}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-rose-100/80">
                      Votre Nom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Fatou Sow"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255, 249, 246, 0.1)",
                        border: "1px solid rgba(217, 140, 155, 0.3)",
                        color: "#FFF9F6",
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-rose-100/80">
                      Votre Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nom@entreprise.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255, 249, 246, 0.1)",
                        border: "1px solid rgba(217, 140, 155, 0.3)",
                        color: "#FFF9F6",
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-rose-100/80">
                    Objet de la demande *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Opportunité professionnelle / Projet de refonte"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255, 249, 246, 0.1)",
                      border: "1px solid rgba(217, 140, 155, 0.3)",
                      color: "#FFF9F6",
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-rose-100/80">
                    Votre Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Décrivez votre besoin, calendrier ou projet..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-200"
                    style={{
                      background: "rgba(255, 249, 246, 0.1)",
                      border: "1px solid rgba(217, 140, 155, 0.3)",
                      color: "#FFF9F6",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 py-4 px-8 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] shadow-lg cursor-pointer"
                  style={{
                    background: "#D98C9B",
                    color: "#FFF9F6",
                    border: "none",
                  }}
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer Minimaliste ─── */
function Footer() {
  const links = [
    { href: "#accueil", label: "Accueil" },
    { href: "#a-propos", label: "À propos" },
    { href: "#experiences", label: "Expériences" },
    { href: "#competences", label: "Compétences" },
    { href: "#projets", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="py-16" style={{ background: "#4A2635" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-[#D98C9B]/20">
          {/* Identity */}
          <div className="md:col-span-5">
            <h3
              className="text-2xl font-medium mb-2 text-[#FFF9F6]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Rose Niang Diallo
            </h3>
            <p className="text-sm font-light text-[#D98C9B] mb-3">
              Assistante Digitale | Communication | Marketing Digital | Design
            </p>
            <p className="text-xs font-light text-[#FFF9F6]/60 max-w-sm leading-relaxed">
              Professionnelle polyvalente et créative, disponible pour missions
              digitales, créations de contenu et opportunités professionnelles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4
              className="pill-tag mb-4 inline-flex text-[10px]"
              style={{
                color: "#D98C9B",
                borderColor: "rgba(217,140,155,0.3)",
              }}
            >
              Navigation rapide
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-xs font-light text-[#FFF9F6]/70 transition-colors hover:text-[#D98C9B]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Channels & Icons */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4
                className="pill-tag mb-4 inline-flex text-[10px]"
                style={{
                  color: "#D98C9B",
                  borderColor: "rgba(217,140,155,0.3)",
                }}
              >
                Canaux directs
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:rose.niangdiallo2018@gmail.com"
                  title="Envoyer un email"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm text-white hover:bg-[#D98C9B] transition-colors"
                >
                  ✉
                </a>
                <a
                  href="tel:+221776818541"
                  title="Appeler"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm text-white hover:bg-[#D98C9B] transition-colors"
                >
                  📞
                </a>
                <a
                  href="#contact"
                  title="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white hover:bg-[#D98C9B] transition-colors"
                >
                  in
                </a>
              </div>
            </div>

            <div className="opacity-50 mt-6">
              <Starburst size={24} color="#D98C9B" />
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#FFF9F6]/40">
          <p>© 2026 Rose Niang Diallo — Tous droits réservés.</p>
          <p>
            Portfolio conçu avec élégance, modernité et respect de la charte.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main App ─── */
export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  return (
    <div className="min-h-full selection:bg-[#D98C9B] selection:text-[#FFF9F6]">
      <Nav />
      <main>
        {/* 01: ACCUEIL */}
        <Hero />

        {/* 02: À PROPOS */}
        <About />

        {/* 03: MON PARCOURS */}
        <Evolution />

        {/* 04: EXPÉRIENCES */}
        <Experiences />

        {/* 05: COMPÉTENCES */}
        <Competences />

        {/* 06: FORMATIONS */}
        <Formations />

        {/* 07: SERVICES */}
        <Services />

        {/* 08: PROJETS & RÉALISATIONS ODC */}
        <Projects onOpenCaseStudy={(id) => setSelectedProjectId(id)} />

        {/* 09: PRÉSENTATIONS & CRÉATIONS CANVA */}
        <CanvaGallery />

        {/* 10: OUTILS */}
        <Tools />

        {/* 11: TÉMOIGNAGES */}
        <Testimonials />

        {/* 12: CONTACT */}
        <Contact />
      </main>

      <Footer />

      {/* Case Study Full Modal */}
      <CaseStudyModal
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
        onSelectProject={(id) => setSelectedProjectId(id)}
      />
    </div>
  );
}
