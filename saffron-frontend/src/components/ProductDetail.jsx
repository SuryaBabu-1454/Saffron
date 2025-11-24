import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

import item1 from "../assets/p1.jpg";
import item2 from "../assets/p2.jpg";
import item3 from "../assets/p3.jpg";
import item4 from "../assets/p4.jpg";

const products = [
  { id: 1, name: "Premium Kashmiri Saffron 1g", price: "₹599", img: item1 },
  { id: 2, name: "Iranian Super Negin 2g", price: "₹999", img: item2 },
  { id: 3, name: "Spanish La Mancha Saffron 1g", price: "₹699", img: item3 },
  { id: 4, name: "Saffron Luxury Gift Box", price: "₹1499", img: item4 },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  const [reviews, setReviews] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });

  const totalReviews =
    reviews[1] + reviews[2] + reviews[3] + reviews[4] + reviews[5];

  return (
    <div className="px-6 py-20 bg-white">
      {/* =================  PRODUCT DETAILS ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 min-h-[80vh] mt-20">
        <div className="relative flex justify-center">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C47F00] opacity-40 rounded-xl -z-10"></div>

          <div className="absolute bottom-6 right-10 w-20 h-20 bg-[#000] opacity-10 rounded-xl -z-10"></div>

          <motion.img
            src={product.img}
            alt={product.name}
            className="h-80 w-70 object-cover rounded-xl shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* RIGHT DETAILS */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-[#C47F00]">{product.name}</h1>

          {/* PRICE + RATING */}
          <div className="flex items-center gap-4">
            <p className="text-2xl font-semibold">{product.price}</p>
            <div className="flex items-center text-yellow-500 text-xl">
              ★★★★★
            </div>
            <span className="text-gray-500">(0 reviews)</span>
          </div>

          {/* SHORT DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed">
            This is premium quality saffron known for its rich aroma, vibrant
            color and the purest grade. Perfect for gifting, cooking, skincare
            and more.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-6 pt-4">
            <button
              className="px-6 py-3 bg-[#C47F00] text-white rounded-xl font-semibold hover:bg-[#a66b00]"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

            <button className="px-6 py-3 border border-[#C47F00] text-[#C47F00] rounded-xl font-semibold hover:bg-[#fff2d9]">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* =================  REVIEW OVERVIEW ================= */}

      <section className="mt-20 mx-6 md:mx-20">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#C47F00]">
            Reviews Overview
          </h2>

          <button
            className="px-5 py-2 bg-[#C47F00] text-white font-semibold rounded-full hover:bg-[#a66b00] transition-all"
            onClick={() => alert("Open Add Review Modal")}
          >
            Add Review
          </button>
        </div>

        <hr className="border-gray-300 mb-10" />

        <div className="flex flex-col md:flex-row gap-10">
      
          <div className="w-full md:w-1/4 bg-gray-100 p-6 rounded-xl shadow-sm text-center">
            <p className="text-6xl font-extrabold text-[#C47F00]">0</p>
            <p className="text-2xl mt-2">★★★★★</p>
            <p className="text-gray-600 mt-2">0 Ratings</p>
          </div>

          {/* RIGHT SIDE BARS */}
          <div className="flex-1 space-y-3">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-4">
                <span className="w-10 font-medium">{star} ★</span>

                <div className="flex-1 h-2 bg-gray-300  rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C47F00] transition-all duration-500"
                    style={{ width: `0%` }}
                  ></div>
                </div>

                <span className="w-20 text-right text-gray-600">0 reviews</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*  review overview */}

      <section className="mt-20 mx-6 md:mx-20 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#C47F00] mb-10">
          All Reviews
        </h2>
        <div className="bg-gray-100 py-10 rounded-xl text-center shadow">
          <p className="text-gray-600 text-lg">
            No reviews yet. Be the first to share your experience!
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
