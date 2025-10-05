import React, { useContext } from "react";
import { CartProvider, CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import products from "../data/products";

export default function HealthShop() {
   const { addToCart, cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="shop-container">
      {/* Cart Button Top Right */}
      <div className="cart-button" onClick={() => navigate("/cart")}>
        🛒 View Cart ({cart.length})
      </div>

       <div className="cart-title"> 
      <h2>Health Shop</h2>
      <p className="cart-subtitle">Explore healthy foods that support good nutrition and well-being:</p>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹ {product.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
