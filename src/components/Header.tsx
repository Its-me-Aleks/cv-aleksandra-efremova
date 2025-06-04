import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profilePicture from "../assets/profile-picture.jpg";

export const Header = () => {
  return (
    <header className="bg-primary-700 text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={profilePicture}
              alt="Aleksandra Efremova"
              className="w-48 h-48 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">Aleksandra Efremova</h1>
          <h2 className="text-2xl mb-4">Junior Frontend Developer</h2>
          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="mailto:efremova_aleksandra@yahoo.com"
              className="hover:text-primary-300"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aleksandra-efremova-aleks/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div>
              <p>
                <strong>Phone:</strong> +389 71 232040
              </p>
              <p>
                <strong>Email:</strong> efremova_aleksandra@yahoo.com
              </p>
              <p>
                <strong>Location:</strong> Skopska 23, 2300 Kochani, North
                Macedonia
              </p>
            </div>
            <div>
              <p>
                <strong>Date of Birth:</strong> February 14, 1992
              </p>
              <p>
                <strong>Nationality:</strong> Dual Macedonian and Bulgarian
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
