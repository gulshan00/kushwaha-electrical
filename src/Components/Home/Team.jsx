

const Team = () => {
  const teamMembers = [
    {
      name: "Banty Kushwaha",
      role: "Director",
      initials: "BK",
      description:
        "Driving strategic growth and operational excellence while maintaining the highest standards of service, quality, and client trust.",
    },
    {
      name: "Abhishek Kumar",
      role: "Planning Engineer",
      initials: "AK",
      description:
        "Managing project planning, scheduling, workforce coordination, and ensuring efficient execution of project activities.",
    },
    {
      name: "Gulshan Kumar",
      role: "Billing",
      initials: "GK",
      description:
        "Managing project billing, documentation, measurements, and financial coordination for accurate and timely billing.",
    },
  ];

  return (
    <section className=" sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">
            Our Team
          </h2>

          <p className="mt-3 text-sm text-gray-500 sm:text-base">
            Meet the professionals behind our success
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Top Blue Area */}
              <div className="h-28 bg-gradient-to-r from-blue-900 to-blue-600"></div>

              {/* Profile */}
              <div className="-mt-14 flex justify-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-blue-900 shadow-md">
                  <span className="text-3xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-8 pt-5 text-center">

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="mt-2 text-sm font-medium text-blue-700">
                  {member.role}
                </p>

                {/* Line */}
                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-blue-800"></div>

                {/* Description */}
                <p className="mt-5 text-sm leading-6 text-gray-500">
                  {member.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Team;