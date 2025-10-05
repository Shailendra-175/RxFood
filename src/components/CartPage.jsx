import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "../App.css";

export default function CartPage() {
  const { cart, removeFromCart, total } = useContext(CartContext);

  return (
    <div className="cart-page-container">
      <h2 className="cart-title">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
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
                          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}
