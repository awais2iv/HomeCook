import React, { useEffect, useState } from 'react';

const OrdersPage = ({ refreshTrigger }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/orders');
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [refreshTrigger]); // Re-fetch orders whenever refreshTrigger changes

  return (
    <main style={{ padding: '2rem' }}>
      <h1>All Orders</h1>
      {orders.map((order, idx) => (
        <section key={idx} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
          <h2>Customer: {order.customerName}</h2>
          <p>Phone: {order.customerPhone}</p>
          <p>Address: {order.deliveryAddress}</p>
          <p>Delivery Time: {new Date(order.deliveryTime).toLocaleString()}</p>
          <h3>Items:</h3>
          <ul>
            {order.items.map((item, i) => (
              <li key={i}>
                {item.foodItemName} - {item.quantity} x ${item.price} = ${(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <strong>Total: ${order.totalPrice.toFixed(2)}</strong>
        </section>
      ))}
    </main>
  );
};

export default OrdersPage;
