import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./ZakatImpact.css";

const DEFAULT_CARDS = [
  {
    title: "Clean Water",
    amount: "$450",
    description:
      "Help bring clean, safe water to families who don't have reliable access. Your Sadaqah supports water solutions that protect health and reduce illness.",
    donateLink: "#donate",
  },
  {
    title: "Medical Support (AAS)",
    amount: "$75",
    description:
      "Support vital medical tests and care through the AAS diagnostic program. Your Zakat helps patients get early diagnosis and treatment at the right time.",
    donateLink: "#donate",
  },
  {
    title: "Food Relief",
    amount: "$50",
    description:
      "Provide a month's worth of food to a family facing hunger. Your Zakat helps put meals on the table for those who are struggling to get by.",
    donateLink: "#donate",
  },
  {
    title: "Education",
    amount: "$100",
    description:
      "Give a child the gift of education. Your Zakat funds school supplies, tuition, and scholarships for children who have no other way to learn.",
    donateLink: "#donate",
  },
  {
    title: "Emergency Relief",
    amount: "$200",
    description:
      "Deliver urgent relief to families hit by disaster or conflict. Your Zakat provides food, shelter kits, and essentials to those in immediate crisis.",
    donateLink: "#donate",
  },
];

const VISIBLE = 3;

/**
 * ZakatImpact
 *
 * Props:
 *   title  {string}   – section heading (optional override)
 *   cards  {Array}    – array of { title, amount, description, donateLink }
 */
export default function ZakatImpact({
  title = "CHOOSE WHERE YOUR ZAKAT MAKES AN IMPACT",
  cards = DEFAULT_CARDS,
}) {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(cards.length / VISIBLE);
  const visible = cards.slice(page * VISIBLE, page * VISIBLE + VISIBLE);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section className="zi">
      {/* ── Section heading ── */}
      <h2 className="zi__title">{title}</h2>

      {/* ── Card grid ── */}
      <div className="zi__grid">
        {visible.map((card, i) => (
          <div className="zi__card" key={card.title + i}>
            {/* card inner keeps content away from scalloped edges */}
            <div className="zi__card-inner">
              <h3 className="zi__card-name">{card.title}</h3>
              <p className="zi__card-amount">{card.amount}</p>
              <p className="zi__card-desc">{card.description}</p>
              <a
                className="zi__card-btn"
                href={card.donateLink || "#donate"}
                aria-label={`Donate to ${card.title}`}
              >
                <FaHeart className="zi__card-btn-icon" />
                Donate Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <div className="zi__controls">
          <button
            className="zi__arrow"
            onClick={prev}
            disabled={page === 0}
            aria-label="Previous"
          >
            ←
          </button>

          <div className="zi__dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`zi__dot ${i === page ? "zi__dot--active" : ""}`}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="zi__arrow"
            onClick={next}
            disabled={page === totalPages - 1}
            aria-label="Next"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}
