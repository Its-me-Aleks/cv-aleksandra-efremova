import React from "react";
import { FaEnvelope } from "react-icons/fa";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-primary-700 dark:text-primary-400">
          Get in Touch
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="mailto:efremova_aleksandra@yahoo.com"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-lg font-medium transition-colors"
          >
            <FaEnvelope />
            efremova_aleksandra@yahoo.com
          </a>
        </div>
      </div>
    </section>
  );
};
