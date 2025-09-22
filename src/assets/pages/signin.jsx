import React, { useState } from "react";
import { auth } from "../../firebase"; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // ✅ If login is successful, redirect to dashboard
      navigate("/Dashboard");
    } catch (err) {
      setError("Invalid email or password");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-200">
      <div className="bg-white p-6 rounded shadow-md w-96 relative"> 
        {/* relative is important for absolute button */}
        
        {/* ❌ Close button */}
        <button
          type="button" // prevent form submit
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-center text-xl font-bold mb-4">Sign in</h2>

        <form onSubmit={handleLogin} className="space-y-4 flex flex-col gap-4">
       

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border mb-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Login 
          </button>
         <center>
  <Link to="/Reg">
    <h1 className="text-blue-600 hover:underline cursor-pointer">
      No account? Register here
    </h1>
  </Link>
</center>
          
        </form>

      
      </div>
    </div>
  );
}


