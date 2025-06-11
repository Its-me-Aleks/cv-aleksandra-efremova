import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { config } from "../config";

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2
          id="contact-heading"
          className="text-3xl font-bold mb-8 text-primary-700 dark:text-primary-400"
        >
          Get in Touch
        </h2>
        <div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center"
          role="region"
          aria-label="Contact information"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href={`mailto:${config.contact.email}`}
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-lg font-medium transition-colors"
            aria-label={`Send email to ${config.contact.email}`}
            rel="noopener noreferrer"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                window.location.href = `mailto:${config.contact.email}`;
              }
            }}
          >
            <FaEnvelope aria-hidden="true" />
            <span>{config.contact.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
