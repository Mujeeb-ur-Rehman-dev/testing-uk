import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__frame">
        <img
          className="hero__bg"
          src="/assets/hero-lebanon.png"
          alt="Lebanon Emergency relief worker"
        />
        <div className="hero__content">
          <h1>
            LEBANON
            <br />
            EMERGENCY
          </h1>
          <p>
            The crisis in Lebanon is growing every day. Over 1.1 million
            people have been forced from their homes, more than 390,000 of
            them children, crowded into shelters with no food, no hygiene,
            and no way to cook a meal.
          </p>
          <a href="#donate" className="hero__btn">
            ♥ Donate Now
          </a>
        </div>
      </div>
    </section>
  );
}
