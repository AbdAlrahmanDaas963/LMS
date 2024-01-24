import React from "react";

import { Stack } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { motion } from "framer-motion";

import AnimHeader from "../../components/AnimHeader";
import MyAppBar from "../../components/MyAppBar";
import MyHeader from "./MyHeader";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import TheSection from "./TheSection";

import students from "../../assets/svg/landing/students.svg";
import teachers from "../../assets/svg/landing/teachers.svg";
import courses from "../../assets/svg/landing/courses.svg";

function Landing() {
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
    <Stack
      sx={{
        backgroundColor: "#fff",
        position: "relative",
        paddingTop: "70px",
        overflowX: "hidden",
      }}
    >
      {/* <AnimHeader /> */}
      {/* <MyAppBar /> */}
      <MyHeader />
      <motion.div
        className="floating-btn"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        onClick={handleButtonClick}
      >
        <ArrowDownwardIcon />
      </motion.div>

      <Section1 />
      <TheSection
        img={students}
        title={"1140+ طالب يستمتعون بميزات لا تقدر بثمن"}
        desc={
          "نحن هنا لجعل تجربتكم التعليمية ممتعة وناجحة! انضموا إلينا اليوم واستعدوا لاستكشاف عالم المعرفة بأسلوب مرح ومبتكر"
        }
        num={2}
      />
      <TheSection
        img={teachers}
        reverse={true}
        title={"1140+ طالب يستمتعون بميزات لا تقدر بثمن"}
        desc={
          "نحن هنا لجعل تجربتكم التعليمية ممتعة وناجحة! انضموا إلينا اليوم واستعدوا لاستكشاف عالم المعرفة بأسلوب مرح ومبتكر"
        }
        num={3}
      />
      <TheSection
        img={courses}
        title={"1140+ طالب يستمتعون بميزات لا تقدر بثمن"}
        desc={
          "نحن هنا لجعل تجربتكم التعليمية ممتعة وناجحة! انضموا إلينا اليوم واستعدوا لاستكشاف عالم المعرفة بأسلوب مرح ومبتكر"
        }
        num={4}
      />
      {/* <Section2 /> */}
      {/* <Section3 /> */}
      {/* <Section4 /> */}
      <Section5 />
    </Stack>
  );
}

export default Landing;
