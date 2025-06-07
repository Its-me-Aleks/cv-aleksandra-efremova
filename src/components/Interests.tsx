import React from "react";

export const Interests = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-primary-700 dark:text-primary-400">
        Other Interests
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Social media marketing</li>
          <li>Frontend web development (WordPress)</li>
          <li>UI/design (Figma)</li>
          <li>Playing tennis</li>
          <li>Volunteering to rescue stray dogs</li>
        </ul>
      </div>
    </section>
  );
};
