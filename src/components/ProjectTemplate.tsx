import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ProjectTemplate() {
  // Hardcoded for the template or use params if flexible
  const { slug } = useParams<{ slug: string }>();
  // Default to finishline if no slug, or look up based on slug
  const project = projects.find((p) => p.slug === slug || p.slug === "finishline");

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-zinc-900">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-zinc-500 hover:text-zinc-900 underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans text-zinc-900 selection:bg-black selection:text-white project-template">
      <Navbar />
      
      <main className="pt-40 pb-24 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-screen-xl mx-auto"
        >
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <div className="mb-8">
              <Link 
                to="/" 
                className="relative z-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </Link>
            </div>
            
            <h1 className="font-heading text-[10vw] leading-[0.8] font-bold tracking-tighter text-zinc-900 mb-4 uppercase">
              {project.title}
            </h1>
            <p className="font-heading text-2xl md:text-3xl font-medium text-zinc-400 uppercase tracking-tight">
              {project.category}
            </p>
          </div>

          {/* Project Details Grid - Template Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
            {/* Description */}
            <div className="md:col-span-8">
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight mb-4">About the project</h3>
              <p className="text-lg md:text-xl leading-relaxed text-zinc-600 max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Metadata */}
            <div className="md:col-span-4 flex flex-col gap-8 border-l border-zinc-200 pl-8 md:pl-12">
              <div>
                <h4 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">Client</h4>
                <p className="font-heading text-xl font-bold">{project.client}</p>
              </div>
              <div>
                <h4 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-2">Services</h4>
                <ul className="font-heading text-xl font-bold">
                  {project.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image Gallery - Template Layout */}
          <div className="space-y-8 md:space-y-16">
            {/* Hero Image */}
            <div className="w-full aspect-video overflow-hidden rounded-lg bg-zinc-100">
              <img 
                src={project.image} 
                alt={`${project.title} Hero`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Additional Images */}
            <div className="grid grid-cols-1 gap-8">
              {project.images.map((img, index) => (
                <div key={index} className="w-full overflow-hidden rounded-lg bg-zinc-100 aspect-auto">
                  <img 
                    src={img} 
                    alt={`${project.title} Detail ${index + 1}`} 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next Project Link */}
          <div className="mt-32 border-t border-zinc-200 pt-16 flex justify-between items-center">
             <span className="text-sm font-medium uppercase tracking-widest text-zinc-500">Next Project</span>
             <Link 
               to={`/projects/${projects[(projects.findIndex(p => p.id === project.id) + 1) % projects.length].slug}`}
               className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tighter hover:text-zinc-500 transition-colors"
             >
               {projects[(projects.findIndex(p => p.id === project.id) + 1) % projects.length].title}
             </Link>
          </div>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
