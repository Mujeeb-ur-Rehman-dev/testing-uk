import React, { useState } from "react";
import "./VideoSection.css";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="video">
      {playing ? (
        <iframe
          className="video__iframe"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="How we are Fighting Hunger in Pakistan | MTJ Foundation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          className="video__poster"
          onClick={() => setPlaying(true)}
          aria-label="Play video"
        >
          <div className="video__caption">
            <strong>How we are Fighting Hunger in Pakistan</strong>
            <span>MTJ Foundation Canada</span>
          </div>
          <span className="video__play">▶</span>
        </button>
      )}
    </section>
  );
}
