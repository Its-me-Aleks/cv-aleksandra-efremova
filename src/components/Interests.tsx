export const Interests = () => {
  const interests = [
    "Social media marketing",
    "Frontend web development (WordPress)",
    "UI/design (Figma)",
    "Playing tennis",
    "Volunteering to rescue stray dogs",
  ];

  return (
    <section id="interests" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Other Interests
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
