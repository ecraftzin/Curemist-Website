import React from "react";
import "./WhySafe.css";

const cards = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12l3 3 5-5" />
      </svg>
    ),
    title: "Biodegradable Polymer Technology",
    desc: "CureMist uses a German-engineered bio-safe polymer film that protects wounds and then breaks down naturally — leaving zero synthetic residue on your skin or in the environment.",
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4" />
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
      </svg>
    ),
    title: "Clinically Tested & Proven",
    desc: "Completed an independent human skin-irritation clinical trial. Results confirm it is non-irritating, non-sensitizing, and safe for adults, children, and sensitive skin types.",
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
    title: "Zero Pesticides — Guaranteed",
    desc: "No pesticides are used at any stage — from raw ingredient sourcing and processing to final formulation and packaging. Lab-verified in every production batch.",
  },
  {
    num: "04",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "No Heavy Metals — Lab Verified",
    desc: "Independently tested and certified free of lead, mercury, arsenic, cadmium, and all regulated heavy metals — meeting international safety thresholds in every batch.",
  },
];

const WhySafe: React.FC = () => {
  return (
    <section className="ws-section">
      <div className="ws-deco-line" />

      <div className="ws-label">
        <span>Quality Assurance</span>
      </div>

      <h2 className="ws-title">
        Why CureMist is<br />
        <em>100% Safe</em>
      </h2>

      <p className="ws-sub">
        Every promise is backed by independent lab reports and clinical studies —
        publicly available for you to verify.
      </p>

      <div className="ws-grid">
        {cards.map((card) => (
          <div className="ws-card" key={card.num}>
            <span className="ws-card-num">{card.num}</span>
            <div className="ws-icon-wrap">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <div className="ws-card-accent" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySafe;
