import bgSlice from "../assets/p5.jpg";

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#C47F00] mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="relative bg-white shadow-lg p-8 rounded-2xl border overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url(${bgSlice})`,
                backgroundSize: "180%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom right",
                opacity: .30,
              }}
            ></div>

            <h3 className="text-2xl font-bold text-[#C47F00] mb-3 relative">
              Transparency
            </h3>
            <p className="text-gray-700 relative">
              We provide honest information about quality, source, and grade—
              ensuring you always know what you're buying.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="relative bg-white shadow-lg p-8 rounded-2xl border overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url(${bgSlice})`,
                backgroundSize: "180%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left",
                opacity: 0.30,
              }}
            ></div>

            <h3 className="text-2xl font-bold text-[#C47F00] mb-3 relative">
              100% Pure Saffron
            </h3>
            <p className="text-gray-700 relative">
              Our saffron is tested and sourced directly from trusted farmers—
              ensuring top-tier aroma, flavor & colour.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="relative bg-white shadow-lg p-8  rounded-2xl border overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url(${bgSlice})`,
                backgroundSize: "180%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top right",
                opacity: 0.30,
              }}
            ></div>

            <h3 className="text-2xl font-bold text-[#C47F00] mb-3 relative">
              Premium Packaging
            </h3>
            <p className="text-gray-700 relative">
              Aroma-lock jars keep saffron fresh, fragrant and long-lasting,
              delivered safely to your doorstep.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
