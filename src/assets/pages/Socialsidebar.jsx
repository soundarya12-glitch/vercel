import React, { useState } from "react";
import { FaQuestion, FaFacebookF, FaWhatsapp, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function HelpButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Global CSS for blink */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .animate-blink {
            animation: blink 5s infinite;
          }
        `}
      </style>

      {/* Sticky Social Icons */}
      <div className="fixed top-1/3 left-0 flex flex-col space-y-4 z-20">
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
           className="bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full border-2 border-white hover:bg-green-600 animate-blink transition">
          <FaWhatsapp size={24} />
        </a>

        <a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noopener noreferrer"
           className="bg-red-600 text-white w-14 h-14 flex items-center justify-center rounded-full border-2 border-white hover:bg-red-700 animate-blink transition">
          <FaYoutube size={24} />
        </a>

        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer"
           className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-full border-2 border-white hover:bg-blue-700 animate-blink transition">
          <FaFacebookF size={24} />
        </a>

        <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer"
           className="bg-pink-600 text-white w-14 h-14 flex items-center justify-center rounded-full border-2 border-white hover:bg-pink-700 animate-blink transition">
          <FaInstagram size={24} />
        </a>

      
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
           className="bg-blue-800 text-white w-14 h-14 flex items-center justify-center rounded-full border-2 border-white hover:bg-blue-900 animate-blink transition">
          <FaLinkedin size={24} />
        </a>
          <button
          onClick={() => setOpen(!open)}
           className=" bg-yellow-500 text-white  w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-600 animate-blink transition z-50"
       
          title="Need Help?"
        >
          <FaQuestion size={24} />
        </button>
</div>
        {/* Floating Help Button */}
      

      {/* Help Modal/Popup */}
      {open && (
        <div className="fixed bottom-1 right-4 w-64 bg-white border shadow-lg rounded-lg p-4 z-90">
          <h3 className="font-bold text-lg mb-2">Need Help?</h3>
          <p className="text-sm text-gray-700 mb-4">
            Contact our support team via WhatsApp or Email.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 text-center animate-blink transition"
            >
              WhatsApp
            </a>
            <a
              href="mailto:support@example.com"
              className="bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-900 text-center"
            >
              Email
            </a>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="mt-3 w-full text-blue-600 hover:underline text-sm"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
