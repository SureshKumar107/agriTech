import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  const teamMembers = [
    {
      name: "John Doe",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      role: "Frontend Developer",
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      role: "Backend Developer",
      email: "jane.smith@example.com",
    },
    {
      name: "Alice Johnson",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/alicejohnson",
      linkedin: "https://linkedin.com/in/alicejohnson",
      role: "UI/UX Designer",
      email: "alice.johnson@example.com",
    },
    {
      name: "Bob Williams",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/bobwilliams",
      linkedin: "https://linkedin.com/in/bobwilliams",
      role: "DevOps Engineer",
      email: "bob.williams@example.com",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center min-h-[16rem]"
            >
              {/* Left Side: Profile Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto md:ml-6"
              />

              {/* Right Side: Details */}
              <div className="p-4 sm:p-6 flex flex-col justify-center w-full">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center md:text-left">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-lg font-medium text-gray-600 mb-3 text-center md:text-left">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-gray-700 mb-3 text-center md:text-left">
                  <strong>Email:</strong> {member.email}
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black"
                  >
                    <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
