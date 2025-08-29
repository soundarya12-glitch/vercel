// src/pages/Login.jsx
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize invisible reCAPTCHA
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      { size: "invisible" },
      auth
    );

    // Redirect if already logged in
    onAuthStateChanged(auth, (user) => {
      if (user) navigate("/dashboard");
    });
  }, [navigate]);

  const sendOtp = () => {
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((result) => {
        setConfirmationResult(result);
        alert("OTP Sent!");
      })
      .catch((err) => console.log(err));
  };

  const verifyOtp = () => {
    if (!confirmationResult) return;
    confirmationResult
      .confirm(otp)
      .then((result) => {
        alert("Login Successful!");
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Login with Phone</h2>
      <input
        type="text"
        placeholder="+91XXXXXXXXXX"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={sendOtp}>Send OTP</button>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOtp}>Verify OTP</button>

      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Login;
