import React from "react";

export const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Trainee",
      company: "Kodeo",
      location: "Skopje, North Macedonia",
      period: "December 2023 - Present",
      responsibilities: [
        "Develop and optimize responsive email templates",
        "Build HTML5 display ads and assist with testing and QA",
        "Maintain and optimize client WordPress websites",
        "Collaborate with creative teams and project managers on technical requirements",
      ],
    },
    {
      title: "Accounting Manager",
      company: "LUKOIL Makedonija",
      location: "Skopje, North Macedonia",
      period: "August 2020 - Present",
      responsibilities: [
        "Generated daily sales reports for management",
        "Managed accounting department operations and produced financial statements",
        "Oversaw supply chain management and vendor coordination",
      ],
    },
    {
      title: "Cabin Crew",
      company: "Qatar Airways",
      period: "November 2018 - June 2020",
      responsibilities: [
        "Assisted passengers with boarding and provided inflight service to ensure safety and comfort",
      ],
    },
    {
      title: "Youth Staff",
      company: "Carnival Cruise Line",
      period: "June 2014 - May 2016",
      responsibilities: [
        "Managed activities for children and maintained professional communication with parents",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-primary-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {exp.title}
              </h3>
              <div className="text-gray-600 mb-2">
                <span className="font-medium">{exp.company}</span>
                {exp.location && <span> | {exp.location}</span>}
                <span> | {exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
