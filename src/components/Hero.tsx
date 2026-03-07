import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-12 pt-32 overflow-hidden bg-zinc-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y, opacity }}
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
          alt="Stacked retro TVs with art" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-zinc-900/40" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full"
      >
        {/* Main Headline */}
        <h1 className="font-heading text-[12vw] leading-[0.8] font-bold tracking-tighter text-white mb-6 uppercase mix-blend-overlay">
          John <br />
          Bolster
        </h1>
        <p className="font-heading text-2xl md:text-3xl font-bold text-zinc-400 mb-12 uppercase tracking-tight">
          Brand Strategist & Identity Designer
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8 text-white">
          <StatBlock label="Experience" value="Since 2002" />
          <StatBlock label="Projects" value="More than 250" />
          <StatBlock label="Awards" value="46" />
          
          <div className="flex flex-col justify-between items-start h-full min-h-[120px]">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">Connect</span>
            <div className="flex flex-col gap-1">
               <a href="https://www.instagram.com/johnbolster.design/" target="_blank" rel="noopener noreferrer" className="font-heading text-xl font-bold hover:text-zinc-400 transition-colors">Instagram</a>
               <a href="https://www.linkedin.com/in/johnbolster/" target="_blank" rel="noopener noreferrer" className="font-heading text-xl font-bold hover:text-zinc-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col justify-between items-start h-full min-h-[120px]">
      <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">{label}</span>
      <span className="font-heading text-3xl md:text-4xl font-bold tracking-tight">{value}</span>
    </div>
  );
}
