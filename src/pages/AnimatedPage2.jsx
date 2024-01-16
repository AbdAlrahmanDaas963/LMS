import React from "react";
import { motion } from "framer-motion";

import AnimHeader from "../components/AnimHeader";

const AnimatedPage2 = () => {
  const handleButtonClick = () => {
    // Logic to scroll to the next section using vanilla JavaScript

    // Get the current section's height (assuming sections have a class name of "section")
    const currentSectionHeight =
      document.querySelector(".section-1").offsetHeight;

    // Calculate the top position of the next section
    const nextSectionTop = window.scrollY + currentSectionHeight;

    // Scroll to the next section
    window.scrollTo({
      top: nextSectionTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <AnimHeader />
      {/* Dummy Section 1 */}
      <div
        className="section section-1"
        style={{
          height: "100vh",
          backgroundColor: "#f0f0f0",
          width: "100vw",
        }}
      >
        <h1>Section 1</h1>
      </div>

      {/* Dummy Section 2 */}
      <div
        className="section section-2"
        style={{
          height: "100vh",
          backgroundColor: "#e0e0e0",
          width: "100vw",
        }}
      >
        <h1>Section 2</h1>
      </div>

      {/* Dummy Section 2 */}
      <div
        className="section section-3"
        style={{
          height: "100vh",
          backgroundColor: "#f0f0f0",
          width: "100vw",
        }}
      >
        <h1>Section 3</h1>
      </div>

      {/* Dummy Section 2 */}
      <div
        className="section section-4"
        style={{
          height: "100vh",
          backgroundColor: "#e0e0e0",
          width: "100vw",
        }}
      >
        <h1>Section 4</h1>
      </div>

      {/* Dummy Section 2 */}
      <div
        className="section section-5"
        style={{
          height: "100vh",
          backgroundColor: "#f0f0f0",
          width: "100vw",
        }}
      >
        <h1>Section 5</h1>
      </div>

      {/* Your other landing page content */}

      {/* Floating button with animation */}
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        onClick={handleButtonClick}
        className="floating-button"
        style={{
          position: "fixed",
          bottom: "100px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Next Section
      </motion.button>
    </div>
  );
};

export default AnimatedPage2;
