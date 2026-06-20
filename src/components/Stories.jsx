import React, { useState } from "react";
import "./Stories.css";

const POSTS = [
  {
    title: "First 10 Days of Dhul Hijjah and Their Importance",
    href: "/10-days-of-dhul-hijjah",
    image: "https://mtjfoundation.ca/wp-content/uploads/2025/06/0011-1-300x169.png",
    author: "Molana Tariq Jamil",
    date: "June 05, 2025",
    category: "Blogs",
  },
  {
    title: "Significance of Eid Al Adha – A Complete Guide",
    href: "/significance-of-eid-al-adha",
    image: "https://mtjfoundation.ca/wp-content/uploads/2025/06/0011-300x169.png",
    author: "Molana Tariq Jamil",
    date: "June 05, 2025",
    category: "Blogs",
  },
];

const FILTERS = ["All", "Blogs"];

export default function Stories() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? POSTS : POSTS.filter((p) => p.category === filter);

  return (
    <section className="stories">
      <h2>OUR STORIES</h2>
      <p className="subtext">
        Discover what your support makes possible: children learning again,
        families finding relief, and communities in crisis rebuilding with
        care. Stay updated about our work.
      </p>

      <div className="story-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="stories-grid">
        {visible.map((p) => (
          <article className="story-card" key={p.title}>
            <a href={p.href}>
              <img src={p.image} alt={p.title} className="story-image" />
            </a>
            <h3>
              <a href={p.href}>{p.title}</a>
            </h3>
            <div className="story-meta">
              <span>{p.author}</span> • <span>{p.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}