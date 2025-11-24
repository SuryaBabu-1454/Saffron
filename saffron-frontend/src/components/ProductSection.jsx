import { motion } from "framer-motion";
import { useState } from "react";

import item1 from "../assets/p1.jpg";
import item2 from "../assets/p2.jpg";
import item3 from "../assets/p3.jpg";
import item4 from "../assets/p4.jpg";
import item5 from "../assets/p5.jpg";
import item6 from "../assets/p6.jpg";
import bg2 from "../assets/bg4.jpg"; 

const products = [
  {
    name: "Premium Kashmiri Saffron",
    frontImg: item1,
    backImg: item3,
  },
  {
    name: "Iranian Saffron Threads",
    frontImg: item2,
    backImg: item4,
  },
  {
    name: "Spanish La Mancha Saffron",
    frontImg: item6,
    backImg: item5,
  },
  {
    name: "Saffron Gift Box",
    frontImg: item3,
    backImg: item1,
  },
];

const ProductsSection = () => {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center px-6 overflow-hidden"
      id="products"
      onMouseLeave={() => setShowProducts(false)}
    >
    
<motion.div
  initial={{ scale: 1 }}
  animate={{ scale: [1, 1.15, 1] }}
  transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
  className="absolute inset-0 w-full h-full"
  style={{
    backgroundImage: `url(${bg2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>



      <div className="absolute inset-0 bg-black/30 bg-opacity-40"></div>


      {!showProducts && (
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: showProducts ? 0 : 1, x: showProducts ? -200 : 0 }}
          transition={{ duration: 0.6 }}
          className="text-center absolute z-10"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg">
            OUR PRODUCTS
          </h2>

          <button
            onClick={() => setShowProducts(true)}
            className="mt-8 px-8 py-3 bg-[#C47F00] text-white 
          font-semibold rounded-full hover:bg-[#a66b00] 
          transition-all duration-300 shadow-lg"
          >
            Discover Now
          </button>
        </motion.div>
      )}

      {/* Product Grid */}
      {showProducts && (
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 150 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full z-10"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="group w-full h-80 [perspective:1000px]"
            >
              <div
                className="relative w-full h-full duration-500 
              [transform-style:preserve-3d] 
              group-hover:[transform:rotateY(180deg)]"
              >
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden">
                  <img
                    src={product.frontImg}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                </div>

                {/* BACK */}
                <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden">
                  <img
                    src={product.backImg}
                    alt="Product Back"
                    className="w-full h-full object-cover rounded-xl shadow-xl"
                  />
                </div>
              </div>

              <p className="text-center mt-4 text-lg font-semibold text-white drop-shadow">
                {product.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default ProductsSection;
