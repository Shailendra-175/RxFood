import React, { useState, useEffect } from "react";

// Helper to generate a color based on user name
const stringToColor = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = `hsl(${hash % 360}, 60%, 50%)`;
  return color;
};

function PatientReviews() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    comment: "",
  });

  // Load reviews from localStorage once on mount
  useEffect(() => {
    try {
      const storedReviews = localStorage.getItem("patientReviews");
      if (storedReviews) setReviews(JSON.parse(storedReviews));
    } catch (err) {
      console.error("Failed to parse stored reviews:", err);
    }
  }, []);

  // Save reviews to localStorage whenever `reviews` changes
  useEffect(() => {
    try {
      localStorage.setItem("patientReviews", JSON.stringify(reviews));
    } catch (err) {
      console.error("Failed to save reviews:", err);
    }
  }, [reviews]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRating = (star) => {
    setFormData({ ...formData, rating: star });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.comment) return;

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

    setReviews([newReview, ...reviews]); // Latest review on top
    setFormData({ name: "", email: "", rating: 0, comment: "" });
  };

  return (
    <>
      {/* Form */}
      <div className="centered-container">
        <div className="patient-reviews">
          <h2>Write a Review</h2>
          <form onSubmit={handleSubmit} className="review-form">
            <input
              className="customer-name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="customer-email"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="customer-review"
              name="comment"
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
                  style={{
                    cursor: "pointer",
                    fontSize: "24px",
                    color: formData.rating >= star ? "#FFD700" : "#ccc",
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </div>

      {/* Reviews */}
      <div
        className="reviews-list-container"
        style={{ maxWidth: "800px", margin: "40px auto" }}
      >
        <h3 style={{ marginBottom: "20px", color: "#367E18" }}>All Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((r, index) => (
            <div
              key={index}
              className="review-item"
              style={{
                display: "flex",
                gap: "15px",
                background: "#fff",
                padding: "15px 20px",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                marginBottom: "15px",
                alignItems: "flex-start",
              }}
            >
              {/* Profile icon with initials */}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: stringToColor(r.name),
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "18px",
                  flexShrink: 0,
                }}
              >
                {r.name.charAt(0).toUpperCase()}
              </div>

              {/* Review content */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <strong>{r.name}</strong>
                  <span style={{ fontSize: "12px", color: "#666" }}>{r.date}</span>
                </div>

                {/* Display stars (not clickable) */}
                <div style={{ margin: "4px 0" }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      style={{
                        fontSize: "20px",
                        color: r.rating >= star ? "#FFD700" : "#ccc",
                        marginRight: "2px",
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p style={{ margin: "5px 0 0", color: "#333" }}>{r.comment}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default PatientReviews;





