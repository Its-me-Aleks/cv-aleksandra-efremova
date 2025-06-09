import React from "react";

export const Experience = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-primary-700 dark:text-primary-400">
        Work Experience
      </h2>
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-400">
            Frontend Developer Trainee
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Kodeo | Skopje, North Macedonia
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            December 2024 - Present
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li>Develop and optimize responsive email templates</li>
            <li>Build HTML5 display ads and assist with testing and QA</li>
            <li>Maintain and optimize client WordPress websites</li>
            <li>
              Collaborate with creative teams and project managers on technical
              requirements
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-400">
            Accounting Manager
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            LUKOIL Makedonija | Skopje, North Macedonia
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            August 2020 - Present
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li>Generated daily sales reports for management</li>
            <li>
              Managed accounting department operations and produced financial
              statements
            </li>
            <li>Oversaw supply chain management and vendor coordination</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-400">
            Cabin Crew
          </h3>
          <p className="text-gray-700 dark:text-gray-300">Qatar Airways</p>
          <p className="text-gray-700 dark:text-gray-300">
            November 2018 - June 2020
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li>
              Assisted passengers with boarding and provided inflight service to
              ensure safety and comfort
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-400">
            Youth Staff
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Carnival Cruise Line
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            June 2014 - May 2016
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li>
              Managed activities for children and maintained professional
              communication with parents
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
