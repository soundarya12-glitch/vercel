import React from "react";
import { useNavigate } from "react-router-dom";

export default function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Thank You!
        </h1>
        <p className="text-gray-700 mb-6">
          Your order has been placed successfully. We appreciate your purchase!
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
