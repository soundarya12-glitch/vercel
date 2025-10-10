
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const navigate = useNavigate();

  // Billing form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    altPhone: "",
    email: "",
    address: "",
    state: "",
    country: "",
  });

  // Products state with quantity
  const [products, setProducts] = useState([
    { id: 1, name: "The disclipine", price: 299, quantity: 1, image: "dis.jpg" },
  ]);

  const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const taxRate = 0.18;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission → navigate to Payment page
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment", { state: { formData, products, total } });
  };

  // Increment quantity
  const incrementQty = (id) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    ));
  };

  // Decrement quantity
  const decrementQty = (id) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, quantity: p.quantity > 1 ? p.quantity - 1 : 1 } : p
    ));
  };

  return (
    <div className="max-w-6xl bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto p-6 flex flex-col md:flex-row gap-6">
      
      {/* Left: Billing Form */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 bg-white rounded-lg shadow-md p-6 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold mb-4">Billing & Delivery Details</h2>

        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="border p-2 rounded" required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border p-2 rounded" required />
        <input type="tel" name="altPhone" placeholder="Alternative Number" value={formData.altPhone} onChange={handleChange} className="border p-2 rounded" />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="border p-2 rounded" required />

        <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 mt-4">
          Proceed to Payment
        </button>
      </form>

      {/* Right: Order Summary */}
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-4 border-b pb-2">
            <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex flex-col flex-1">
              <span className="font-semibold">{product.name}</span>
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={() => decrementQty(product.id)}
                  className="bg-red-500 text-white w-8 h-8 rounded hover:bg-red-600"
                  type="button"
                >–</button>
                <span className="font-bold">{product.quantity}</span>
                <button
                  onClick={() => incrementQty(product.id)}
                  className="bg-green-500 text-white w-8 h-8 rounded hover:bg-green-600"
                  type="button"
                >+</button>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (18%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
