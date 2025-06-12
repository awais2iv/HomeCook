import React, { useState } from "react";
import "./CartPage.css";
import { useCart } from "../../context/CartContext";
import OrdersPage from "../../components/orders/OrdersPage";

const CartPage = () => {
  const { cartItems, clearCart } = useCart();
  const [form, setForm] = useState({ name: '', phone: '', address: '' });
  const [refreshOrdersCounter, setRefreshOrdersCounter] = useState(0);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderPayload = {
      customerName: form.name,
      customerPhone: form.phone,
      items: cartItems.map((item) => ({
        foodItemName: item.name,
        price: item.price,
        quantity: item.qty,
      })),
      deliveryTime: new Date(Date.now() + 5 * 60 * 60 * 1000).toISOString(),
      deliveryAddress: form.address,
      totalPrice,
    };

    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      if (res.ok) {
        const result = await res.json();
        alert(`Order placed successfully! Order ID: ${result._id}`);
        clearCart();
        setForm({ name: '', phone: '', address: '' });  
        setRefreshOrdersCounter(prev => prev + 1);      //
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <main className="cart-container">
      <header className="cart-header">
        <h1>Your Cart</h1>
        <p>Review your items and provide delivery details to place the order.</p>
      </header>

      <section className="cart-content">
        <div className="cart-items">
          <div className="cart-grid">
            {cartItems.map((item, index) => (
              <article key={index} className="cart-item-card">
                <h3>{item.name}</h3>
                <p>Qty: {item.qty}</p>
                <p>{item.price} each</p>
                <strong>Total: ${(item.price * item.qty).toFixed(2)}</strong>
              </article>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
          </div>
        </div>

        <aside className="cart-form-wrapper">
          <h2>Delivery Details</h2>
          <form onSubmit={handleSubmit} className="cart-form">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <textarea
              placeholder="Full Delivery Address"
              rows={3}
              required
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            ></textarea>
            <button type="submit">Place Order</button>
          </form>
        </aside>
      </section>


      <OrdersPage refreshTrigger={refreshOrdersCounter} />
    </main>
  );
};

export default CartPage;
