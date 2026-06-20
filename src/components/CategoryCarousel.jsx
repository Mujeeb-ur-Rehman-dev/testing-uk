import React, { useState } from "react";
import "./CategoryCarousel.css";

const CATEGORIES = [
  { title: "Water Relief", image: "/assets/water-relief.webp" },
  { title: "Palestine Emergency Relief", image: "/assets/palestine-relief.webp" },
  { title: "Education", image: "/assets/education.webp" },
  { title: "Healthcare", image: "/assets/healthcare.webp" },
];

const VISIBLE = 3;

export default function CategoryCarousel() {
  const [start, setStart] = useState(0);
  const maxStart = CATEGORIES.length - VISIBLE;

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(maxStart, s + 1));
  const visible = CATEGORIES.slice(start, start + VISIBLE);

  return (
    <section className="categories">
      <h2>
        Ready to Make a Difference? <br /> Act Today
      </h2>
      <p>
        Provide food, clean water or emergency relief, where needed most.
        Your support brings care, relief, and dignity to those struggling
        every day.
      </p>

      <div className="categories__grid">
        {visible.map((c) => (
          <div className="categories__card" key={c.title}>
            <img src={c.image} alt={c.title} />
            <div className="categories__label">
              <span>{c.title}</span>
              <button aria-label={`View ${c.title}`}>→</button>
            </div>
          </div>
        ))}
      </div>

      <div className="categories__controls">
        <button onClick={prev} aria-label="Previous">
          ←
        </button>
        <div className="categories__dots">
          {CATEGORIES.slice(0, maxStart + 1).map((_, i) => (
            <span key={i} className={i === start ? "active" : ""} />
          ))}
        </div>
        <button onClick={next} aria-label="Next">
          →
        </button>
      </div>
    </section>
  );
}
