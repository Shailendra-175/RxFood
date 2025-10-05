import React, { useState, useEffect } from "react";
import "../App.css";

// Helper to generate a color based on user name
const stringToColor = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return `hsl(${hash % 360}, 60%, 50%)`;
};

function PatientReviews() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    comment: "",
  });

  useEffect(() => {
    const storedReviews = localStorage.getItem("patientReviews");
    if (storedReviews) setReviews(JSON.parse(storedReviews));
  }, []);

  useEffect(() => {
    localStorage.setItem("patientReviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRating = (star) => setFormData({ ...formData, rating: star });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.comment.trim() || formData.rating === 0)
      return;

    const newReview = {
      ...formData,
      date: new Date().toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: "", email: "", rating: 0, comment: "" });
  };

  return (
    <div className="reviews-page">
      {/* Form */}
      <div className="review-form-container">
        <h2>Share Your Experience</h2>
        <p>We value your feedback! Leave a review below.</p>
        <form onSubmit={handleSubmit} className="review-form">
          <input
            type="text"
            className="review-name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="review-email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="comment"
             className="review-textarea"
            placeholder="Write your review..."
            value={formData.comment}
            onChange={handleChange}
            required
          ></textarea>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRating(star)}
                className={formData.rating >= star ? "star active" : "star"}
              >
                ★
              </span>
            ))}
          </div>
          <button type="submit" className="submit-btn">Submit Review</button>
        </form>
      </div>

      {/* Reviews */}
      <div className="reviews-list">
        <h3>All Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to write!</p>
        ) : (
          reviews.map((r, idx) => (
            <div key={idx} className="review-card">
              <div className="avatar" style={{ background: stringToColor(r.name) }}>
                {r.name.charAt(0).toUpperCase()}
              </div>
              <div className="review-content">
                <div className="review-header">
                  <strong>{r.name}</strong>
                  <span className="review-date">{r.date}</span>
                </div>
                <div className="review-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={r.rating >= star ? "star active" : "star"}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="review-text">{r.comment}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PatientReviews;
