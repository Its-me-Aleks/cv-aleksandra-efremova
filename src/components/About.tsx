import React from "react";

export const About = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-primary-700 dark:text-primary-400">
        About Me
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I am a passionate frontend developer with a strong foundation in
          modern web technologies. My journey in web development began at
          Brainster Academy, where I mastered HTML5, CSS3, JavaScript, and
          React.js. I specialize in creating responsive, user-friendly
          interfaces using modern frameworks and best practices.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          With expertise in React.js, TypeScript, and Next.js, I build
          performant and scalable web applications. I'm particularly skilled in
          state management, component architecture, and implementing responsive
          designs that work seamlessly across all devices.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          My background in business and IT Law gives me a unique perspective on
          creating user-friendly applications that are both technically sound
          and legally compliant. I'm constantly learning and adapting to new
          technologies, with a focus on writing clean, maintainable code and
          following modern frontend development practices.
        </p>
      </div>
    </section>
  );
};
