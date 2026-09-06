import React, { useEffect, useState } from "react";
import { ProjectData, ODC_PROJECTS } from "../data/projectsData";
import { ProjectLogo } from "./ProjectLogo";
import ToolBadge from "./ToolBadge";

interface CaseStudyModalProps {
  projectId: string | null;
  onClose: () => void;
  onSelectProject: (id: string) => void;
}

export default function CaseStudyModal({
  projectId,
  onClose,
  onSelectProject,
}: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const project: ProjectData | undefined = ODC_PROJECTS.find(
    (p) => p.id === projectId
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (projectId) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [projectId, onClose]);

  useEffect(() => {
    setActiveTab("overview");
  }, [projectId]);

  if (!project) return null;

  const currentIndex = ODC_PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject =
    ODC_PROJECTS[(currentIndex - 1 + ODC_PROJECTS.length) % ODC_PROJECTS.length];
  const nextProject = ODC_PROJECTS[(currentIndex + 1) % ODC_PROJECTS.length];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto bg-black/75 backdrop-blur-md transition-all duration-300">
      {/* Backdrop click area */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-6xl max-h-full sm:max-h-[92vh] bg-[#FFF9F6] text-[#4A2635] sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200"
        style={{ border: "1px solid rgba(217, 140, 155, 0.3)" }}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 px-6 py-4 bg-[#FFF9F6]/95 backdrop-blur-md border-b border-[#D98C9B]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7A1838] animate-pulse" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#7A1838] font-bold">
                Étude de cas détaillée • ODC
              </p>
              <h3
                className="text-lg md:text-xl font-bold font-display leading-tight text-[#4A2635]"
              >
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex text-xs px-3 py-1 rounded-full bg-[#7A1838]/10 text-[#7A1838] font-medium border border-[#7A1838]/20">
              {project.category}
            </span>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#7A1838]/5 hover:bg-[#7A1838] text-[#7A1838] hover:text-[#FFF9F6] transition-colors focus:outline-none"
              aria-label="Fermer la vue"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto">
          {/* Hero Banner with Portfolio Palette */}
          <div
            className="relative p-8 md:p-14 bg-gradient-to-br from-[#7A1838] via-[#4A2635] to-[#361522] text-[#FFF9F6] overflow-hidden"
          >
            {/* Geometric decoration */}
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none bg-[#D98C9B]"
            />

            <div className="relative z-10 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-[#F6DDE4]/40 bg-white/10 text-[#F6DDE4]"
                >
                  {project.badgeLabel}
                </span>
                {project.isDefenseProject && (
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#D98C9B]/20 text-[#FFF9F6] border border-[#D98C9B]/40">
                    Projet de soutenance — à compléter après ma soutenance
                  </span>
                )}
                {project.isReplicationExercise && (
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#F6DDE4]/20 text-[#F6DDE4] border border-[#F6DDE4]/40">
                    Exercice de reproduction Figma
                  </span>
                )}
              </div>

              {/* Project Logo placed ABOVE the Project Name */}
              <div className="mb-4">
                <ProjectLogo projectId={project.id} size={48} light={true} />
              </div>

              {/* Project Name */}
              <h1
                className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight font-display mb-3 text-[#FFF9F6]"
              >
                {project.title}
              </h1>

              {project.slogan && (
                <p
                  className="text-lg md:text-2xl italic font-display mb-4 text-[#F6DDE4]"
                  style={{ opacity: 0.95 }}
                >
                  {project.slogan}
                </p>
              )}

              <p className="text-base md:text-lg text-[#FFF9F6]/85 font-light leading-relaxed max-w-3xl mb-8">
                {project.subtitle}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-black/25 backdrop-blur-md border border-white/15">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#F6DDE4]/70 font-semibold mb-1">
                    Mon Rôle
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-white">{project.role}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#F6DDE4]/70 font-semibold mb-1">
                    Cadre &amp; Lieu
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-white">Orange Digital Center</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#F6DDE4]/70 font-semibold mb-1">
                    Période
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-white">{project.year}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#F6DDE4]/70 font-semibold mb-1">
                    Livrables Réels
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-0.5">
                    {project.hasLogo && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/20 text-white font-medium">
                        Logo
                      </span>
                    )}
                    {project.hasWireframes && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/20 text-white font-medium">
                        Wireframes
                      </span>
                    )}
                    {project.hasPrototype && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/20 text-white font-medium">
                        Prototype
                      </span>
                    )}
                    {!project.hasLogo && !project.hasWireframes && !project.hasPrototype && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/20 text-white font-medium">
                        DataViz &amp; IA
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="px-6 md:px-12 py-3 bg-[#FFF9F6] border-b border-[#D98C9B]/20 flex items-center gap-3 overflow-x-auto">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === "overview"
                  ? "bg-[#7A1838] text-[#FFF9F6]"
                  : "bg-transparent text-[#4A2635] hover:bg-[#D98C9B]/15"
              }`}
            >
              Étude de Cas
            </button>
            {project.scrumDeliverables && (
              <button
                onClick={() => setActiveTab("scrum")}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === "scrum"
                    ? "bg-[#7A1838] text-[#FFF9F6]"
                    : "bg-transparent text-[#4A2635] hover:bg-[#D98C9B]/15"
                }`}
              >
                Rituels Scrum
              </button>
            )}
            {project.referenceComparison && (
              <button
                onClick={() => setActiveTab("comparison")}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === "comparison"
                    ? "bg-[#7A1838] text-[#FFF9F6]"
                    : "bg-transparent text-[#4A2635] hover:bg-[#D98C9B]/15"
                }`}
              >
                Comparatif &amp; Figma
              </button>
            )}
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-12 space-y-12">
            {activeTab === "overview" && (
              <>
                {/* Description and deliverables overview */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-6">
                    <div className="p-6 rounded-2xl bg-[#D98C9B]/10 border border-[#D98C9B]/25">
                      <h4 className="text-xs uppercase tracking-widest text-[#7A1838] font-bold mb-2">
                        Contexte Orange Digital Center
                      </h4>
                      <p className="text-base text-[#4A2635] leading-relaxed">
                        {project.context}
                      </p>
                    </div>

                    {/* Step by step sections */}
                    <div className="space-y-8 pt-4">
                      {project.sections.map((sec, idx) => (
                        <div
                          key={sec.id}
                          className="relative pl-6 sm:pl-8 border-l-2 border-[#D98C9B]/40 pb-6 last:pb-0"
                        >
                          <div
                            className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-[#FFF9F6] bg-[#7A1838]"
                          />
                          <div className="mb-2">
                            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#7A1838]">
                              Étape 0{idx + 1}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold font-display text-[#4A2635]">
                              {sec.title}
                            </h3>
                            {sec.subtitle && (
                              <p className="text-sm font-medium text-[#7A1838]/80 italic">
                                {sec.subtitle}
                              </p>
                            )}
                          </div>

                          <p className="text-sm md:text-base text-[#4A2635]/90 leading-relaxed mb-4">
                            {sec.description}
                          </p>

                          {sec.keyPoints && sec.keyPoints.length > 0 && (
                            <div className="p-4 rounded-xl bg-white/70 border border-[#D98C9B]/20 space-y-2">
                              <p className="text-xs uppercase tracking-wider font-bold text-[#7A1838]">
                                Points clés &amp; Actions réalisées :
                              </p>
                              <ul className="grid sm:grid-cols-2 gap-2 text-xs md:text-sm text-[#4A2635]">
                                {sec.keyPoints.map((point, pIdx) => (
                                  <li key={pIdx} className="flex items-start gap-2">
                                    <span
                                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-[#7A1838]"
                                    />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar with tools, deliverables & real specifications */}
                  <div className="lg:col-span-4 space-y-6">
                    {/* OUTILS UTILISÉS AVEC VRAIS LOGOS OFFICIELS */}
                    <div className="p-6 rounded-2xl bg-white border border-[#D98C9B]/30 shadow-sm space-y-4">
                      <h4 className="text-xs uppercase tracking-widest text-[#7A1838] font-bold border-b border-[#D98C9B]/20 pb-3 flex items-center justify-between">
                        <span>OUTILS UTILISÉS</span>
                        <span className="text-[10px] text-[#D98C9B] font-mono">
                          {project.tools.length} outils
                        </span>
                      </h4>

                      <div className="flex flex-col gap-2">
                        {project.tools.map((tool, tIdx) => (
                          <ToolBadge key={tIdx} name={tool} />
                        ))}
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-white border border-[#D98C9B]/30 shadow-sm space-y-4">
                      <h4 className="text-xs uppercase tracking-widest text-[#7A1838] font-bold border-b border-[#D98C9B]/20 pb-3">
                        Livrables &amp; Spécifications
                      </h4>

                      <div className="space-y-3">
                        {project.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="text-xs">
                            <span className="text-[#7A1838] font-bold uppercase tracking-wider block text-[10px]">
                              {item.label}
                            </span>
                            <span className="text-[#4A2635] font-medium leading-normal">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specific Project Notes */}
                    {project.id === "sen-foncier" && (
                      <div className="p-5 rounded-2xl bg-[#FFF9F6] border border-[#D98C9B]/40 text-[#4A2635] text-xs leading-relaxed space-y-2">
                        <div className="flex items-center gap-2 font-bold text-[#7A1838]">
                          <span className="w-2 h-2 rounded-full bg-[#7A1838]" />
                          <span>Spécificité SEN FONCIER</span>
                        </div>
                        <p>
                          Conformément au travail réel effectué, ce projet ne comporte pas de logo, de wireframe ou de prototype. La valeur repose intégralement sur la recherche de gouvernance, l'architecture d'information et la visualisation de données citoyennes.
                        </p>
                      </div>
                    )}

                    {project.id === "joj-dakar-2026" && (
                      <div className="p-5 rounded-2xl bg-[#FFF9F6] border border-[#D98C9B]/40 text-[#4A2635] text-xs leading-relaxed space-y-2">
                        <div className="flex items-center gap-2 font-bold text-[#7A1838]">
                          <span className="w-2 h-2 rounded-full bg-[#7A1838]" />
                          <span>Cycle UX/UI Complet</span>
                        </div>
                        <p>
                          Ce projet est le seul dans lequel j'ai conçu l'intégralité du cycle UX/UI : arborescence, wireframes, logo officiel &amp; mascotte AYO intégrés, maquettes haute fidélité et prototypage interactif.
                        </p>
                      </div>
                    )}

                    {project.id === "flo" && (
                      <div className="p-5 rounded-2xl bg-[#FFF9F6] border border-[#D98C9B]/40 text-[#4A2635] text-xs leading-relaxed space-y-2">
                        <div className="flex items-center gap-2 font-bold text-[#7A1838]">
                          <span className="w-2 h-2 rounded-full bg-[#7A1838]" />
                          <span>Exercice de Maquettage Figma</span>
                        </div>
                        <p>
                          Réalisé comme un exercice de précision visuelle à ODC pour maîtriser les auto-layouts, grilles et composants Figma à partir de l'application de référence FLO.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Scrum Tab for LOLLI */}
            {activeTab === "scrum" && project.scrumDeliverables && (
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold font-display text-[#4A2635] mb-2">
                    Gestion de Projet Agile &amp; Rôle de Scrum Master
                  </h4>
                  <p className="text-sm text-[#4A2635]/80">
                    Application méthodique du framework Scrum tout au long des {project.scrumDeliverables.sprintCount} Sprints du projet LOLLI.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white border border-[#D98C9B]/30 shadow-sm space-y-4">
                    <h5 className="text-sm font-bold text-[#7A1838] uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#7A1838]" />
                      Cérémonies &amp; Rituels Animés
                    </h5>
                    <ul className="space-y-3 text-xs md:text-sm text-[#4A2635]">
                      {project.scrumDeliverables.ceremonies.map((cer, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#FFF9F6]">
                          <span className="text-[#7A1838] font-bold">✓</span>
                          <span>{cer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-[#D98C9B]/30 shadow-sm space-y-4">
                    <h5 className="text-sm font-bold text-[#7A1838] uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#D98C9B]" />
                      Responsabilités &amp; Facilitation
                    </h5>
                    <ul className="space-y-3 text-xs md:text-sm text-[#4A2635]">
                      {project.scrumDeliverables.roleResponsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#FFF9F6]">
                          <span className="text-[#D98C9B] font-bold">★</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Comparison Tab for FLO */}
            {activeTab === "comparison" && project.referenceComparison && (
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold font-display text-[#4A2635] mb-2">
                    Exercice de Reproduction &amp; Maîtrise Figma
                  </h4>
                  <p className="text-sm text-[#4A2635]/80">
                    Démarche comparative entre l'application originale et la maquette vectorielle reproduite.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white border border-[#D98C9B]/30 shadow-sm space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#F6DDE4] text-[#7A1838]">
                      Modèle de Base
                    </span>
                    <h5 className="text-lg font-bold text-[#4A2635]">
                      {project.referenceComparison.originalTitle}
                    </h5>
                    <p className="text-xs md:text-sm text-[#4A2635]/85 leading-relaxed">
                      {project.referenceComparison.originalDescription}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#4A2635] text-[#FFF9F6] shadow-sm space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#7A1838] text-[#FFF9F6]">
                      Travail Réalisé
                    </span>
                    <h5 className="text-lg font-bold text-white">
                      {project.referenceComparison.replicationTitle}
                    </h5>
                    <p className="text-xs md:text-sm text-[#FFF9F6]/90 leading-relaxed">
                      {project.referenceComparison.replicationDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#D98C9B]/30 space-y-4">
                  <h5 className="text-xs uppercase tracking-widest text-[#7A1838] font-bold">
                    Acquis Techniques Figma
                  </h5>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs md:text-sm text-[#4A2635]">
                    {project.referenceComparison.learnings.map((learn, lIdx) => (
                      <div key={lIdx} className="p-3 rounded-xl bg-[#FFF9F6] border border-[#D98C9B]/20 flex items-start gap-2">
                        <span className="text-[#7A1838] font-bold">⚡</span>
                        <span>{learn}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer with Previous / Next project buttons */}
        <div className="p-4 md:px-8 bg-[#FFF9F6] border-t border-[#D98C9B]/20 flex items-center justify-between">
          <button
            onClick={() => onSelectProject(prevProject.id)}
            className="text-xs font-semibold text-[#7A1838] hover:text-[#4A2635] flex items-center gap-1.5 transition-colors"
          >
            <span>←</span>
            <span className="hidden sm:inline">Projet précédent :</span>
            <span className="font-bold">{prevProject.title}</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#7A1838] text-[#FFF9F6] text-xs font-semibold uppercase tracking-wider hover:bg-[#4A2635] transition-all shadow-md"
          >
            Fermer la vue
          </button>

          <button
            onClick={() => onSelectProject(nextProject.id)}
            className="text-xs font-semibold text-[#7A1838] hover:text-[#4A2635] flex items-center gap-1.5 transition-colors"
          >
            <span className="hidden sm:inline">Projet suivant :</span>
            <span className="font-bold">{nextProject.title}</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
