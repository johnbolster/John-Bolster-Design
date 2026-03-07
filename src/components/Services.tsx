import React from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const services = [
  {
    category: "Brand Strategy",
    items: [
      "Positioning & Differentiation",
      "Brand Purpose & Values Discovery",
      "Audience Definition & Persona Mapping",
      "Brand Archetype Alignment",
      "Competitive Analysis & Landscape Mapping"
    ]
  },
  {
    category: "Verbal Identity",
    items: [
      "Brand Voice & Tone Guidelines",
      "Mission, Vision, and Onlyness Statements"
    ]
  },
  {
    category: "Visual Identity",
    items: [
      "Logo Design",
      "Typography & Color Systems",
      "Visual Style Guidelines",
      "Iconography & Custom Patterns",
      "Art Direction & Imagery Framework"
    ]
  },
  {
    category: "Brand Systems and Guidelines",
    items: [
      "Brand Playbooks",
      "Modular Identity Systems",
      "Usage Standards (for in-house and external teams)"
    ]
  }
];

export default function Services() {
  return (
    <section className="px-6 md:px-12 py-24 bg-zinc-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Column: Title & Image */}
        <div className="md:sticky md:top-24 h-fit">
          <h2 className="font-heading text-4xl font-bold uppercase tracking-tighter mb-8">What I Do</h2>
          <div className="w-full max-w-sm aspect-[3/4] overflow-hidden rounded-lg bg-zinc-800">
            <img 
              src="https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772894794/john-bolster_dl0ab8.jpg" 
              alt="John Bolster" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Column: List */}
        <div className="flex flex-col gap-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-zinc-800 pb-8 last:border-0"
            >
              <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6 text-zinc-400">
                {service.category}
              </h3>
              <ul className="flex flex-col gap-3">
                {service.items.map((item, i) => (
                  <li key={i} className="font-heading text-xl md:text-2xl font-bold tracking-tight">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
