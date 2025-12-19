import React from "react";
import packages from "../data/packages"; // adjust path if needed
import "../App.css"; // optional: for styling

export default function HealthPlans() {
  return (
    <div className="page-container">
      <h2 className="shop-title">Health Plans</h2>
      <p className="shop-subtitle">Choose a plan that suits your health goals:</p>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img
               src={`${import.meta.env.BASE_URL}packages/${pkg.image}`}
              alt={pkg.title}
              className="package-image"
            />
            <h3 className="package-title">{pkg.title}</h3>
            <ul className="package-includes">
              {pkg.includes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="package-bestfor"><strong>Best for:</strong> {pkg.bestFor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
