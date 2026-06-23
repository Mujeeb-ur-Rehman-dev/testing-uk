import React from "react";
import { FaHeart } from "react-icons/fa";
import "./WhyGiveZakat.css";

/**
 * WhyGiveZakat
 *
 * Props:
 *   image       {string}  – path/URL for the stamp photo (right column)
 *   imageAlt    {string}  – alt text for the photo
 *   onDonate    {func}    – optional click handler for the button
 */
export default function WhyGiveZakat({ image, imageAlt = "Zakat in action", onDonate }) {
  return (
    <section className="wzk">
      {/* decorative corner SVG flowers — right side */}
      <div className="wzk__deco wzk__deco--tr" aria-hidden="true">
        <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 10 C50 30 70 40 60 60 C50 80 20 70 30 50 C40 30 20 20 40 10Z" fill="#c8a870" opacity="0.85"/>
          <path d="M20 60 C10 80 30 100 40 80 C50 60 30 50 20 60Z" fill="#c8a870" opacity="0.7"/>
          <line x1="40" y1="80" x2="40" y2="115" stroke="#c8a870" strokeWidth="2" opacity="0.6"/>
        </svg>
      </div>
      <div className="wzk__deco wzk__deco--br" aria-hidden="true">
        <svg viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 60 Q30 20 60 35 Q80 45 70 60Z" fill="#c8a870" opacity="0.75"/>
          <path d="M30 55 Q20 30 45 25 Q65 20 55 50Z" fill="#c8a870" opacity="0.6"/>
          <circle cx="10" cy="62" r="4" fill="#c8a870" opacity="0.5"/>
          <circle cx="25" cy="58" r="3" fill="#c8a870" opacity="0.5"/>
        </svg>
      </div>

      <div className="wzk__inner">

        {/* ── LEFT: text content ── */}
        <div className="wzk__text">
          <h2 className="wzk__title">WHY GIVE ZAKAT?</h2>

          <p className="wzk__body">
            Zakat is an obligation, but it's also a gift Allah has placed in our
            wealth. The Qur'an speaks about charity that purifies and blesses
            what we have.
          </p>

          <p className="wzk__body">
            Your Zakat through MTJF is directed to people who qualify to receive
            it: families facing hunger, illness, and poverty, with nowhere to turn
            for help. Your Zakat can provide food to families with nothing to eat,
            medical help where it is not available, or clean water where it is
            scarce.
          </p>

          <p className="wzk__body">
            The Prophet ﷺ said: "Whoever pays the zakat on his wealth will have
            its evil removed from him." (Ibn Majah)
          </p>

          <p className="wzk__body">
            Give your Zakat today, and let it be relief for someone who has
            been suffering for too long.
          </p>

          <button className="wzk__btn" onClick={onDonate} type="button">
            <FaHeart className="wzk__btn-icon" />
            Donate Now
          </button>
        </div>

        {/* ── RIGHT: postage stamp photo ── */}
        <div className="wzk__stamp-wrap">
          <div className="wzk__stamp">
            {image ? (
              <img className="wzk__photo" src={image} alt={imageAlt} />
            ) : (
              /* placeholder when no image prop is provided */
              <div className="wzk__photo wzk__photo--placeholder" />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
