import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Welcome to Kushwaha Electricals
          </h1>

          <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            We provide top-notch electrical solutions for residential, commercial,
          </p>

          <button className="mt-8 bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition">
            Explore More
            
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;