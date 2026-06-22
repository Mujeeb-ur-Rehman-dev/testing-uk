import React, { useState } from "react";
import "./ImpactStats.css";

const ALL_STATS = [
  { icon: "/assets/icon-help.svg",        value: "100,000+", label: "People helped during the floods in Pakistan" },
  { icon: "/assets/icon-medicine.svg",    value: "500,000+", label: "Free tests and medicines provided" },
  { icon: "/assets/icon-water.svg",       value: "350,000+", label: "People given access to clean water" },
  { icon: "/assets/icon-scholarship.svg", value: "10,000+",  label: "Scholarships gifted to students" },
  { icon: "/assets/icon-ration.svg",      value: "50,000+",  label: "Ration bags delivered" },
  { icon: "/assets/icon-women.svg",       value: "600+",     label: "Women trained in income-generating skills" },
  { icon: "/assets/icon-orphan.svg",      value: "400",      label: "Orphans sponsored in Gaza" },
  { icon: "/assets/icon-help.svg",        value: "400,000+", label: "People helped in Gaza" },
];

const PER_PAGE = 4;

export default function ImpactStats() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(ALL_STATS.length / PER_PAGE);
  const visible = ALL_STATS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="impact">
      <div className="impact__stamp">

        {/* scalloped maroon stamp background image */}
        <img
          className="impact__stamp-bg"
          src="/assets/impact-bg.png"
          alt=""
          aria-hidden="true"
        />

        {/* overlay — 3 rows: header | grid | controls */}
        <div className="impact__content">

          {/* ROW 1: eyebrow + title grouped so they stay together at the top */}
          <div className="impact__header">
            <p className="impact__eyebrow">Our Work For Humanity</p>
            <h2 className="impact__title">THE IMPACT OF YOUR DONATIONS</h2>
          </div>

          {/* ROW 2: stat cards */}
          <div className="impact__grid">
            {visible.map((s, i) => (
              <div className="impact__item" key={i}>
                <img
                  className="impact__icon"
                  src={s.icon}
                  alt=""
                  width="156"
                  height="165"
                />
                <strong className="impact__value">{s.value}</strong>
                <p className="impact__label">{s.label}</p>
              </div>
            ))}
          </div>

          {/* ROW 3: prev / dots / next */}
          <div className="impact__controls">
            <button
              className="impact__arrow"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              aria-label="Previous"
              disabled={page === 0}
            >
              ←
            </button>

            <div className="impact__dots">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`impact__dot${i === page ? " impact__dot--active" : ""}`}
                  onClick={() => setPage(i)}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="impact__arrow"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              aria-label="Next"
              disabled={page === totalPages - 1}
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}