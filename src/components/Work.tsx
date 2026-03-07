import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const listRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Get relative position within the section
    if (listRef.current) {
      const rect = listRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <section 
      id="work" 
      className="px-6 md:px-12 pt-12 pb-24 bg-white relative" 
      ref={listRef}
      onMouseMove={handleMouseMove}
    >
      <div className="mb-12 border-b border-zinc-900 pb-4 flex justify-between items-end">
        <h2 className="font-heading text-4xl font-bold uppercase tracking-tighter">Selected Work</h2>
      </div>

      <div className="flex flex-col">
        {projects.map((project) => (
          <Link 
            key={project.id} 
            to={`/projects/${project.slug}`}
            className="block"
          >
            <ProjectRow 
              project={project} 
              onHover={() => setHoveredProject(project.id)}
              onLeave={() => setHoveredProject(null)}
            />
          </Link>
        ))}
      </div>

      {/* Floating Image Reveal */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: mousePosition.x + 20,
              y: mousePosition.y - 150
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-none absolute top-0 left-0 z-20 w-[400px] h-[300px] hidden md:block overflow-hidden rounded-lg shadow-2xl"
          >
            {projects.map((p) => (
               p.id === hoveredProject && (
                 <img 
                   key={p.id}
                   src={p.image} 
                   alt={p.title}
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
               )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const ProjectRow: React.FC<{ 
  project: any; 
  onHover: () => void; 
  onLeave: () => void; 
}> = ({ project, onHover, onLeave }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-zinc-200 cursor-pointer transition-colors hover:bg-zinc-50"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-baseline gap-4 md:gap-12">
        <span className="text-zinc-300 group-hover:text-zinc-500 transition-colors">
          <ArrowRight size={16} />
        </span>
        <h3 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-zinc-900 group-hover:text-zinc-500 transition-colors">
          {project.title}
        </h3>
      </div>
      <div className="mt-2 md:mt-0">
        <span className="text-sm font-medium uppercase tracking-widest text-zinc-500 group-hover:text-zinc-900 transition-colors">
          {project.category}
        </span>
      </div>
    </motion.div>
  );
};
