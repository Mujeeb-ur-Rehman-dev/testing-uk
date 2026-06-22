import React from "react";
import "./Footer.css";

const COLUMNS = [
  { title: "Our Appeals", links: ["Home", "Zakat", "Sadaqah"] },
  { title: "What We Do", links: ["Water Relief", "Food Support", "Education", "Healthcare"] },
  {
    title: "Useful Links",
    links: ["About Us", "Contact Us", "Volunteer", "Events", "Our Team", "Privacy Policy"],
  },
];

const SOCIAL = ["Facebook", "Instagram", "LinkedIn", "YouTube", "Twitter"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img src="/assets/footer-logo.png" alt="MTJF" width="160" height="56" />
        </div>

        {COLUMNS.map((col) => (
          <div className="footer__col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <p>
          Copyright © {new Date().getFullYear()} MTJ Foundation is a
          registered charity with the Canada Revenue Agency. CRA no.
          780700423 RR 0001. All rights reserved. | Built with ♥ by Process
          Plus
        </p>
        <div className="footer__social">
          {SOCIAL.map((s) => (
            <a key={s} href="#" aria-label={s}>
              {s[0]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
