import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import AuthPopup from "./AuthPopup";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [authOpen, setAuthOpen] = useState(false);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "PRODUCTS", path: "/products" },
    { name: "WHY CHOOSE US", path: "/why-us" },
    { name: "GOLDEN ELIXIR", path: "/golden-elixir" },
    { name: "RECOMMENDAR", path: "/recommend" },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-[#FFF8F0]/90 shadow-md backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-[#C47F00] tracking-wide cursor-pointer"
        >
          Z PRINCESS SAFFRON
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-10 text-[15px] font-medium text-gray-700">
          {menuItems.map((item) => (
            <li key={item.path} className="relative group">
              <Link
                to={item.path}
                className={`pb-1 transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-[#C47F00]"
                    : isScrolled
                    ? "text-gray-700"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#C47F00] transition-all duration-300
                ${
                  location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <FiUser
            className={`text-xl cursor-pointer transition-colors ${
              isScrolled ? "text-gray-700" : "text-white"
            } hover:text-[#C47F00]`}
            onClick={() => setAuthOpen(true)}
          />
          <FiHeart
            className={`text-xl transition-colors ${
              isScrolled ? "text-gray-700" : "text-white"
            } hover:text-[#C47F00]`}
          />
          <Link to="/cart">
            <FiShoppingBag
              className={`text-xl transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              } hover:text-[#C47F00]`}
            />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className={`md:hidden text-2xl ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <FiMenu />
        </button>
      </div>

      {/* MOBILE SIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-bold text-[#C47F00]">Menu</h2>
          <FiX className="text-2xl cursor-pointer" onClick={() => setOpen(false)} />
        </div>

        <ul className="flex flex-col text-lg p-5 space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                className={`
                  block px-4 py-3 rounded-md transition-all duration-200
                  ${
                    location.pathname === item.path
                      ? "bg-[#FFF0D9] text-[#C47F00] font-semibold"
                      : "text-gray-700"
                  }
                  hover:bg-[#FFF0D9] hover:text-[#C47F00]
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE ICONS */}
        <div className="flex justify-center space-x-6 pt-4 text-gray-700">
          <FiUser
            className="text-xl cursor-pointer hover:text-[#C47F00]"
            onClick={() => setAuthOpen(true)}
          />
          <FiHeart className="text-xl hover:text-[#C47F00]" />
          <Link to="/cart">
            <FiShoppingBag className="text-xl hover:text-[#C47F00]" />
          </Link>
        </div>
      </div>

      <AuthPopup open={authOpen} setOpen={setAuthOpen} />
    </nav>
  );
};

export default Navbar;
