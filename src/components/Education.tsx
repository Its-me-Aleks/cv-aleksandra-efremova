import React from "react";

export const Education = () => {
  const education = [
    {
      degree: "Frontend Developer",
      institution: "Brainster Academy",
      period: "December 2023 - June 2025",
      location: "Macedonia",
    },
    {
      degree: "Bachelor of Laws",
      institution:
        'International Slavic University "Gavrilo Romanovich Derzhavin"',
      period: "September 2010 - June 2014",
      location: "Macedonia",
    },
    {
      degree: "Trade and Marketing Technician",
      institution: 'SOU "Ljupco Santov" - Kochani',
      period: "September 2006 - May 2010",
      location: "Macedonia",
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="border-l-4 border-primary-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {edu.degree}
              </h3>
              <div className="text-gray-600">
                <p className="font-medium">{edu.institution}</p>
                <p>
                  {edu.period} | {edu.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
