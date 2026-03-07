import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Marquee from "./Marquee";

export default function Footer() {
  return (
    <>
      <Marquee text="Let's work together — Start a project —" />
      <footer id="contact" className="px-6 md:px-12 py-24 bg-white text-zinc-900 border-t border-zinc-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Say Hello */}
        <div>
          <h3 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-6">Say "Hello":</h3>
          <a href="mailto:jsb@johnbolster.design" className="font-heading text-xl font-bold hover:text-zinc-500 transition-colors">
            jsb@johnbolster.design
          </a>
        </div>

        {/* Column 2: Connect */}
        <div>
          <h3 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-6">Connect:</h3>
          <div className="flex flex-col gap-2">
            <a href="https://www.instagram.com/johnbolster.design/" target="_blank" rel="noopener noreferrer" className="font-heading text-lg font-bold hover:text-zinc-500 transition-colors">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/johnbolster/" target="_blank" rel="noopener noreferrer" className="font-heading text-lg font-bold hover:text-zinc-500 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Column 3: Tagline */}
        <div>
          <h3 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-6">Start a Project</h3>
          <p className="font-heading text-2xl font-bold leading-tight">
            Make your brand your biggest asset.
          </p>
        </div>

      </div>

      <div className="mt-24 pt-8 border-t border-zinc-100 flex justify-between items-end">
        <span className="font-heading text-4xl font-bold tracking-tighter uppercase">
          j. <span className="text-zinc-300">+</span> b.
        </span>
        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
          ©2026 john bolster design
        </span>
      </div>
    </footer>
    </>
  );
}
