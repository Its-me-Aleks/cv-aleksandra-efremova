import React, { useState, useEffect } from "react";
import { FaArrowUp, FaDownload } from "react-icons/fa";

export const FloatingButtons: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [downloadError, setDownloadError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
      // Show Download button only at the bottom
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setShowDownload(atBottom);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownload = () => {
    try {
      // Try to open the PDF in a new tab
      const pdfWindow = window.open("/cv-aleksandra-efremova.pdf", "_blank");

      // If the window couldn't be opened, show error
      if (!pdfWindow) {
        setDownloadError(true);
        setTimeout(() => setDownloadError(false), 3000); // Hide error after 3 seconds
      }
    } catch (error) {
      console.error("Error downloading PDF:", error);
      setDownloadError(true);
      setTimeout(() => setDownloadError(false), 3000);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-colors duration-200"
          aria-label="Back to top"
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      )}
      {showDownload && (
        <button
          onClick={handleDownload}
          className="bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-colors duration-200 relative"
          aria-label="Download CV"
        >
          <FaDownload className="w-6 h-6" />
          {downloadError && (
            <div className="absolute bottom-full right-0 mb-2 bg-red-500 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
              PDF not found
            </div>
          )}
        </button>
      )}
    </div>
  );
};
