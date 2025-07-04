import React, { useState, useRef, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaViber,
} from "react-icons/fa";
import profilePicture from "../assets/profile-picture.jpg";

export const Header = () => {
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);
  const phoneNumber = "+38971232040"; // Remove spaces for direct links
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown on phone click
  const handlePhoneClick = () => {
    setShowPhoneOptions((prev) => !prev);
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowPhoneOptions(false);
      }
    };
    if (showPhoneOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPhoneOptions]);

  return (
    <header className="bg-gradient-to-b from-primary-700 via-primary-100 to-white dark:bg-gradient-to-t dark:from-gray-900 dark:via-primary-900 dark:to-primary-950 text-primary-700 dark:text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={profilePicture}
              alt="Aleksandra Efremova profile picture"
              className="w-48 h-48 rounded-full mx-auto border-4 border-white dark:border-gray-700 shadow-lg object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">Aleksandra Efremova</h1>
          <h2 className="text-2xl mb-4">Junior Frontend Developer</h2>
          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="mailto:efremova_aleksandra@yahoo.com"
              className="hover:text-primary-300 dark:hover:text-primary-400"
              aria-label="Send email to Aleksandra Efremova"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Its-me-Aleks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-300 dark:hover:text-primary-400"
              aria-label="Aleksandra Efremova on GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aleksandra-efremova-aleks/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-300 dark:hover:text-primary-400"
              aria-label="Aleksandra Efremova on LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div>
              <div className="relative" ref={dropdownRef}>
                <p
                  className="cursor-pointer hover:text-primary-300 dark:hover:text-primary-400"
                  onClick={handlePhoneClick}
                >
                  <strong>Phone:</strong> +389 71 232040
                </p>
                {showPhoneOptions && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-10 border border-primary-100 dark:border-gray-700">
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex items-center px-4 py-2 text-primary-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-500"
                    >
                      <FaPhone className="w-4 h-4 mr-2" />
                      Call
                    </a>
                    <a
                      href={`viber://chat?number=${phoneNumber}`}
                      className="flex items-center px-4 py-2 text-primary-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-500"
                    >
                      <FaViber className="w-4 h-4 mr-2" />
                      Viber
                    </a>
                    <a
                      href={`https://wa.me/${phoneNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-primary-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-500"
                    >
                      <FaWhatsapp className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </div>
                )}
              </div>
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
