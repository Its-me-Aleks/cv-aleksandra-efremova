import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-white via-primary-100 to-primary-700 py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-800 font-medium">
          © {new Date().getFullYear()} Aleksandra Efremova. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
