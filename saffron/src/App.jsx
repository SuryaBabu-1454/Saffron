import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhyUsSection from "./components/WhyUsSection";
import AboutUs from "./pages/AboutUs";
import ProductList from "./pages/ProductList";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./pages/CartPage";

const App = () => {
  const location = useLocation();

  // Hide navbar + footer on login & register pages
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<CartPage />} />


        <Route path="/why-us" element={<WhyUsSection />} />
        <Route path="/about-us" element={<AboutUs />} />

    
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
