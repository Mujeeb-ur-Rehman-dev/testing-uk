import React from "react";
import "./DonationCategories.css";

const CATEGORIES = [
  {
    title: "Healthcare",
    href: "/medical-healthcare",
    image: "https://mtjfoundation.ca/wp-content/uploads/2026/01/Healthcare-1.webp",
  },
  {
    title: "Water Relief",
    href: "/clean-water",
    image: "https://mtjfoundation.ca/wp-content/uploads/2026/01/Water-Relief-1.webp",
  },
  {
    title: "Palestine Emergency Relief",
    href: "/emergency-relief-palestine",
    image:
      "https://mtjfoundation.ca/wp-content/uploads/2026/01/Palestine-Emergency-Relief-1.webp",
  },
  {
    title: "Education",
    href: "/education",
    image: "https://mtjfoundation.ca/wp-content/uploads/2026/01/Education-1.webp",
  },
];

export default function DonationCategories() {
  return (
    <section className="donation-categories">
      <h2>
        Ready to Make a Difference? <span>Act Today</span>
      </h2>
      <p className="subtext">
        Provide food, clean water or emergency relief, where needed most.
        Your support brings care, relief, and dignity to those struggling
        every day.
      </p>
      <div className="category-grid">
        {CATEGORIES.map((c) => (
          <a className="category-card" key={c.title} href={c.href}>
            <div
              className="category-image"
              style={{ backgroundImage: `url(${c.image})` }}
            />
            <h3>{c.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}