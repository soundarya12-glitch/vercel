import React, { useState } from "react";
import { auth, googleProvider,githubProvider } from "../../firebase"; 
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { X } from "lucide-react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 🔹 Email/Password login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Dashboard"); // redirect after success
    } catch (err) {
      setError("Invalid email or password");
      console.error(err);
    }
  };

  // 🔹 Google login
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/Dashboard");
    } catch (err) {
      setError("Google sign-in failed");
      console.error(err);
    }
  };
const handleGithubSignin=async()=>{
  try{
    await signInWithPopup(auth,githubProvider);
    navigate("/Dashboard");
  }catch(err){
    setError("Github signin failed");
    console.error(err);
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

        <h2 className="text-center text-xl font-bold mb-4">Sign up</h2>

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

          {/* Email/Password Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Register
          </button>
        </form>

        {/* Google Button */}
        <button
          onClick={handleGoogleSignIn}
          className="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-600  text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Sign in with Google
        </button>
          <button
          onClick={handleGithubSignin}
          className="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-600  text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Sign in with Github
        </button>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
      </div>
    </div>
  );
}
