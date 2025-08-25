import React, { useState } from "react";
import { auth } from "../../firebase"; 
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier
} from "firebase/auth";
import { useNavigate } from "react-router-dom"; 
import { X } from "lucide-react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // ----------------- Email Login/Register -----------------
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("✅ Logged in successfully!");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          setMessage("✅ Account created & logged in!");
        } catch (signupError) {
          setMessage("⚠️ " + signupError.message);
        }
      } else {
        setMessage("⚠️ " + err.message);
      }
    }
  };

  // ----------------- Phone Auth -----------------
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible", // you can also use "normal" to show widget
        callback: () => console.log("reCAPTCHA verified"),
      });
    }
  };

  const sendOtp = async () => {
    if (!phone) return setMessage("⚠️ Enter phone number with country code");
    setupRecaptcha();
    try {
      const confirmation = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      setMessage("📩 OTP sent to " + phone);
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  const verifyOtp = async () => {
    if (!confirmationResult) return;
    try {
      await confirmationResult.confirm(otp);
      setMessage("🎉 Phone verified & logged in!");
    } catch (err) {
      setMessage("❌ Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-200">
      <div className="bg-white p-6 rounded shadow-md w-96 relative"> 
        
        {/* ❌ Close button */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-center text-xl font-bold mb-4">Registration</h2>

        {/* Email + Password Login */}
        <form onSubmit={handleLogin} className="space-y-4 flex flex-col gap-4 mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />

      
        </form>

        {/* Phone Number Login */}
        <div className="space-y-3">
          <input
            type="tel"
            placeholder="+91 9876543210"
            className="w-full p-2 border rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button
            onClick={sendOtp}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Send OTP
          </button>
 <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Login / Register (Email)
          </button>
          {confirmationResult && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full p-2 border rounded"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                onClick={verifyOtp}
                className="w-full bg-green-500 text-white py-2 rounded"
              >
                Verify OTP
              </button>
              
            
            </>
          )}
        </div>

        {/* reCAPTCHA container (hidden if invisible) */}
        <div id="recaptcha-container"></div>

        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
           
      </div>
    </div>
  );
}
