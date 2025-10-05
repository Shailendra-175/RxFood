import React from "react";

export default function WhyUs() {
  return (
    <div className="whyus-container">
      <h2 className="section-title">Why Choose RxFood?</h2>

      <div className="profile-card">
        <img
          src="https://via.placeholder.com/200x200.png?text=Dr.+Saritha"
          alt="Dr. Saritha"
          className="doctor-photo"
        />
        <div className="doctor-details">
          <h3>Dr.ABC</h3>
          <p>
            <strong>Clinical Dietician | 15+ Years of Experience</strong>
          </p>
          <p>
            Dr.ABC is a highly experienced dietician specializing in lifestyle 
            disorders such as Diabetes, PCOS, Hypertension, Obesity, and 
            post-surgical recovery nutrition. She has worked with thousands of 
            patients and created <strong> personalized, sustainable diet plans </strong> 
            that bring long-term results.
          </p>
          <p>
            Her philosophy focuses on <em>balanced nutrition, practical solutions, 
            and continuous support</em> rather than short-term crash diets.
          </p>
        </div>
      </div>

      <h3 className="highlight-title">What Makes Us Different?</h3>
      <ul className="highlight-list">
        <li>Customized diet plans tailored to your health goals</li>
        <li>Science-backed nutrition strategies</li>
        <li>One-on-one guidance and monitoring</li>
        <li>Specialized expertise in complex medical conditions</li>
        <li>Focus on lifestyle transformation, not just diet</li>
      </ul>
    </div>
  );
}
