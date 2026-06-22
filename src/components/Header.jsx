import React, { useState } from "react";
import "./Header.css";

const NAV = [
  { label: "Religious Giving", items: ["Zakat", "Sadaqah", "Ration Program", "Automated Giving"] },
  { label: "Emergencies", items: ["Lebanon Emergency", "Palestine Relief", "Sri Lanka Floods"] },
  { label: "Support Campaigns", items: ["Apna Ghar", "Medical Care / Health", "Food Relief", "KASB", "Hot Meals"] },
  { label: "Who We Are", items: ["Blogs", "Reports", "About Us", "Our Team"] },
  { label: "Get Involved", items: ["Volunteer", "Events", "Careers", "Contact Us"] },
];

export default function Header() {
  const [openIdx, setOpenIdx] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo">
          <img src="/assets/logo.png" alt="MTJF" width="34" height="34" />
          <span>MTJF</span>
        </a>

        <nav className={`header__nav ${mobileOpen ? "header__nav--open" : ""}`}>
          <ul>
            {NAV.map((n, i) => (
              <li
                key={n.label}
                onMouseEnter={() => setOpenIdx(i)}
                onMouseLeave={() => setOpenIdx(null)}
              >
                <button type="button" className="header__nav-link">
                  {n.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
                {openIdx === i && (
                  <ul className="header__dropdown">
                    {n.items.map((it) => (
                      <li key={it}>
                        <a href="#">{it}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a href="#donate" className="header__cta">
          <span className="header__cta-heart">♥</span> Quick Donate
        </a>

        <button
          className="header__burger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
