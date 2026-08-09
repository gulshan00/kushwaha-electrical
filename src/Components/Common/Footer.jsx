import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-gray-300 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 left-0 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-10">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Need Professional Electrical Services?
            </h2>

            <p className="text-white/90 mt-3 max-w-xl">
              From industrial electrical installations to maintenance and
              emergency support, Kushwaha Electrical delivers safe, reliable,
              and efficient solutions.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:scale-105 duration-300 whitespace-nowrap"
          >
            Get Free Quote
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Kushwaha
              <span className="text-yellow-400"> Electrical</span>
            </h2>

            <div className="w-20 h-1 bg-yellow-400 rounded-full mt-3 mb-6"></div>

            <p className="text-gray-400 leading-8">
              We provide industrial, commercial, and residential electrical
              services with a commitment to quality, safety, and customer
              satisfaction.
            </p>

            <div className="flex gap-4 mt-8">
              {[
                {
                  icon: <FaFacebookF />,
                  color: "hover:bg-blue-600",
                },
                {
                  icon: <FaInstagram />,
                  color: "hover:bg-pink-600",
                },
                {
                  icon: <FaLinkedinIn />,
                  color: "hover:bg-blue-700",
                },
                {
                  icon: <FaWhatsapp />,
                  color: "hover:bg-green-600",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className={`w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center transition duration-300 hover:-translate-y-2 ${item.color}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                "Home",
                "About",
                "Services",
                "Projects",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition"
                  >
                    <FaArrowRight className="text-xs" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4 text-gray-400">
              {[
                "Electrical Installation",
                "Industrial Wiring",
                "Control Panel Installation",
                "Cable Laying",
                "Electrical Maintenance",
                "Power Distribution",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 hover:text-yellow-400 transition"
                >
                  <FaArrowRight className="mt-1 text-xs text-yellow-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Contact Info
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-white font-medium">Office</p>
                  <p className="text-gray-400">
                    Bihar
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-white font-medium">Phone</p>

                  <a
                    href="tel:+919381037096"
                    className="text-gray-400 hover:text-yellow-400"
                  >
                    +91 9381037096
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-white font-medium">Email</p>

                  <a
                    href="mailto:bantykrkushwaha@gmail.com"
                    className="text-gray-400 hover:text-yellow-400 break-all"
                  >
                    bantykrkushwaha@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-center md:text-left text-gray-500 text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="text-yellow-400 font-semibold">
                Kushwaha Electrical
              </span>
              . All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                to="/privacy-policy"
                className="hover:text-yellow-400 transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="hover:text-yellow-400 transition"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/contact"
                className="hover:text-yellow-400 transition"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;