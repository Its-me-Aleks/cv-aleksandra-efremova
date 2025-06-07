import React from "react";

export const About = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-primary-700 dark:text-primary-400">
        About Me
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <p className="text-gray-700 dark:text-gray-300">
          I am a frontend developer who bridges the gap between technical
          execution and business strategy. With a foundation in marketing,
          business, and IT Law, I specialize in creating engaging web
          applications that are both user-friendly and legally compliant. My
          technical expertise in React, JavaScript, DOM manipulation, and
          LocalStorage was honed through hands-on projects at Brainster Academy,
          enabling me to translate complex business requirements into elegant
          and effective digital solutions.
        </p>
      </div>
    </section>
  );
};
