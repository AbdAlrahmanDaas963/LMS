import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <div ref={ref} style={{ width: "100%", textAlign: "center" }}>
        <img
          src={`/${id}.jpg`}
          alt="A London skyscraper"
          style={{ maxWidth: "100%" }}
        />
      </div>
      <motion.h2
        style={{
          y,
          position: "absolute",
          left: "50%",
          top: "50%",
          translate: "-50%, -50%",
        }}
      >{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function AnimatedPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div style={{ position: "relative" }}>
      {[1, 2, 3, 4, 5].map((image) => (
        <Image key={image} id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}
