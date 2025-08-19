import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../live/axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch orders when component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // ✅ use GET (if backend follows REST convention)
        const { data } = await instance.post("/newOrder");

        console.log("Orders response:", data);
        setOrders(data.orders || []); // assumes API returns { orders: [...] }
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="orders-list">
          <h2>Your Orders</h2>
          <ul>
            {orders.map((order, idx) => (
              <li key={idx}>
                {order.productName} - {order.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Orders;
