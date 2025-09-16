import { useState } from 'react';

export default function TrackUs() {
  const [trackingId, setTrackingId] = useState('');
  const [status, setStatus] = useState(null);

  const handleTrack = () => {
    // Simulated tracking logic (replace with real API call)
    if (trackingId === '123456') {
      setStatus('Your order is out for delivery!');
    } else if (trackingId === '654321') {
      setStatus('Your order has been delivered.');
    } else {
      setStatus('Tracking ID not found. Please check and try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-1 bg-gradient-to-br from-indigo-600 to-purple-200" >
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full bottom-20">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Track Your Order</h2>

        <input
          type="text"
          placeholder="Enter Tracking ID"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={handleTrack}
          className="w-full mt-4 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Track Order
        </button>

        {status && (
          <div className="mt-6 p-4 text-center border rounded bg-gray-50 text-gray-700">
            {status}
          </div>
        )}
      </div>
    </div>
  );
}
