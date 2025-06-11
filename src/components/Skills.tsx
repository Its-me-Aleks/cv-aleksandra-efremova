import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const Skills = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // If user prefers reduced motion, use simpler animations
  if (prefersReducedMotion) {
    return (
      <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-primary-700 dark:text-primary-400">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Development */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-400">
                Frontend Development
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  HTML5 & Semantic Markup
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  CSS3 & Modern Layouts (Flexbox, Grid)
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  JavaScript (ES6+)
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  TypeScript
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  React.js & Hooks
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Next.js
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Context API & State Management
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Responsive Design & Media Queries
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Sass/SCSS
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Bootstrap
                </li>
              </ul>
            </div>

            {/* Development Tools */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-400">
                Development Tools
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Git & GitHub
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  VS Code
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Chrome DevTools
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Firebase
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  npm/yarn
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Webpack/Vite
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Responsive Design Testing
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Browser Compatibility
                </li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-400">
                Soft Skills
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Problem Solving
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Team Collaboration
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Communication
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Time Management
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Attention to Detail
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Adaptability
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  UX/UI Understanding
                </li>
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-400">
                Languages
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Macedonian (Native)
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  English (Fluent)
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Serbian (Fluent)
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Bulgarian (Fluent)
                </li>
                <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Croatian (Intermediate)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold mb-8 text-primary-700 dark:text-primary-400"
        >
          Skills
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Frontend Development */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-400">
              Frontend Development
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                HTML5 & Semantic Markup
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                CSS3 & Modern Layouts (Flexbox, Grid)
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                JavaScript (ES6+)
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                TypeScript
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                React.js & Hooks
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Next.js
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Context API & State Management
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Responsive Design & Media Queries
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Sass/SCSS
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Bootstrap
              </li>
            </ul>
          </motion.div>

          {/* Development Tools */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-400">
              Development Tools
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Git & GitHub
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                VS Code
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Chrome DevTools
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Firebase
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                npm/yarn
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Webpack/Vite
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Responsive Design Testing
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Browser Compatibility
              </li>
            </ul>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-400">
              Soft Skills
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Problem Solving
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Team Collaboration
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Communication
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Time Management
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Attention to Detail
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Adaptability
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                UX/UI Understanding
              </li>
            </ul>
          </motion.div>

          {/* Languages */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-400">
              Languages
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Macedonian (Native)
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                English (Fluent)
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Serbian (Fluent)
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Bulgarian (Fluent)
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Croatian (Intermediate)
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
