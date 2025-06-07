import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  sourceUrl: string;
}

const projects: Project[] = [
  {
    name: "E-commerce Store",
    description:
      "A fully functional e-commerce website with product listings, a shopping cart, and a checkout process.",
    technologies: ["React", "Redux", "Stripe API"],
    demoUrl: "https://demo-ecommerce.com",
    sourceUrl: "https://github.com/your-username/ecommerce",
  },
  {
    name: "Task Management App",
    description:
      "A simple and intuitive app for managing daily tasks with drag-and-drop functionality.",
    technologies: ["React", "TypeScript", "LocalStorage"],
    demoUrl: "https://demo-taskmanager.com",
    sourceUrl: "https://github.com/your-username/task-manager",
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-primary-700 dark:text-primary-400">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-primary-400">
              {project.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
              >
                <FaGithub />
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
