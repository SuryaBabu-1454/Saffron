import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Auto-hide success & error message after 3 seconds
  useEffect(() => {
    if (error || successMsg) {
      const timer = setTimeout(() => {
        setError("");
        setSuccessMsg("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error, successMsg]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMsg("");

    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);

      setSuccessMsg("Registration successful! Redirecting...");
      setLoading(false);

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (err) {
      setLoading(false);

      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.code === "ERR_NETWORK") {
        setError("Backend server not reachable.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  const inputBase =
    "w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 " +
    "outline-none transition-all duration-300 focus:border-transparent " +
    "focus:border-b-2 focus:border-b-[#C47F00]";

  return (
    <section className="min-h-screen bg-[#FFF8F0] flex flex-col items-center px-6 pt-6">

      {/* SUCCESS MESSAGE */}
      {successMsg && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-[60%] h-12 flex items-center justify-center 
          bg-green-100 text-green-700 font-semibold rounded-md 
          border-l-4 border-green-600 shadow-sm mb-4"
        >
          {successMsg}
        </motion.div>
      )}

      {/* ERROR MESSAGE */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-[60%] h-12 flex items-center justify-center 
          bg-red-100 text-red-700 font-semibold rounded-md 
          border-l-4 border-red-600 shadow-sm mb-4"
        >
          {error}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md p-8 relative rounded-3xl shadow-xl bg-white/80 backdrop-blur-xl border border-[#F6E7D8]"
      >
        <h2 className="text-4xl font-extrabold text-[#C47F00] text-center">
          Create Your Account
        </h2>

        <p className="text-gray-600 text-center mt-1">Join Z Princess Saffron</p>

        <form onSubmit={handleRegister} className="mt-10 space-y-6">
          <div className="relative">
            <FiUser className="absolute left-4 top-3.5 text-gray-500 text-xl" />
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className={inputBase}
              placeholder="Enter your name"
            />
          </div>

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

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg text-white font-bold text-lg
            bg-gradient-to-r from-[#C47F00] to-[#E7B563] hover:opacity-90 transition-all shadow-md"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-700 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#C47F00] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Register;
