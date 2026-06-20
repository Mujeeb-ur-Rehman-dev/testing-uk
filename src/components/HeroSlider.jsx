import React, { useState } from "react";
import "./HeroSlider.css";

const SLIDES = [
  {
    eyebrow: "LEBANON EMERGENCY",
    title: "LEBANON EMERGENCY",
    text: "The crisis in Lebanon is growing every day. Over 1.1 million people have been forced from their homes, more than 390,000 of them children, crowded into shelters with no food, no hygiene, and no way to cook a meal.",
    image:
      "https://mtjfoundation.ca/wp-content/uploads/2026/06/Lebanon-Emergency-Banner_Mobile-02-1024x730.png",
    primaryCta: { text: "Donate Now", href: "/?form=FUNEBFWDGUD" },
    secondaryCta: { text: "Learn More", href: "/human-development_osp" },
  },
  {
    eyebrow: "Qurbani 2026",
    title: "Qurbani 2026: Give. Feed. Make an Impact.",
    text: "This Dhul Hijjah, your Qurbani delivers fresh meat to families in Pakistan who rarely get to eat it. Make your sacrifice count—bringing relief, dignity, and joy to those who need it most.",
    image:
      "https://mtjfoundation.ca/wp-content/uploads/2026/04/MTJ-Qurbani-2026-03-scaled.png",
    primaryCta: { text: "Donate Now", href: "/appeal/qurbani-2026/#qurbani-sec" },
    secondaryCta: { text: "Learn More", href: "/appeal/qurbani-2026/#qurbani-info" },
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const slide = SLIDES[active];

  return (
    <section className="hero-slider">
      <div className="hero-slide">
        <div className="hero-text">
          <span className="hero-eyebrow">{slide.eyebrow}</span>
          <h2>{slide.title}</h2>
          <p>{slide.text}</p>
          <div className="hero-actions">
            <a className="btn btn--primary" href={slide.primaryCta.href}>
              {slide.primaryCta.text}
            </a>
            <a className="btn btn--outline" href={slide.secondaryCta.href}>
              {slide.secondaryCta.text}
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={slide.image} alt={slide.title} />
        </div>
      </div>

      <div className="hero-dots">
        {SLIDES.map((s, i) => (
          <button
            key={s.title}
            className={`dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}