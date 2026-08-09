import { useState } from "react";
import {
  HiMenu,
  HiX,
  HiPhone,
  HiMail,
} from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Projects",
    "Services",
    "Contact",
  ];

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="hidden md:block bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">

            <p className="text-sm text-gray-700">
              Welcome to{" "}
              <span className="font-semibold text-blue-700">
                KUSHWAHA ELECTRICALS
              </span>
            </p>

            <div className="flex items-center gap-4 text-gray-600">
              <FaFacebookF className="cursor-pointer hover:text-blue-700 duration-300" />
              <FaTwitter className="cursor-pointer hover:text-blue-700 duration-300" />
              <FaInstagram className="cursor-pointer hover:text-blue-700 duration-300" />
            </div>

          </div>
        </div>
      </div>

      {/* ================= HEADER ================= */}

      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

          <div className="flex items-center justify-between">

            {/* Logo */}

            <div className="flex items-center gap-4">

              <img
                src={logo}
                alt="Logo"
                className="h-20 w-auto object-contain"
              />

             
            </div>

            {/* Contact */}

            <div className="hidden lg:flex items-center gap-14">

              <div className="flex items-center gap-3">

                <div className="bg-blue-100 p-3 rounded-full">
                  <HiPhone className="text-blue-700 text-xl" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Call Us
                  </p>

                  <h4 className="font-semibold">
                    +91 9381037096
                  </h4>
                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="bg-blue-100 p-3 rounded-full">
                  <HiMail className="text-blue-700 text-xl" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Email Us
                  </p>

                  <h4 className="font-semibold">
                    bantykrkushwaha@gmail.com
                  </h4>
                </div>

              </div>

            </div>

            {/* Desktop Button */}

            <div className="hidden lg:block">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg transition">
                Get A Quote
              </button>
            </div>

            {/* Mobile Menu */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-4xl text-blue-700"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>

          </div>

        </div>
      </header>

      {/* ================= NAVBAR ================= */}

      <nav className="bg-[#284B9B] shadow-md sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center h-16">

            <ul className="hidden lg:flex items-center gap-10 uppercase font-semibold text-white">

              {navLinks.map((item, index) => (
                <li
                  key={item}
                  className={`relative cursor-pointer transition duration-300 hover:text-yellow-400 ${
                    index === 0 ? "text-yellow-400" : ""
                  }`}
                >
                  {item}

                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-400 transition-all duration-300 ${
                      index === 0 ? "w-full" : "w-0 hover:w-full"
                    }`}
                  ></span>
                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* Mobile Menu */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 bg-[#284B9B] ${
            menuOpen ? "max-h-125" : "max-h-0"
          }`}
        >

          <ul className="flex flex-col px-6 py-4">

            {navLinks.map((item) => (
              <li
                key={item}
                className="py-4 border-b border-blue-500 text-white hover:text-yellow-400 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </li>
            ))}

            <button className="mt-6 bg-yellow-400 text-black font-semibold py-3 rounded-lg">
              Get A Quote
            </button>

            <div className="mt-6 space-y-3 text-white">

              <div className="flex items-center gap-2">
                <HiPhone />
                <span>+91 9876543210</span>
              </div>

              <div className="flex items-center gap-2">
                <HiMail />
                <span>info@kushwahaelectricals.com</span>
              </div>

            </div>

          </ul>

        </div>

      </nav>
    </>
  );
};

export default Navbar;