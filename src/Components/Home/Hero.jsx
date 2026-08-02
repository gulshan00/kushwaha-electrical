import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952')",
      }}
    >
      <div className="absolute inset-0 bg-blue-950/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
        <div className="text-white max-w-3xl">

          <p className="uppercase tracking-widest text-blue-300 mb-4">
            Professional Electrical Services
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Powering Homes & Industries with Excellence
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Kushwaha Electricals provides complete electrical installation,
            maintenance, industrial wiring, transformer installation and
            electrical safety solutions.
          </p>

          <div className="flex gap-5 mt-10 flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full flex items-center gap-2">
              Our Services
              <FaArrowRight />
            </button>

            <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;