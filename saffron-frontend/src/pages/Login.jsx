import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // AUTO-HIDE message after 3 seconds
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ type: "", text: "" });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);

      setMessage({ type: "success", text: "Login Successful! Redirecting..." });

      setTimeout(() => navigate("/"), 1200);

    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Invalid email or password",
      });
    }

    setLoading(false);
  };

  const inputBase =
    "w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 " +
    "outline-none transition-all duration-300 focus:border-transparent " +
    "focus:border-b-2 focus:border-b-[#C47F00]";

  return (
    <section className="min-h-screen bg-[#FFF8F0] flex flex-col items-center justify-start px-6 pt-6">

      {/* SUCCESS MESSAGE BOX */}
      {message.type === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-[60%] h-12 flex items-center justify-center 
          bg-green-100 text-green-700 font-semibold rounded-md 
          border-l-4 border-green-600 shadow-sm mb-4"
        >
          {message.text}
        </motion.div>
      )}

      {/* ERROR MESSAGE BOX */}
      {message.type === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-[60%] h-12 flex items-center justify-center 
          bg-red-100 text-red-700 font-semibold rounded-md 
          border-l-4 border-red-600 shadow-sm mb-4"
        >
          {message.text}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md p-8 relative rounded-3xl shadow-xl bg-white/80 backdrop-blur-xl border border-[#F6E7D8]"
      >
        <h2 className="text-4xl font-extrabold text-[#C47F00] text-center">
          Welcome Back
        </h2>

        <p className="text-gray-600 text-center mt-1">
          Log in to Z Princess Saffron
        </p>

        <form onSubmit={handleLogin} className="mt-10 space-y-6">

          {/* EMAIL */}
          <div className="relative">
            <FiMail className="absolute left-4 top-3.5 text-gray-500 text-xl" />
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputBase}
              placeholder="Enter your email"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <FiLock className="absolute left-4 top-3.5 text-gray-500 text-xl" />
            <input
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className={inputBase}
              placeholder="Enter your password"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg text-white font-bold text-lg
            bg-gradient-to-r from-[#C47F00] to-[#E7B563]
            hover:opacity-90 transition-all shadow-md disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-700 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-[#C47F00] font-semibold hover:underline"
          >
            Create Account
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Login;
