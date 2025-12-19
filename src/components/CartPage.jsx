import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function CartPage() {
  const context = useContext(CartContext);

  // Safety check if context is missing
  if (!context) {
    return <div className="cart-page-container">Error: Cart context not available. Check CartProvider setup.</div>;
  }

  const { cart = [], removeFromCart, total = 0 } = context;
  const navigate = useNavigate();

  return (
    <div className="cart-page-container">
      <h2 className="cart-title">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={item.id} className="cart-item">
                <img
                  src={`/RxFood/images/${item.image}`}

                  alt={item.name}
                  className="cart-item-image"
                  onError={(e) => console.error('Image load failed:', `/RxFood/images/${item.image}`)}
                />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">₹ {item.price}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Total: <strong>₹ {total}</strong></p>
          </div>

          <div className="cart-buttons">
            <button
              className="proceed-buy-btn"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Buy
            </button>
            <button className="checkout-btn"
              onClick={() => navigate('/payment')}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )};
    </div>
  );
}
