// Header.js
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimHeader = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const controls = useAnimation();

  const scrollToSection = (sectionNumber) => {
    const sectionElement = document.querySelector(`.section-${sectionNumber}`);
    if (sectionElement) {
      const sectionTop = sectionElement.offsetTop;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      let currentSectionIndex = 1;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          currentSectionIndex = index + 1;
        }
      });

      setCurrentSection(currentSectionIndex);
    };

    // Animate the background box when the current section changes
    controls.start({
      x: `${(currentSection - 1) * 100}%`,
      transition: { duration: 0.5, type: "spring", stiffness: 120 },
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection, controls]);

  return (
    <div className="landing-header">
      <motion.div className="background-box" animate={controls} />

      <div>
        <button onClick={() => scrollToSection(1)}>Section 1</button>
        <button onClick={() => scrollToSection(2)}>Section 2</button>
        <button onClick={() => scrollToSection(3)}>Section 3</button>
        <button onClick={() => scrollToSection(4)}>Section 4</button>
        <button onClick={() => scrollToSection(5)}>Section 5</button>
      </div>
      <div>Current Section: {currentSection}</div>
    </div>
  );
};

export default AnimHeader;
