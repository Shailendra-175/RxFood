import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, total, formData } = location.state || {};
  
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      navigate('/order-success', { 
        state: { orderData: { cart, total, formData, paymentMethod } } 
      });
    }, 2000);
  };

  if (!cart) {
    return <div>No order found. Go back to cart.</div>;
  }

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      
      <div className="payment-content">
        <div className="payment-summary">
          <h3>Order Summary</h3>
          <p>Total: <strong>₹{total}</strong></p>
          <p>Delivery To: {formData?.name}</p>
        </div>

        <div className="payment-methods">
          <h3>Select Payment Method</h3>
          
          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>
          
          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit/Debit Card
          </label>
          
          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI
          </label>
        </div>

        <button 
          onClick={handlePayment}
          className="confirm-payment-btn"
          disabled={!paymentMethod}
        >
          Confirm Payment ₹{total}
        </button>
      </div>
    </div>
  );
}
