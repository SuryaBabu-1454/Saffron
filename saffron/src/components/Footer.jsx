import { FiMail, FiFacebook, FiInstagram, FiLinkedin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white w-full py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#C47F00]">
          Z PRINCESS SAFFRON
        </h2>

        {/* LINE */}
        <div className="w-24 h-[2px] bg-[#C47F00] mx-auto mt-3 mb-10"></div>

        {/* LINKS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto text-gray-700 text-sm md:text-base">
          <p className="cursor-pointer hover:text-[#C47F00]">CONTACT</p>
          <p className="cursor-pointer hover:text-[#C47F00]">ABOUT</p>
          <p className="cursor-pointer hover:text-[#C47F00]">TERMS & CONDITIONS</p>
          <p className="cursor-pointer hover:text-[#C47F00]">PRIVACY POLICY</p>
          <p className="cursor-pointer hover:text-[#C47F00]">CORPORATE ESSENTIALS</p>
          <p className="cursor-pointer hover:text-[#C47F00]">REFUND POLICY</p>
          <p className="cursor-pointer hover:text-[#C47F00]">SHIPPING POLICY</p>
          <p className="cursor-pointer hover:text-[#C47F00]">FAQ</p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mt-10 text-[#C47F00] text-2xl">
          <FiMail className="cursor-pointer hover:text-[#a66b00]" />
          <FaWhatsapp className="cursor-pointer hover:text-[#a66b00]" />
          <FiFacebook className="cursor-pointer hover:text-[#a66b00]" />
          <FiInstagram className="cursor-pointer hover:text-[#a66b00]" />
          <FiLinkedin className="cursor-pointer hover:text-[#a66b00]" />
        </div>

   
        <p className="text-gray-600 text-xs mt-10">
          &copy; {new Date().getFullYear()} Z Princess Saffron. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
