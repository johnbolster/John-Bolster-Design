import React from "react";
import { motion } from "motion/react";

export default function Marquee({ text }: { text: string }) {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4 border-t border-b border-zinc-100 bg-zinc-50">
      <motion.div
        className="inline-block"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        <span className="font-heading text-4xl md:text-8xl font-bold uppercase tracking-tighter text-zinc-300 mr-12">
          {text}
        </span>
        <span className="font-heading text-4xl md:text-8xl font-bold uppercase tracking-tighter text-zinc-300 mr-12">
          {text}
        </span>
        <span className="font-heading text-4xl md:text-8xl font-bold uppercase tracking-tighter text-zinc-300 mr-12">
          {text}
        </span>
        <span className="font-heading text-4xl md:text-8xl font-bold uppercase tracking-tighter text-zinc-300 mr-12">
          {text}
        </span>
      </motion.div>
    </div>
  );
}
