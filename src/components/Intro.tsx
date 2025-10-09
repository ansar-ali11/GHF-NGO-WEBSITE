import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/ghf-logo1.jpg";

const Intro = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3500); // animation lasts ~3.5s
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-sky-200 to-white z-[9999]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Wave animation background overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(120deg,rgba(255,255,255,0.3)_25%,rgba(173,216,230,0.3)_50%,rgba(255,255,255,0.3)_75%)]"
            animate={{ backgroundPositionX: ["0%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              backgroundSize: "200% 200%",
              filter: "blur(50px)",
            }}
          />
        </div>

        {/* Circular logo */}
        <motion.img
          src={logo}
          alt="Giving Hands Foundation"
          className="w-64 h-64 object-cover rounded-full border-4 border-sky-400 shadow-2xl relative z-10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Text / tagline */}
        <motion.h2
          className="text-sky-700 font-semibold text-xl mt-6 tracking-wide relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Giving Hands foundation
        </motion.h2>
      </motion.div>
    </AnimatePresence>
  );
};

export default Intro;
