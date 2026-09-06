import React, { useState } from "react";
import { CANVA_PRESENTATIONS, CanvaPresentation, CanvaSlide } from "../data/projectsData";

export default function CanvaGallery() {
  const [selectedPresId, setSelectedPresId] = useState<string>(CANVA_PRESENTATIONS[0].id);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const currentPres: CanvaPresentation =
    CANVA_PRESENTATIONS.find((p) => p.id === selectedPresId) || CANVA_PRESENTATIONS[0];

  const currentSlide: CanvaSlide = currentPres.slides[currentSlideIndex] || currentPres.slides[0];

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % currentPres.slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + currentPres.slides.length) % currentPres.slides.length);
  };

  const handleSelectPresentation = (id: string) => {
    setSelectedPresId(id);
    setCurrentSlideIndex(0);
  };

  return (
    <section id="canva" className="py-24 px-6 md:px-10 bg-[#FFF9F6] relative overflow-hidden border-t border-[#D98C9B]/20">
      {/* Subtle background decoration */}
      <div
        className="absolute top-1/2 -right-40 w-96 h-96 rounded-full opacity-10 pointer-events-none blur-3xl"
        style={{ background: "#7A1838" }}
      />
      <div
        className="absolute bottom-10 -left-40 w-80 h-80 rounded-full opacity-15 pointer-events-none blur-3xl"
        style={{ background: "#D98C9B" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="pill-tag mb-4 inline-flex items-center gap-2"
            style={{
              color: "#7A1838",
              borderColor: "rgba(122,24,56,0.3)",
              background: "rgba(217,140,155,0.12)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7A1838]" />
            09 — COMMUNICATION VISUELLE &amp; STORYTELLING
          </span>
          <h2
            className="text-3xl md:text-5xl font-normal font-display tracking-tight text-[#4A2635] mb-4"
          >
            Présentations &amp; Créations Canva
          </h2>
          <p className="text-sm md:text-base text-[#4A2635]/80 font-light leading-relaxed">
            Mes premiers projets réalisés pendant ma formation à Orange Digital Center. Ces présentations démontrent ma capacité à structurer l'information, concevoir un storytelling visuel clair et créer des supports à fort impact avec Canva.
          </p>
        </div>

        {/* Presentation Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {CANVA_PRESENTATIONS.map((pres) => {
            const isSelected = pres.id === selectedPresId;
            return (
              <button
                key={pres.id}
                onClick={() => handleSelectPresentation(pres.id)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#7A1838] text-[#FFF9F6] scale-105 shadow-md"
                    : "bg-white text-[#4A2635] hover:bg-[#D98C9B]/15 border border-[#D98C9B]/30"
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: pres.accentColor }}
                />
                <span>{pres.title}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/10">
                  {pres.slides.length} slides
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Presentation Deck Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left / Main: Slide Viewer */}
          <div className="lg:col-span-8 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-[#D98C9B]/30 shadow-xl">
            {/* Top Viewer Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-[#D98C9B]/20 mb-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#7A1838]">
                  Support de présentation Canva
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display text-[#4A2635]">
                  {currentPres.title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold text-[#7A1838] px-3 py-1 rounded-full bg-[#FFF9F6] border border-[#D98C9B]/30">
                  Diapositive {currentSlideIndex + 1} / {currentPres.slides.length}
                </span>
                <button
                  onClick={() => setIsFullScreen(true)}
                  className="p-2 rounded-xl text-[#7A1838] hover:bg-[#7A1838]/10 transition-colors"
                  title="Agrandir la présentation"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Slide Stage / Canvas */}
            <div
              className="relative w-full aspect-[16/9] rounded-2xl p-6 sm:p-10 flex flex-col justify-between shadow-inner overflow-hidden border border-black/10 transition-all duration-500"
              style={{
                background: currentSlide.bgColor,
                color: currentSlide.bgColor === "#FFF9F6" ? "#4A2635" : "#FFF9F6",
              }}
            >
              {/* Background gradient hint */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none blur-2xl"
                style={{ background: currentSlide.accentColor }}
              />

              {/* Slide Header */}
              <div className="relative z-10 flex items-center justify-between">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                  style={{
                    borderColor: "currentColor",
                    opacity: 0.8,
                  }}
                >
                  {currentSlide.category}
                </span>
                <span className="text-xs font-display italic opacity-75">
                  Orange Digital Center • Rose Niang Diallo
                </span>
              </div>

              {/* Slide Body */}
              <div className="relative z-10 my-auto py-4">
                <h4
                  className="text-xl sm:text-2xl md:text-3xl font-bold font-display mb-3 leading-tight"
                  style={{ color: currentSlide.accentColor }}
                >
                  {currentSlide.title}
                </h4>
                <p className="text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl opacity-90">
                  {currentSlide.caption}
                </p>

                {/* Key Points Badge List in Slide */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {currentSlide.keyElements.map((el, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs px-2.5 py-1 rounded-md bg-black/15 backdrop-blur-sm border border-white/10"
                    >
                      ✓ {el}
                    </span>
                  ))}
                </div>
              </div>

              {/* Slide Footer */}
              <div className="relative z-10 flex items-center justify-between text-[10px] opacity-70 border-t border-current/15 pt-2">
                <span>Conception : Canva Pro</span>
                <span>Slide {currentSlideIndex + 1}</span>
              </div>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center justify-between pt-6 mt-4 border-t border-[#D98C9B]/20">
              <button
                onClick={handlePrevSlide}
                className="px-4 py-2 rounded-full border border-[#D98C9B]/40 text-[#7A1838] hover:bg-[#7A1838] hover:text-[#FFF9F6] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5"
              >
                <span>←</span>
                <span>Précédent</span>
              </button>

              {/* Thumbnail Strip */}
              <div className="flex items-center gap-1.5 overflow-x-auto px-2 max-w-[200px] sm:max-w-md">
                {currentPres.slides.map((_, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => setCurrentSlideIndex(sIdx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      sIdx === currentSlideIndex
                        ? "w-8 bg-[#7A1838]"
                        : "w-2 bg-[#D98C9B]/40 hover:bg-[#D98C9B]"
                    }`}
                    aria-label={`Aller à la slide ${sIdx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextSlide}
                className="px-4 py-2 rounded-full bg-[#7A1838] text-[#FFF9F6] hover:bg-[#4A2635] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5"
              >
                <span>Suivant</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right: Presentation Details & Skill Pillars */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D98C9B]/30 shadow-lg space-y-5">
              <h4 className="text-xs uppercase tracking-widest text-[#7A1838] font-bold border-b border-[#D98C9B]/20 pb-3">
                Détails de la Réalisation
              </h4>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#7A1838] font-bold">
                  Contexte &amp; Cadre
                </p>
                <p className="text-xs sm:text-sm text-[#4A2635] font-medium leading-relaxed">
                  {currentPres.context}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#7A1838] font-bold">
                  Objectif Pédagogique
                </p>
                <p className="text-xs sm:text-sm text-[#4A2635] font-light leading-relaxed">
                  {currentPres.objective}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#7A1838] font-bold">
                  Outil Utilisé
                </p>
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#7A1838]/10 text-[#7A1838] border border-[#7A1838]/20 mt-1">
                  {currentPres.tool}
                </span>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#7A1838] font-bold mb-2">
                  Thématiques &amp; Compétences
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {currentPres.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-[#FFF9F6] border border-[#D98C9B]/30 text-[#4A2635]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Value Proposition */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#7A1838] to-[#4A2635] text-[#FFF9F6] space-y-3 shadow-md">
              <p className="text-xs uppercase tracking-widest text-[#F6DDE4] font-bold">
                Storytelling &amp; Hiérarchie
              </p>
              <h5 className="text-base font-bold font-display">
                La force du design de présentation
              </h5>
              <p className="text-xs text-[#FFF9F6]/85 font-light leading-relaxed">
                Chaque slide est pensée pour captiver l'attention du public, guider le regard avec une hiérarchie typographique stricte et transmettre l'essentiel en quelques secondes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Slide Viewer Modal */}
      {isFullScreen && (
        <div className="fixed inset-0 z-[120] bg-black/95 flex flex-col justify-between p-6 md:p-12 animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-white">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#D98C9B] font-bold">
                {currentPres.title}
              </p>
              <p className="text-sm text-white/70">
                Slide {currentSlideIndex + 1} sur {currentPres.slides.length}
              </p>
            </div>
            <button
              onClick={() => setIsFullScreen(false)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              ✕ Fermer le plein écran
            </button>
          </div>

          <div
            className="max-w-5xl w-full mx-auto aspect-[16/9] rounded-3xl p-8 sm:p-14 flex flex-col justify-between shadow-2xl border border-white/20 my-auto"
            style={{
              background: currentSlide.bgColor,
              color: currentSlide.bgColor === "#FFF9F6" ? "#4A2635" : "#FFF9F6",
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-current">
                {currentSlide.category}
              </span>
              <span className="text-sm font-display italic">Orange Digital Center</span>
            </div>

            <div className="py-6">
              <h3
                className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4"
                style={{ color: currentSlide.accentColor }}
              >
                {currentSlide.title}
              </h3>
              <p className="text-base sm:text-lg font-light leading-relaxed max-w-2xl opacity-90">
                {currentSlide.caption}
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {currentSlide.keyElements.map((el, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-black/20 border border-white/15"
                  >
                    ✓ {el}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs opacity-75 border-t border-current/20 pt-3">
              <span>Conception : Canva Pro</span>
              <span>Rose Niang Diallo</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            <button
              onClick={handlePrevSlide}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              ← Précédent
            </button>
            <button
              onClick={handleNextSlide}
              className="px-6 py-3 rounded-full bg-[#D98C9B] hover:bg-[#F6DDE4] text-[#4A2635] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Suivant →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
