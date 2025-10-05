import React from "react";
import "../App.css"; // We'll add some CSS here

export default function WeightLossPrograms() {
  return (
    <div className="weight-loss-container">
      <h2 className="section-title">Weight Loss Programs</h2>
      <p className="section-subtitle">
        Healthy, Sustainable, and Tailored Just for You
      </p>

      <div className="program-details">
        <h3>What You’ll Get:</h3>
        <ul className="program-list">
          <li>
            <strong>Custom Calorie-Controlled Diets:</strong> Personalized meal
            plans based on your body, lifestyle, and goals. Steady, healthy
            weight loss without starving.
          </li>
          <li>
            <strong>Boost Your Metabolism:</strong> Strategically designed foods
            to rev up your metabolism. Burn calories efficiently and lose weight
            naturally.
          </li>
          <li>
            <strong>Superfoods & Fiber-Rich Meals:</strong> Nutrient-packed
            meals to nourish your body while slimming down. Supports digestion
            and overall gut health.
          </li>
          <li>
            <strong>Lifestyle & Fitness Guidance:</strong> Tips for exercise,
            hydration, quality sleep, and stress management to support your
            weight loss journey.
          </li>
          <li>
            <strong>Ongoing Support & Motivation:</strong> Weekly check-ins to
            track progress, tips, recipes, and encouragement to keep you on
            track.
          </li>
        </ul>
      </div>

      <div className="program-benefits">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>No starvation diets</li>
          <li>Balanced nutrition for long-term health</li>
          <li>Individualized plans that actually work</li>
          <li>Achieve your weight goals safely and effectively</li>
        </ul>
      </div>
    </div>
  );
}
