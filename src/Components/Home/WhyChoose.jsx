
import {
  FaAward,
  FaUsers,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  {
    title: "Experienced Team",
    icon: <FaUsers />,
    description:
      "Our experienced professionals bring knowledge and expertise to every project.",
  },
  {
    title: "Quality Service",
    icon: <FaAward />,
    description:
      "We focus on delivering reliable, high-quality services that meet client expectations.",
  },
  {
    title: "24/7 Support",
    icon: <FaClock />,
    description:
      "Our team is available to provide continuous support whenever you need us.",
  },
  {
    title: "Certified Engineers",
    icon: <FaCheckCircle />,
    description:
      "Skilled and qualified engineers ensure safe and efficient project execution.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>

          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-blue-800"></div>

          <p className="mt-5 text-sm leading-6 text-gray-500 sm:text-base">
            We are committed to providing reliable, professional, and
            high-quality services for every project.
          </p>

        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border border-gray-200 bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-700 transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>

              {/* Small line */}
              <div className="mx-auto mt-3 h-0.5 w-8 bg-gray-300 transition-all duration-300 group-hover:w-12 group-hover:bg-gray-800"></div>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-gray-500">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;