import React from "react";

export const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-primary-700 dark:text-primary-400">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Technical Skills Card - Long */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-400">
              Technical Skills
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Git & GitHub</li>
              <li>Responsive Design</li>
              <li>WordPress Development</li>
              <li>Email Template Development</li>
              <li>QA & Testing</li>
              <li>SEO Best Practices</li>
              <li>Design Tools (Photoshop, Illustrator)</li>
            </ul>
          </div>

          {/* Right Column - Two Short Cards */}
          <div className="space-y-6">
            {/* Soft Skills Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-400">
                Soft Skills
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Communication</li>
                <li>Time Management</li>
                <li>Attention to Detail</li>
                <li>Adaptability</li>
              </ul>
            </div>

            {/* Languages Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-400">
                Languages
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Macedonian (Native)</li>
                <li>English (Fluent)</li>
                <li>Serbian (Fluent)</li>
                <li>Bulgarian (Fluent)</li>
                <li>Croatian (Intermediate)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
