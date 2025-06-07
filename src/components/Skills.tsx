import React from "react";

export const Skills = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-primary-700 dark:text-primary-400">
        Skills
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-400 mb-4">
              Technical Skills
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                HTML & CSS: Strong experience in building responsive and
                accessible web pages
              </li>
              <li>
                JavaScript: Proficient with DOM manipulation, event handling,
                and modern frameworks like React
              </li>
              <li>
                Email Template Development: Expertise in building responsive
                templates with tools like Mailchimp, Salesforce, and HubSpot
              </li>
              <li>
                WordPress Development: Skilled in building custom, modular, and
                editable themes from scratch
              </li>
              <li>
                QA & Testing: Knowledgeable in cross-browser and device testing
                using tools like Browser Stack
              </li>
              <li>
                SEO: Familiar with best practices, including heading tags,
                redirects, and canonical URLs
              </li>
              <li>
                Design Tools: Decent experience with Photoshop and Illustrator
                for asset extraction and optimization
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-400 mb-4">
              Soft Skills
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Strong communication and teamwork abilities</li>
              <li>Excellent time management and problem-solving skills</li>
              <li>Adaptable, quick learner, and able to work under pressure</li>
              <li>A strong eye for design with great attention to detail</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-400 mt-6 mb-4">
              Languages
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-700 dark:text-gray-300">
                <p className="font-medium">Macedonian</p>
                <p>Native</p>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                <p className="font-medium">English</p>
                <p>Excellent</p>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                <p className="font-medium">Serbian</p>
                <p>Excellent</p>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                <p className="font-medium">Bulgarian</p>
                <p>Excellent</p>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                <p className="font-medium">Croatian</p>
                <p>Excellent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
