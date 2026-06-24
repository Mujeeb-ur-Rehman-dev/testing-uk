import React, { useState, useMemo } from "react";
import "./ZakatCalculator.css";

/* ── Nisab rates (CAD) ── */
const NISAB = {
  gold: {
    weight: "87.48g",
    pricePerG: 228.42,
    get nisab() { return this.weight.replace("g", "") * this.pricePerG; },
    label: "Gold (87.48g)",
    priceLabel: "Price/g: $228.42",
    nisabLabel: "Nisab: $19,982.18",
  },
  silver: {
    weight: "612.36g",
    pricePerG: 3.98,
    get nisab() { return parseFloat(this.weight) * this.pricePerG; },
    label: "Silver (612.36g)",
    priceLabel: "Price/g: $3.98",
    nisabLabel: "Nisab: $2,437.19",
  },
};

const ASSET_FIELDS = [
  { key: "personal",        label: "Personal",          col: "left" },
  { key: "business",        label: "Business",          col: "right" },
  { key: "shareAssets",     label: "Share Assets",      col: "left" },
  { key: "rrspAssets",      label: "RRSP/RESP Assets",  col: "right" },
  { key: "debtsOwed",       label: "Debts Owed To You", col: "left" },
  { key: "otherAssets",     label: "Other Assets",      col: "right" },
  { key: "silver",          label: "Silver",            col: "left" },
  { key: "gold",            label: "Gold",              col: "right", accent: true },
  { key: "property",        label: "Property",          col: "left" },
  { key: "cashInvestments", label: "Cash Investments",  col: "right" },
];

const LIABILITY_FIELDS = [
  { key: "liabPersonal", label: "Personal",  col: "left" },
  { key: "liabBusiness", label: "Business",  col: "right" },
];

const fmt = (n) =>
  "$" +
  n.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function ZakatCalculator({ onPay }) {
  const initValues = Object.fromEntries(
    [...ASSET_FIELDS, ...LIABILITY_FIELDS].map((f) => [f.key, ""])
  );
  const [values, setValues] = useState(initValues);
  const [nisabType, setNisabType] = useState("gold");

  const handleChange = (key) => (e) => {
    const val = e.target.value;
    if (val === "" || /^\d*\.?\d*$/.test(val)) {
      setValues((v) => ({ ...v, [key]: val }));
    }
  };

  const num = (key) => parseFloat(values[key]) || 0;

  const { totalAssets, totalLiabilities, totalZakatable, zakatDue } =
    useMemo(() => {
      const totalAssets = ASSET_FIELDS.reduce((s, f) => s + num(f.key), 0);
      const totalLiabilities = LIABILITY_FIELDS.reduce((s, f) => s + num(f.key), 0);
      const net = totalAssets - totalLiabilities;
      const nisabThreshold =
        nisabType === "gold" ? 19982.18 : 2437.19;
      const totalZakatable = net >= nisabThreshold ? net : 0;
      const zakatDue = totalZakatable * 0.025;
      return { totalAssets, totalLiabilities, totalZakatable, zakatDue };
    }, [values, nisabType]);

  /* render a pair row (left + right input) */
  const renderPair = (leftField, rightField) => (
    <div className="zc__field-row" key={leftField?.key}>
      {[leftField, rightField].map((f) =>
        f ? (
          <div className="zc__field" key={f.key}>
            <label
              className={`zc__label ${f.accent ? "zc__label--accent" : ""}`}
              htmlFor={f.key}
            >
              {f.label}
            </label>
            <input
              id={f.key}
              className="zc__input"
              type="text"
              inputMode="decimal"
              placeholder=""
              value={values[f.key]}
              onChange={handleChange(f.key)}
            />
          </div>
        ) : (
          <div className="zc__field" key="empty" />
        )
      )}
    </div>
  );

  /* group ASSET_FIELDS into pairs of 2 */
  const assetPairs = [];
  for (let i = 0; i < ASSET_FIELDS.length; i += 2)
    assetPairs.push([ASSET_FIELDS[i], ASSET_FIELDS[i + 1]]);

  const liabPairs = [];
  for (let i = 0; i < LIABILITY_FIELDS.length; i += 2)
    liabPairs.push([LIABILITY_FIELDS[i], LIABILITY_FIELDS[i + 1]]);

  return (
    <section className="zc">
      {/* ── Page heading ── */}
      <div className="zc__header">
        <h2 className="zc__page-title">ZAKAT CALCULATOR</h2>
        <p className="zc__page-desc">
          Not sure how much Zakat you owe? Our Zakat calculator makes it simple.
          Every Muslim who meets the nisab (minimum threshold of wealth) is
          required to give 2.5% of their savings in Zakat each year. To
          calculate the exact amount, enter your details, see the amount, and
          give with confidence, knowing your Zakat will support families eligible
          to receive it.
        </p>
      </div>

      {/* ── Two-panel card ── */}
      <div className="zc__card">

        {/* ══ LEFT: form ══ */}
        <div className="zc__left">

          {/* Assets */}
          <h3 className="zc__section-title">Assets</h3>
          {assetPairs.map(([l, r]) => renderPair(l, r))}

          {/* Liabilities */}
          <h3 className="zc__section-title zc__section-title--liab">
            Liabilities
          </h3>
          {liabPairs.map(([l, r]) => renderPair(l, r))}
        </div>

        {/* ══ RIGHT: summary ══ */}
        <div className="zc__right">

          {/* Nisab info stamp card */}
          <div className="zc__nisab-card">
            <div className="zc__nisab-grid">
              <div>
                <p className="zc__nisab-type">Gold (87.48g)</p>
                <p className="zc__nisab-detail">Price/g: $228.42</p>
                <p className="zc__nisab-detail">Nisab: $19,982.18</p>
              </div>
              <div>
                <p className="zc__nisab-type">Silver (612.36g)</p>
                <p className="zc__nisab-detail">Price/g: $3.98</p>
                <p className="zc__nisab-detail">Nisab: $2,437.19</p>
              </div>
            </div>
            <p className="zc__nisab-note">
              All amounts are in Canadian dollars.
            </p>
          </div>

          {/* Summary rows */}
          <h3 className="zc__summary-title">Zakat Summary</h3>

          <div className="zc__summary-rows">
            <div className="zc__summary-row">
              <span>Total Assets</span>
              <span>{fmt(totalAssets)}</span>
            </div>
            <div className="zc__summary-row">
              <span>Total Liabilities</span>
              <span>{fmt(totalLiabilities)}</span>
            </div>
            <div className="zc__summary-row">
              <span>Select your Nisab</span>
              <select
                className="zc__nisab-select"
                value={nisabType}
                onChange={(e) => setNisabType(e.target.value)}
              >
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
              </select>
            </div>
            <div className="zc__summary-row">
              <span>Total Zakatable</span>
              <span>{fmt(totalZakatable)}</span>
            </div>
          </div>

          <div className="zc__divider" />

          <div className="zc__zakat-due">
            <span>Zakat Due</span>
            <span className="zc__zakat-due-val">{fmt(zakatDue)}</span>
          </div>

          <button
            className="zc__pay-btn"
            type="button"
            onClick={onPay}
          >
            Pay Your Zakat
          </button>
        </div>
      </div>
    </section>
  );
}
