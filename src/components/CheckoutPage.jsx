import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function CheckoutPage() {
  const { cart, total } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to payment with form data
    navigate('/payment', { state: { cart, total, formData } });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      
      <div className="checkout-content">
        {/* Order Summary */}
        <div className="checkout-order-summary">
          <h3>Order Summary</h3>
          {cart.map(item => (
            <div key={item.id} className="checkout-item">
              <img src={`/RxFood/images/${item.image}`} alt={item.name} width="60" />
              <span>{item.name} x 1</span>
              <span>₹{item.price}</span>
            </div>
          ))}
          <div className="total-line">
            <strong>Total: ₹{total}</strong>
          </div>
        </div>

        {/* Shipping Form */}
        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Shipping Details</h3>
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            required
          />
          <input
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
          <button type="submit" className="proceed-checkout-btn">
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
}
