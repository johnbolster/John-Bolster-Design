export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  client: string;
  services: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "alliance-180",
    title: "Alliance 180",
    category: "Brand Strategy and Design",
    year: "2018",
    image: "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772739165/A180-1-50_uhu3j4.jpg",
    description: "Alliance180 needed to legitimize an unconventional approach using horse-to-human interaction for trauma recovery among veterans and first responders, while standing apart from traditional mental health programs. We anchored the brand in purpose, peer connection, and physiological science, pairing a compass-inspired logo and grounded color palette with Hero and Caregiver archetypes to build trust and reduce skepticism. The result is a cohesive, mission-forward identity that is honest, action-oriented, and emotionally grounded, serving as both an internal guide and an external rallying point for partners, participants, and benefactors.",
    client: "Alliance 180",
    services: ["Brand Strategy", "Visual Identity", "Web Design"],
    images: [
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772739166/A1805-50_pm98cc.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772739166/A180-8-50_tpsviw.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772739166/A180-7-50_q82zbz.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772739166/A180-2-50_chup0v.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772739165/A180-9-50_hpnlhi.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772739165/Asset_15_c5q1sa.png",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772739165/A180.psd-50_ndnaeu.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772739165/IMG_6652.psd-50_oxcfog.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772739165/Asset_12-50_fjwhdp.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772739165/Asset_16_e1faeu.png"
    ]
  },
  {
    id: 2,
    slug: "king-brothers-dairy",
    title: "King Brothers Dairy",
    category: "Brand Strategy and Design",
    year: "2017",
    image: "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772741871/6_jg6jua.jpg",
    description: "King Brothers Dairy is a family-owned farm with a rich heritage of producing high-quality dairy products. We refreshed their brand identity to honor their legacy while appealing to modern consumers. The new design system emphasizes freshness, tradition, and the farm-to-table connection, using a classic color palette and typography that evokes a sense of nostalgia and trust.",
    client: "King Brothers Dairy",
    services: ["Brand Refresh", "Packaging Design", "Web Design"],
    images: [
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772741870/4_pb4mnm.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772741867/11_xpaay2.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772741867/7_qi3ieh.png",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772741866/19_bkwn2o.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772741862/17_aokwzd.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772741860/16_fyry3c.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772741858/8_mip4nd.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772741855/9_g9l3y9.png"
    ]
  },
  {
    id: 3,
    slug: "dlg",
    title: "DLG",
    category: "Brand Strategy and Design",
    year: "2018",
    image: "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772742866/1_g1vd9h.jpg",
    description: "DLG had grown from a litigation firm into a national force for justice, but their identity hadn't kept pace. They needed a brand that captured their unique position: high-stakes litigation with a moral compass and advocacy that reshapes industries. We built a bold, editorially-driven brand rooted in narrative and integrity. The centerpiece was DNA, a hardcover book designed to feel more manifesto than marketing. Stark black-and-white visuals, typographic storytelling, and a deliberate absence of color (\"because truth gets lost in the gray\") communicate clarity, conviction, and high design standards. The result was more than a brand book. Internally, it galvanized team culture around a shared identity; externally, it elevated perception among clients, peers, and prospective hires. DLG is now positioned not just as legal leaders, but as truth-tellers and change-makers.",
    client: "DLG",
    services: ["Rebranding", "Print Design", "Digital Assets"],
    images: [
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772742867/2_xhtwke.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772742868/4_qzpvn0.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772742869/5_ajfwz4.png",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772742871/6_kmt0b7.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772742872/7a_ri4slx.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772742873/7_epcss9.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772742879/8a_gxsoqk.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772742884/9_vm293p.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772742887/11_hwvfuw.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772742876/15_ql5wug.jpg"
    ]
  },
  {
    id: 4,
    slug: "saint",
    title: "SAINT",
    category: "Brand Design",
    year: "2020",
    image: "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772744368/1-50_g3xpzk.jpg",
    description: "Magnus Medical's SAINT™ technology is a breakthrough in neuromodulation for treatment-resistant depression, but its identity didn't match its innovation. We built a science-forward brand balancing clinical precision with compassion: structured layouts, data-driven visuals, wave-like imagery, and a tone anchored by Hero and Caregiver archetypes. The result is a cohesive system that speaks to both clinicians and patients, communicating SAINT™'s transformative promise of up to 90% remission in just 2.6 days with clarity, credibility, and hope.",
    client: "SAINT",
    services: ["Logo Design", "Apparel Graphics"],
    images: [
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772744369/2-50_siij15.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772744378/3-50_icjqbq.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772744371/4-50_zhlc4w.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772744372/5-50_nws8sr.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772744380/11-50_rv66vh.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772744382/8-50_mehiuo.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772744374/9-50_ug7lu5.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772744381/10-50_oip0yk.jpg",
       "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772744375/7-50_kro8ad.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772819120/6-50_hpkibp.jpg"
    ]
  },
  {
    id: 5,
    slug: "natroba",
    title: "Natroba™",
    category: "Brand Design",
    year: "2020",
    image: "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772746485/1_afgcuj.png",
    description: "Natroba needed to change prescriber behavior in a category dominated by over-the-counter habit, despite OTC treatments carrying a 98.3% resistance rate. The brand needed clinical credibility, urgency, and a clear alternative narrative to move providers toward a prescription-first mindset. We built a bold, data-driven campaign anchored in two imperatives: Rethink and Resolve. A high-contrast visual system paired macro lice imagery with stark typography and a confident color palette to command attention in clinical settings. Messaging led with resistance science and efficacy data to reframe the conversation around treatment failure. The result was a cohesive campaign across print, digital, and presentation formats that gave providers a compelling reason to act, positioning Natroba as the evidence-based answer to a pervasive and underestimated problem.",
    client: "Natroba™",
    services: ["Campaign Design", "Social Media Graphics"],
    images: [
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772746481/2_uusram.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772746494/3_eha3yn.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772746482/4_ci7kll.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772746491/5_xjdh6v.png",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772746487/6_zsoj4p.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772746493/7_utcl92.png",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772746485/8_ukru82.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772746489/9_fqcije.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772746480/10_fraqua.png"
    ]
  },
  {
    id: 6,
    slug: "finishline",
    title: "Finishline",
    category: "Art Direction/Design",
    year: "2016",
    image: "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772818230/1_ajppmc.jpg",
    description: "This billion-dollar athletic retailer had more than 700 stores and thousands of employees. To support ongoing hiring needs, the company needed to inspire and attract the best candidates from among a diverse 20-something demographic—men and women from all over the United States seeking fulfilling careers with a socially responsible employer. The resulting brand book were displayed and distributed on-site and at job fairs.",
    client: "Finishline",
    services: ["Brand Strategy", "Visual Identity"],
    images: [
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772818232/3_lxi3wv.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772818227/5_yscwdj.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772818237/7_tkykmr.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772818238/8_axyh1a.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772818228/4_lzrxip.jpg"
    ]
  }
];
