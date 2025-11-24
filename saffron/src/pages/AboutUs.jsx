import React from "react"; 
import aboutBg from '../assets/1.jpg'

const AboutUs = () => {
  return (
    <div className="w-full">

      {/* SECTION 1 */}
      <section className="text-center min-h-[70vh] py-20 flex justify-center items-center flex-col bg-gradient-to-b from-purple-500 via-purple-300 to-white text-white">
        <h1 className="text-5xl font-extrabold tracking-wide"         style={{ fontFamily: "'Playfair Display', serif" }}>
          Z PRINCESS SAFFRON
        </h1>
        <p className="mt-4 max-w-2xl pt-3 mx-auto text-lg text-black/60">
          At the crossroads of ancient heritage and modern purity,
          Z PRINCESS SAFFRON embodies the golden promise of authenticity.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="py-16 text-center px-6 min-h-[80vh]">
        <h2 className="text-4xl font-bold mb-4"         style={{ fontFamily: "'Playfair Display', serif" }}>Who We Are</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-7">
          Z PRINCESS SAFFRON is more than a saffron brand—it is the fruit of
          passion, tradition, and technological excellence. This project was proudly
          launched by <strong>HeyRam Infrastructure</strong>, an IT services, web
          development, and digital marketing company led by Managing Director
          <strong> Raja K</strong>.
          <br /><br />
          Our journey blends the digital future with age-old agricultural heritage.
          Every strand of saffron we offer is a symbol of luxury, purity, and
          authenticity—sourced directly from the highlands of Kashmir and presented
          to you with meticulous care and quality assurance.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="py-16 text-center px-6 bg-gray-50 min-h-[80vh]">
        <h2 className="text-4xl font-bold"         style={{ fontFamily: "'Playfair Display', serif" }}>Our Essence</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700 leading-7">
          We aren’t just merchants of saffron—we’re curators of a legacy. Each
          strand tells a story from high Himalayan valleys and sun-kissed Spanish
          fields. With every harvest, we preserve a piece of heritage, transforming
          kitchens, ceremonies, and lives.
        </p>


        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-white shadow-xl p-6 rounded-xl border-t-4 border-purple-600 hover:scale-105 duration-200">
            <h3 className="text-xl font-bold mb-2">Origin-Based Sourcing</h3>
            <p className="text-gray-600">
              Direct partnerships with farms in Kashmir, Iran, and Spain ensure
              true traceability and freshness.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white shadow-xl p-6 rounded-xl border-t-4 border-yellow-500 hover:scale-105 duration-200">
            <h3 className="text-xl font-bold mb-2">Laboratory Tested</h3>
            <p className="text-gray-600">
              Each batch is tested for purity, aroma, and color strength before it
              reaches your hands.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white shadow-xl p-6 rounded-xl border-t-4 border-red-500 hover:scale-105 duration-200">
            <h3 className="text-xl font-bold mb-2">Crafted Experiences</h3>
            <p className="text-gray-600">
              We believe saffron is more than spice—it's a symbol of wellness,
              celebration, and royalty.
            </p>
          </div>
        </div>
      </section>

    
{/* SECTION 4 */}
<section
  className="relative py-20 px-6 bg-cover bg-center"
  style={{
    backgroundImage: "url('https://cdn.pixabay.com/photo/2017/10/06/19/29/saffron-2824330_1280.jpg')",
  }}
>

  <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>

  <div className="relative grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-10 items-center">
    
    {/* Image Left */}
    <div className="flex justify-center">
      <img
        src={aboutBg}
        alt="Saffron"
        className="w-200 h-40 object-cover rounded-xl shadow-xl border-4 border-white"
      />
    </div>

    {/* Text Right */}
    <div className="text-white md:text-left text-center">
      <h2 
        className="text-4xl font-extrabold mb-4"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        A Culture of Saffron
      </h2>

      <p className="text-lg leading-7">
        Our vision is simple: make luxury ethical, and authenticity
        accessible. From sacred rituals to Michelin-starred dishes, our
        saffron enriches every moment. We're proud to redefine saffron—from
        commodity to craft.
        <br /><br />
        Explore our journey, share our story, and taste the legacy in every
        golden thread.
      </p>
    </div>
  </div>
</section>


      {/* SECTION 5: SIGNATURE QUOTE */}
      <section className="py-24 bg-purple-700 text-center">
        <h2 className=" text-5xl pb-8 text-teal-400 font-bold text- "         style={{ fontFamily: "'Playfair Display', serif" }}>Signature Quote</h2>
        <h3 className="text-3xl italic text-white font-serif tracking-wide">
          “Every thread must whisper luxury, heritage, and healing.”
        </h3>
      </section>

    </div>
  );
};

export default AboutUs;
