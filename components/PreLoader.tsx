"use client"; // Required for Next.js App Router

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
      onComplete(); // Notify parent when animation is done
    }, 2000);
  }, []);

  return (
    isVisible && (
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.18, 1] }} // Smooth cubic bezier effect
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black text-white text-4xl font-bold z-50"
      >
        Max Pratt
      </motion.div>
    )
  );
}
