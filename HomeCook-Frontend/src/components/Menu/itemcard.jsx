import React, { useState } from "react";
import { useCart } from "../../context/CartContext";

const ItemCard = ({ name, image, price }) => {
  const [persons, setPersons] = useState(1);
  const { addToCart } = useCart();

  
  // Calculate delivery time as 5 hours from now

  const deliveryTime = new Date(Date.now() + 5 * 60 * 60 * 1000);
  const deliveryTimeStr = deliveryTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const handleAddToCart = () => {
    addToCart({ name, qty: persons, price });
    alert(`Added to cart!`);
  };

  return (
    <div className="menu-card">
      <div className="card-image-container">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <div className="price">
          <span>Price</span>
          <h4>${price}</h4>
        </div>
        <input
          type="number"
          value={persons}
          min={1}
          onChange={(e) => setPersons(Number(e.target.value))}
        />
        <button className="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <p className="delivery-info" style={{ marginTop: "8px", fontStyle: "italic" }}>
          Estimated delivery: {deliveryTimeStr}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
