import { useLocation, useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, products, total } = location.state || {};

  if (!products || !formData) {
    return (
      <h2 className="p-6 text-center text-red-500">
        No checkout data found!
      </h2>
    );
  }

  if (!products || !formData) {
    return <h2>No checkout data found!</h2>;
  }
  const upiId = "soundarya2300@okaxis"; // Replace with your real UPI ID
  const name = "Book Store";
  const txnId = `TXN${Date.now()}`;
  const txnNote = "Book Purchase";
  const amount = Number(total || 0).toFixed(2);

 const amountInPaise = Math.round(total * 100); // Razorpay uses paise
  const handleCOD = async () => {
    try {
      await addDoc(collection(db, "orders"), {
        billing: formData,
        products,
        total,
        paymentMethod: "COD",
        paymentStatus: "success",
        createdAt: serverTimestamp(),
      });
      alert("Order placed successfully!");
      navigate("/thankyou");
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Failed to place order!");
    }
  };

 const handleUPIPayment = () => {
    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // TEST key
      amount: amountInPaise,
      currency: "INR",
      name: "Book Store",
      description: "Book Purchase",
      handler: function (response) {
        alert("Payment successful! ID: " + response.razorpay_payment_id);
        // You can store successful payment in Firebase here
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      notes: { address: formData.address },
      theme: { color: "#3399cc" },
      method: { upi: true, card: false, netbanking: false, wallet: false, emi: false },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
       <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Payment Options</h2>

      {/* Billing Info */}
      <h3 className="font-semibold mb-2">Billing Info</h3>
      <p>{formData.name}</p>
      <p>{formData.phone}</p>
      <p>{formData.email}</p>
      <p>
        {formData.address}, {formData.state}, {formData.country}
      </p>

      {/* Order Summary */}
      <h3 className="font-semibold mt-4 mb-2">Order Summary</h3>
      {products.map((p) => (
        <div
          key={p.id}
          className="flex justify-between items-center mb-2 border-b pb-2"
        >
          <img
            src={p.image}
            alt={p.name}
            className="w-16 h-16 object-cover rounded"
          />
          <span>
            {p.name} x {p.quantity}
          </span>
          <span>₹{(p.price * p.quantity).toFixed(2)}</span>
        </div>
      ))}

      <div className="flex justify-between font-bold mt-2 mb-4">
        <span>Total</span>
        <span>₹{amount}</span>
      </div>

      {/* Payment Options */}
      <h3 className="font-semibold mt-4 mb-2">Select Payment Method</h3>
      <div className="flex flex-col gap-2">
        {/* Cash on Delivery */}
         <button onClick={handleCOD} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
        >
          Cash on Delivery
        </button>

        {/* Google Pay */}
        <button
        onClick={handleUPIPayment}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Pay with Google Pay / UPI
      </button>
      </div>
    </div>
  
    

    </div>
  );
}
