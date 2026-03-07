import React from 'react';

const logos = [
  "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772819699/tmp240ktrb9_njk6xu.webp",
  "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772819717/tmprpw_p0hp_gxfbjh.webp",
  "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772819705/tmpepf541gr_loicjz.webp",
  "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772819711/tmpnypzc8t1_x53eyw.svg",
  "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772819709/tmpumxr33ak_mrywh6.svg",
  "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772819712/tmpvw2exm1a_vz0lbi.webp",
  "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772819707/tmp81z033jl_ufad6x.webp",
  "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772819703/tmpl3hsbjfa_avtf4d.webp",
  "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772819700/tmpf42gyhxc_itw0uh.webp",
  "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772819715/tmpkobwvo75_keobip.webp"
];

export default function LogoGrid() {
  return (
    <section className="bg-white pt-24 pb-12 px-6 md:px-12">
      <div className="mb-12 border-b border-zinc-900 pb-4">
        <h2 className="font-heading text-4xl font-bold uppercase tracking-tighter">Who I've Worked With</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-16 items-center justify-items-center md:justify-items-start">
        {logos.map((logo, index) => (
          <div key={index} className="w-32 h-16 flex items-center justify-center md:justify-start">
            <img 
              src={logo} 
              alt={`Client logo ${index + 1}`} 
              className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
