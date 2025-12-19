import React, { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "../App.css";


export default function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderData } = location.state || {};
  const { clearCart } = useContext(CartContext); 
  useEffect(() => {
    clearCart();  // ✅ Empties cart on page load
  }, []);

  return (
    <div className="success-container">
      <div className="success-content">
        <h1>✅ Order Confirmed!</h1>
        <p>Thank you for your purchase.</p>
        <p><strong>Order Total: ₹{orderData?.total}</strong></p>
        <p>Delivery to: {orderData?.formData?.name}</p>
        <p>Order will be delivered soon.</p>
        <div className="success-actions">
          <button 
           onClick={() => navigate('/health-shop')} 
            className="continue-shopping-btn"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
