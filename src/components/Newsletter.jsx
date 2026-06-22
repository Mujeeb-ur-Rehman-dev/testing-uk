import React, { useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    optIn: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up subscription endpoint
  };

  return (
    <section className="nl">
      <div className="nl__inner">

        {/* ── LEFT: stamp icon + title ── */}
        <div className="nl__left">
          <img
            className="nl__icon"
            src="/assets/icon-envelope.png"
            alt="Newsletter icon"
            width="130"
            height="130"
          />
          <h2 className="nl__title">
            ADD IMPACT<br />TO YOUR INBOX
          </h2>
        </div>

        {/* ── RIGHT: scalloped stamp form card ── */}
        <div className="nl__card">
          <form onSubmit={handleSubmit}>

            <div className="nl__row">
              <div className="nl__field">
                <label className="nl__label">First Name</label>
                <input
                  className="nl__input"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="nl__field">
                <label className="nl__label">Last Name</label>
                <input
                  className="nl__input"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="nl__field">
              <label className="nl__label">Email Address</label>
              <input
                className="nl__input nl__input--full"
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <label className="nl__checkbox">
              <input
                type="checkbox"
                name="optIn"
                checked={form.optIn}
                onChange={handleChange}
              />
              <span>Yes, keep me informed about MTJF programs and upcoming campaigns</span>
            </label>

            <button className="nl__submit" type="submit">
              Sign Up Now
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
