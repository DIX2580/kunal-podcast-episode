// components/Preloader.js
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const letterAnimation = {
  hidden: { opacity: 0, y: -50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
  disassemble: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.5,
    },
  },
};

const Preloader = ({ setLoading }) => {
  const [disassemble, setDisassemble] = useState(false);
  const mishka = "MISHKA".split("");
  const productions = "Productions".split("");

  useEffect(() => {
    const totalAnimationTime = (mishka.length + productions.length) * 200 + 2000;
    const disassembleTime = totalAnimationTime + 1000; // Adding 1 second delay before disassemble

    const timeout = setTimeout(() => {
      setDisassemble(true);
    }, disassembleTime);

    const removeTimeout = setTimeout(() => {
      setLoading(false);
    }, disassembleTime + 500); // 0.5 seconds for disassemble animation

    return () => {
      clearTimeout(timeout);
      clearTimeout(removeTimeout);
    };
  }, [setLoading, mishka.length, productions.length]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="text-4xl font-bold flex space-x-2 hover:text-yellow-500 hover:underline text-amber-400 font-episode">
        {mishka.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate={disassemble ? "disassemble" : "visible"}
            variants={letterAnimation}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="mt-2 text-2xl flex font-bold text-amber-400 font-episode">
        {productions.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate={disassemble ? "disassemble" : "visible"}
            variants={letterAnimation}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <motion.div
        className="mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          delay: mishka.length * 0.2 + productions.length * 0.2 + 0.5,
          duration: 1,
        }}
      >
        <img
          src="/mishkaproductions.png"
          alt="Mishka Productions Logo"
          className="w-50 h-50"
        />
      </motion.div>
    </div>
  );
};

export default Preloader;
