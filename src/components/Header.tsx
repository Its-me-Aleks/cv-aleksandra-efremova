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
  const timeoutRef = useRef<number>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowPhoneOptions(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setShowPhoneOptions(false);
    }, 300); // 300ms delay before hiding
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-gradient-to-b from-primary-700 via-primary-100 to-white text-primary-700 py-16">
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
              className="hover:text-primary-500"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Its-me-Aleks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-500"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aleksandra-efremova-aleks/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-500"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div>
              <div className="relative">
                <p
                  className="cursor-pointer hover:text-primary-500"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <strong>Phone:</strong> +389 71 232040
                </p>
                {showPhoneOptions && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border border-primary-100"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex items-center px-4 py-2 text-primary-700 hover:bg-primary-50 hover:text-primary-500"
                    >
                      <FaPhone className="w-4 h-4 mr-2" />
                      Call
                    </a>
                    <a
                      href={`viber://chat?number=${phoneNumber}`}
                      className="flex items-center px-4 py-2 text-primary-700 hover:bg-primary-50 hover:text-primary-500"
                    >
                      <FaViber className="w-4 h-4 mr-2" />
                      Viber
                    </a>
                    <a
                      href={`https://wa.me/${phoneNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-primary-700 hover:bg-primary-50 hover:text-primary-500"
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
