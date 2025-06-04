import React from "react";
import { FaEnvelope } from "react-icons/fa";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-primary-700">Get in Touch</h2>
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <p className="text-lg text-gray-700 mb-6">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <a
          href="mailto:efremova_aleksandra@yahoo.com"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 text-lg font-medium"
        >
          <FaEnvelope />
          efremova_aleksandra@yahoo.com
        </a>
      </div>
    </section>
  );
};
