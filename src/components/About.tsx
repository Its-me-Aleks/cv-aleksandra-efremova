export const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">About Me</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed">
            As a passionate frontend developer, I blend my high school education
            in marketing and business with technical expertise to create
            user-focused solutions that align with business objectives. My
            experience includes React, JavaScript, DOM manipulation, event
            handling, and LocalStorage, which I use to develop dynamic and
            user-friendly web applications.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            My background in Information Technology Law, Intellectual Property
            Law, and E-Commerce provides a unique perspective, allowing me to
            build applications that are both engaging and compliant with legal
            frameworks. My work at Brainster Academy has involved a variety of
            projects, from image galleries to expense trackers, all aimed at
            solving complex problems with elegant solutions.
          </p>
        </div>
      </div>
    </section>
  );
};
