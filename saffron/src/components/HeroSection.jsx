import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bg1 from "../assets/bg1.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center px-6 overflow-hidden"
      id="home"
    >
     
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.15 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></motion.div>


      <div className="absolute inset-0 bg-black/10 bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-2xl">
          Z PRINCESS SAFFRON
        </h1>

        <p className="mt-4 text-lg md:text-2xl text-gray-100 tracking-wide">
          World's Finest Saffron
        </p>

        <Link to="/about-us">
          <button
            className="mt-8 px-8 py-3 bg-[#C47F00] text-white font-semibold rounded-full 
            hover:bg-[#a66b00] transition-all duration-300 shadow-lg"
          >
            Discover Now
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
