import React, { useState } from "react";
import "./ImpactStats.css";

const ALL_STATS = [
  { icon: "/assets/icon-help.svg", value: "100,000+", label: "People helped during the floods in Pakistan" },
  { icon: "/assets/icon-medicine.svg", value: "500,000+", label: "Free tests and medicines provided" },
  { icon: "/assets/icon-water.svg", value: "350,000+", label: "People given access to clean water" },
  { icon: "/assets/icon-scholarship.svg", value: "10,000+", label: "Scholarships gifted to students" },
  { icon: "/assets/icon-help.svg", value: "50,000+", label: "Ration bags delivered" },
  { icon: "/assets/icon-medicine.svg", value: "600+", label: "Women trained in income-generating skills" },
  { icon: "/assets/icon-water.svg", value: "400", label: "Orphans sponsored in Gaza" },
  { icon: "/assets/icon-scholarship.svg", value: "400,000+", label: "People helped in Gaza" },
];

const PER_PAGE = 4;

export default function ImpactStats() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(ALL_STATS.length / PER_PAGE);
  const visible = ALL_STATS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section className="impact">
      <div className="impact__panel">
        <span className="impact__eyebrow">Our Work For Humanity</span>
        <h2>The Impact of Your Donations</h2>

        <div className="impact__grid">
          {visible.map((s) => (
            <div className="impact__card" key={s.label}>
              <img src={s.icon} alt="" />
              <strong>{s.value}</strong>
              <p>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="impact__controls">
          <button onClick={prev} aria-label="Previous">
            ←
          </button>
          <div className="impact__dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <span key={i} className={i === page ? "active" : ""} />
            ))}
          </div>
          <button onClick={next} aria-label="Next">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
