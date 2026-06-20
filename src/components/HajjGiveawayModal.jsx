import React, { useState } from "react";
import "./HajjGiveawayModal.css";

export default function HajjGiveawayModal() {
  const [open, setOpen] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to https://form.jotform.com/261025509463151
    setOpen(false);
  };

  return (
    <div className="modal-overlay" onClick={() => setOpen(false)}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setOpen(false)}>
          ×
        </button>
        <h2>
          Win a Free <span>Hajj Journey</span>
        </h2>
        <p>
          Sign up today for your chance to win this life-changing journey. By
          entering, you'll also stay connected with us and receive important
          updates and reminders throughout the year.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="modal-row">
            <input
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <button className="btn btn--primary" type="submit">
            Submit
          </button>
        </form>
        <small>Terms and conditions apply. Winner will be contacted directly.</small>
      </div>
    </div>
  );
}