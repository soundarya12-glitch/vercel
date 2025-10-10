import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const orderList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(orderList);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };
    fetchOrders();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-gradient-to-b from-purple-600 via-pink-500 to-red-500 text-white flex flex-col">
        <div className="text-2xl font-bold p-6 text-center">📚 BookStore</div>
        <nav className="flex flex-col gap-4 p-4 text-center">
          <Link to="/Dashboard" className="hover:bg-white/20 text-lg p-3 rounded-md">Home</Link>
          <Link to="/Orders" className="hover:bg-white/20 text-lg p-3 rounded-md">My Orders</Link>
          <Link to="/Cart" className="hover:bg-white/20 text-lg p-3 rounded-md">My Cart</Link>
          <Link to="/Wishlist" className="hover:bg-white/20 text-lg p-3 rounded-md">Wishlist</Link>
          <Link to="/Profile" className="hover:bg-white/20 text-lg p-3 rounded-md">Profile</Link>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-600 hover:bg-red-700 p-3 rounded-lg text-white"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto  p-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-black-700">My Orders</h2>

          {orders.length === 0 ? (
            <p className="text-center text-gray-600">No orders found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white border rounded-lg p-4 shadow-sm bg-white-50"
                >
                  <div className="flex justify-between items-center mb-2 text-gray-700">
                    <p><span className="font-semibold">Payment:</span> {order.paymentMethod}</p>
                    <p><span className="font-semibold">Status:</span> {order.paymentStatus}</p>
                  </div>

                  <p className="mb-1"><span className="font-semibold">Total:</span> ₹{order.total}</p>
                  <p className="text-sm text-gray-500 mb-3">
                    <span className="font-semibold">Date:</span>{" "}
                    {order.createdAt?.toDate?.().toLocaleString() || "N/A"}
                  </p>

                  <h4 className="mt-2 mb-2 font-semibold text-purple-700">Products:</h4>

                  <div className="flex flex-col gap-2">
                    {order.products.slice(0, 2).map((p, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 border rounded p-2 bg-white"
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium text-sm">{p.name}</p>
                          <p className="text-gray-600 text-xs">Qty: {p.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
