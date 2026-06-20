import React, { useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    optIn: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to subscription endpoint
  };

  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <div className="newsletter__intro">
          <img src="/assets/icon-envelope.png" alt="" />
          <h2>
            ADD IMPACT
            <br />
            TO YOUR INBOX
          </h2>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__row">
            <div className="newsletter__field">
              <label>First Name</label>
              <input
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="newsletter__field">
              <label>Last Name</label>
              <input
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="newsletter__field">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <label className="newsletter__checkbox">
            <input
              type="checkbox"
              name="optIn"
              checked={form.optIn}
              onChange={handleChange}
            />
            Yes, keep me informed about MTJF programs and upcoming campaigns
          </label>

          <button type="submit" className="newsletter__submit">
            Sign Up Now
          </button>
        </form>
      </div>
    </section>
  );
}
