"use client"
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, Element } from "react-scroll";
import HeroSection from "./components/HeroSection";
import Episodes from "./components/Episodes";
import Previousepisodes from "./components/Previousepisodes";
import Review from "./components/Review";

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <Episodes />
      <main className="min-h-screen">
        <Element name="previous-episodes">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            <Previousepisodes />
          </motion.div>
        </Element>
        <Review />
      </main>
    </main>
  );
}
