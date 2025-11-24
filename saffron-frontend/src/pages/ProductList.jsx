import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// IMPORTING IMAGES FROM src/assets
import item1 from "../assets/p1.jpg";
import item2 from "../assets/p2.jpg";
import item3 from "../assets/p3.jpg";
import item4 from "../assets/p4.jpg";

const products = [
  {
    id: 1,
    name: "Premium Kashmiri Saffron 1g",
    price: "₹599",
    img: item1,
  },
  {
    id: 2,
    name: "Iranian Super Negin 2g",
    price: "₹999",
    img: item2,
  },
  {
    id: 3,
    name: "Spanish La Mancha Saffron 1g",
    price: "₹699",
    img: item3,
  },
  {
    id: 4,
    name: "Saffron Luxury Gift Box",
    price: "₹1499",
    img: item4,
  },
  {
    id: 5,
    name: "Premium Kashmiri Saffron 1g",
    price: "₹599",
    img: item2,
  },
  {
    id: 6,
    name: "Iranian Super Negin 2g",
    price: "₹999",
    img: item4,
  },
  {
    id: 7,
    name: "Spanish La Mancha Saffron 1g",
    price: "₹699",
    img: item3,
  },
  {
    id: 8,
    name: "Saffron Luxury Gift Box",
    price: "₹1499",
    img: item1,
  },
];

const ProductList = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-[#C47F00] text-center mb-14">
        OUR PREMIUM PRODUCTS
      </h2>

      {/* GRID 4 PER ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-10">
        {products.map((product) => (
    <motion.div
  key={product.id}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
  onClick={() => navigate(`/product/${product.id}`)}
  className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition my-10"
>
  {/* IMAGE */}
  <img
    src={product.img}
    alt={product.name}
    className="w-full h-90 object-cover rounded-xl"
  />

  {/* FULL CARD OVERLAY */}
  <div
    className="
      absolute inset-0 
      bg-black/60 
      opacity-0 
      flex items-center justify-center 
      transition-all duration-[2000ms] 
      group-hover:opacity-100
    "
  >
    {/* TITLE CENTERED */}
    <h3 className="text-2xl font-bold text-white tracking-wide text-center px-4">
      {product.name}
    </h3>
  </div>
</motion.div>

        ))}
      </div>
    </section>
  );
};

export default ProductList;
