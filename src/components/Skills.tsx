import React from "react";

export const Skills = () => {
  const technicalSkills = [
    "HTML & CSS: Strong experience in building responsive and accessible web pages",
    "JavaScript: Proficient with DOM manipulation, event handling, and modern frameworks like React",
    "Email Template Development: Expertise in building responsive templates with tools like Mailchimp, Salesforce, and HubSpot",
    "WordPress Development: Skilled in building custom, modular, and editable themes from scratch",
    "QA & Testing: Knowledgeable in cross-browser and device testing using tools like Browser Stack",
    "SEO: Familiar with best practices, including heading tags, redirects, and canonical URLs",
    "Design Tools: Decent experience with Photoshop and Illustrator for asset extraction and optimization",
  ];

  const softSkills = [
    "Strong communication and teamwork abilities",
    "Excellent time management and problem-solving skills",
    "Adaptable, quick learner, and able to work under pressure",
    "A strong eye for design with great attention to detail",
  ];

  const languages = [
    { language: "Macedonian", level: "Native" },
    { language: "English", level: "Excellent" },
    { language: "Serbian", level: "Excellent" },
    { language: "Bulgarian", level: "Excellent" },
    { language: "Croatian", level: "Excellent" },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Skills</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Technical Skills
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {technicalSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Soft Skills
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Languages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">
                    {lang.language}
                  </span>
                  <span className="text-gray-600">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
