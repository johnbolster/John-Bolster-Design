import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-start mix-blend-difference text-white"
    >
      <Link to="/" className="font-heading text-2xl font-bold tracking-tighter uppercase leading-none">
        john <br />
        <span className="text-zinc-400">+</span> bolster
      </Link>
    </motion.nav>
  );
}


