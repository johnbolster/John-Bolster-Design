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
    description: "Most employee engagement programs struggle to translate effort into measurable impact. Alliance 180 needed a clearer way to show both purpose and performance.\n\nWe created a brand system that brings structure and energy to the story. The visual language uses bold typography, geometric forms, and a vibrant color palette to reflect momentum and scale.\n\nMessaging focuses on outcomes, highlighting the connection between employee action, community impact, and business results. The tone is optimistic and direct, designed to resonate across a broad internal audience.\n\nThe result is a flexible brand system that turns participation into something visible, measurable, and motivating across the organization.",
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
    description: "King Brothers Dairy had everything most brands rely on: strong product, deep history, and local trust. What they lacked was memorability. In a category defined by sameness, where every competitor leans on “fresh,” “local,” and “family-owned,” the brand was getting lost despite doing everything right.\n\nThis was not about modernizing the look. It was about creating distinction. Instead of doubling down on heritage in the expected way, we built a brand around personality. Something that still respected its roots, but showed up with confidence and a clear point of view.\n\nThe idea was simple: Drink like a King. From there, the system came to life. A crown became the unifying symbol across packaging, environment, and merchandise, supported by a bold, flexible visual language that could scale across touchpoints.\n\nThe result is a brand that still feels grounded in the farm, but now shows up in a way people notice, remember, and talk about.",
    client: "King Brothers Dairy",
    services: ["Brand Strategy", "Brand Identity", "Environmental Design"],
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
    image: "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1775302294/DLG_MG_5557-Edit-print_eipjl6.jpg",
    description: "DLG had evolved into a national force in high-stakes litigation, but their identity hadn’t caught up. They needed a brand that reflected both their scale and their stance: advocacy rooted in conviction, not just expertise.\n\nWe built a bold, editorially-driven identity centered on narrative and truth. The system strips away excess. Stark black-and-white visuals, precise typography, and a deliberate absence of color based on a simple idea: when everything is gray, clarity gets lost.\n\nAt the center is DNA, a hardcover brand book designed as a manifesto, not a marketing piece. It articulates who they are, what they stand for, and the standard they hold themselves to both internally and externally.\n\nThe result is more than a visual identity. It’s a unifying framework that aligns the team, sharpens perception, and positions DLG as not just litigators, but principled advocates shaping outcomes that matter.",
    client: "DLG",
    services: ["Rebranding", "Print Design", "Digital Assets"],
    images: [
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772742866/1_g1vd9h.jpg",
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
    description: "Treatment-resistant depression leaves patients cycling through options that often fail. SAINT was built to change that, but its identity did not reflect the breakthrough.\n\nWe repositioned the brand around clarity, credibility, and hope. The system balances clinical precision with human empathy through structured layouts, data-driven visuals, and fluid, wave-like imagery that suggests restoration.\n\nThe tone is grounded and confident. It speaks to clinicians with evidence and to patients with reassurance.\n\nThe result is a cohesive, science-forward brand that communicates SAINT’s potential for rapid, meaningful outcomes, including remission in as little as 2.6 days.",
    client: "SAINT",
    services: ["Brand Identity"],
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
    description: "Over-the-counter lice treatments fail at scale, with resistance rates reaching 98.3%. Despite that, they remain the default.\n\nNatroba needed to shift prescriber behavior and reframe the conversation around treatment failure and efficacy.\n\nWe built the campaign around two clear imperatives: Rethink and Resolve. The visual system is bold and direct, using high-contrast color, stark typography, and macro imagery to command attention in clinical environments.\n\nMessaging leads with resistance data and clinical performance to create urgency and establish a clear alternative.\n\nThe result is a focused, evidence-driven campaign that challenges outdated habits and positions Natroba as the prescription-first solution.",
    client: "Natroba™",
    services: ["Brand Identity Update"],
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
    description: "Finish Line needed to attract a new generation of talent across more than 700 stores. The goal was to connect with candidates in their twenties who wanted purpose, growth, and a sense of belonging.\n\nWe created a recruitment brand book built on energy and momentum. The visual language draws from sport and movement, using layered typography, dynamic composition, and a bold color system to create impact.\n\nThe messaging emphasizes opportunity over role and highlights the culture behind the brand.\n\nThe result is a recruitment piece designed for real-world use across stores and job fairs, positioning Finish Line as a place where ambition translates into action.",
    client: "Finishline",
    services: ["Creative Direction", "Art Direction"],
    images: [
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772818232/3_lxi3wv.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772818227/5_yscwdj.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772818237/7_tkykmr.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772818238/8_axyh1a.jpg",
      "https://res.cloudinary.com/dnf3dn2wb/image/upload/v1772818228/4_lzrxip.jpg"
    ]
  }
];
