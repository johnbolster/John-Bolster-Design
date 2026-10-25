import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { JB } from './src/data.js';
import { INTRO, SERVICES, PROCESS, INDUSTRIES, FAQ } from './src/seo-content.js';

const SITE = 'https://johnbolster.design';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const ogFor = (u) => u.replace('/upload/', '/upload/c_fill,g_auto,w_1200,h_630,q_auto,f_jpg/');


// ---------- crawlable text (read by search engines and AI tools that do not run JavaScript) ----------
const para = (t) => t.split('\n').filter(Boolean).map((x) => `<p>${esc(x)}</p>`).join('');
function homeText() {
  return `<div class="seo-text"><h2>About John Bolster</h2><p>${esc(INTRO.summary)}</p>` +
    `<h2>Services</h2><ul>${SERVICES.map((s) => `<li><strong>${esc(s.name)}:</strong> ${esc(s.items.join(', '))}</li>`).join('')}</ul>` +
    `<h2>Selected work</h2><ul>${JB.projects.map((p) => `<li><a href="/projects/${p.slug}">${esc(p.title)}</a>: ${esc(p.seoDescription)}</li>`).join('')}</ul>` +
    `<p><a href="/services">Services and process</a> · <a href="/faq">Frequently asked questions</a></p>` +
    `<h2>Contact</h2><p>${esc(INTRO.location)}. Email <a href="mailto:${INTRO.email}">${INTRO.email}</a>.</p></div>`;
}
function projectText(p) {
  return `<div class="seo-text"><h1>${esc(p.title)}</h1><p>${esc(p.category)}. Client: ${esc(p.client)}. Services: ${esc(p.services.join(', '))}.</p>${para(p.description)}` +
    p.images.map((u, k) => `<img src="${u.replace('/upload/', '/upload/f_auto,q_auto,w_900/')}" alt="${esc(p.title)} image ${k + 1}" loading="lazy">`).join('') +
    `<p><a href="/">John Bolster, brand identity designer and art director in Saratoga Springs, NY</a></p></div>`;
}

// ---------- standalone reading pages: /services and /faq ----------
function page({ title, desc, url, body, ld }) {
  return `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${url}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${SITE}/og.png"><meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><meta name="theme-color" content="#ECEAE2">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500&family=Geist+Mono:wght@400&display=swap">
<style>
@font-face{font-family:"BebasProBold";src:url(/fonts/bebas-neue-pro-semiexp-bold.woff2) format("woff2");font-display:swap}
:root{--bg:#ECEAE2;--ink:#121413;--muted:#5E6360;--hair:#D3D0C6;--line:#2234E0}
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--ink);font:17px/1.6 Geist,ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
a{color:inherit}a:hover{color:var(--line)}
.bar{display:flex;justify-content:space-between;align-items:center;padding:22px max(20px,4vw)}
.bar a{font-family:BebasProBold,Impact,sans-serif;font-size:22px;letter-spacing:.02em;text-decoration:none;text-transform:uppercase}
.bar nav{display:flex;gap:22px;font:12px Geist Mono,monospace;letter-spacing:.14em;text-transform:uppercase}.bar nav a{font:inherit}
main{max-width:860px;margin:0 auto;padding:6vh max(20px,4vw) 12vh}
.k{font:12px Geist Mono,monospace;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
h1{text-transform:uppercase;font-family:BebasProBold,Impact,sans-serif;font-weight:400;font-size:clamp(56px,9vw,120px);line-height:.9;margin:.2em 0 .35em}
h2{text-transform:uppercase;font-family:BebasProBold,Impact,sans-serif;font-weight:400;font-size:clamp(32px,4.4vw,52px);line-height:1;margin:2em 0 .5em}
h3{font-size:19px;margin:1.4em 0 .3em}
.lede{font-size:clamp(19px,2vw,23px);line-height:1.5;max-width:44ch}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:28px 40px}
.grid ul{margin:.4em 0 0;padding-left:1.1em;color:var(--muted)}
ol.steps{list-style:none;padding:0;margin:0;display:grid;gap:18px;counter-reset:s}
ol.steps li{border-top:1px solid var(--hair);padding-top:16px;counter-increment:s}
ol.steps li b{display:block;font-family:BebasProBold,Impact,sans-serif;font-weight:400;font-size:28px}
ol.steps li b:before{content:"0" counter(s) "  ";color:var(--line)}
.tags{display:flex;flex-wrap:wrap;gap:10px;padding:0;list-style:none}
.tags li{border:1px solid var(--hair);border-radius:999px;padding:6px 14px;font-size:14px}
details{border-top:1px solid var(--hair);padding:18px 0}details:last-of-type{border-bottom:1px solid var(--hair)}
summary{cursor:pointer;font-weight:500;font-size:19px;list-style:none;display:flex;justify-content:space-between;gap:20px}
summary::-webkit-details-marker{display:none}summary:after{content:"+";color:var(--line);font-size:24px;line-height:1}
details[open] summary:after{content:"−"}details p{margin:.7em 0 0;color:#2b2e2c;max-width:62ch}
.cta{display:inline-block;margin-top:2.4em;background:var(--ink);color:var(--bg);text-decoration:none;padding:16px 26px;border-radius:999px;font:12px Geist Mono,monospace;letter-spacing:.14em;text-transform:uppercase}
.cta:hover{background:var(--line);color:#fff}
footer{max-width:860px;margin:0 auto;padding:0 max(20px,4vw) 6vh;font:12px Geist Mono,monospace;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);display:flex;gap:22px;flex-wrap:wrap}
</style>
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<script defer src="/_vercel/insights/script.js"></script>
</head><body>
<header class="bar"><a href="/">John Bolster</a><nav><a href="/">Work</a><a href="/services">Services</a><a href="/faq">FAQ</a><a href="mailto:${INTRO.email}">Contact</a></nav></header>
<main>${body}</main>
<footer><a href="/saratoga-springs-brand-designer">${esc(INTRO.location)}</a><a href="/freelance-brand-designer">Remote clients</a><a href="mailto:${INTRO.email}">${INTRO.email}</a><a href="https://www.linkedin.com/in/johnbolster/">LinkedIn</a><a href="https://www.instagram.com/johnbolster.design/">Instagram</a><span>© 2026 John Bolster Design</span></footer>
</body></html>`;
}

function servicesPage() {
  const url = SITE + '/services';
  const body = `<span class="k">Services</span><h1>Brand strategy, identity and design</h1>
<p class="lede">${esc(INTRO.summary)}</p>
<h2>What I do</h2><div class="grid">${SERVICES.map((s) => `<div><h3>${esc(s.name)}</h3><p>${esc(s.text)}</p><ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('')}</div>
<h2>How it works</h2><ol class="steps">${PROCESS.map(([t, d]) => `<li><b>${esc(t)}</b>${esc(d)}</li>`).join('')}</ol>
<h2>Who I work with</h2><p>Businesses and organizations that need a brand they can grow into, and agencies that need a senior freelance art director and designer. Local clients in Saratoga Springs and the Capital Region, and <a href="/freelance-brand-designer">remote clients anywhere in the US</a>.</p>
<ul class="tags">${INDUSTRIES.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
<h2>Selected work</h2><ul>${JB.projects.map((p) => `<li><a href="/projects/${p.slug}">${esc(p.title)}</a>: ${esc(p.seoDescription)}</li>`).join('')}</ul>
<a class="cta" href="mailto:${INTRO.email}?subject=New%20project">Start a project</a>`;
  const ld = { '@context': 'https://schema.org', '@graph': SERVICES.map((s) => ({ '@type': 'Service', name: s.name, description: s.text, serviceType: s.name, provider: { '@id': SITE + '/#studio' }, areaServed: ['Saratoga Springs, NY', 'Capital Region, NY', 'United States'] })) };
  return page({ title: 'Brand Strategy, Identity and Design Services | John Bolster, Saratoga Springs NY', desc: 'Brand strategy, brand identity, art direction, print, and web and digital design from John Bolster, an independent brand designer in Saratoga Springs, NY.', url, body, ld });
}

function localPage() {
  const url = SITE + '/saratoga-springs-brand-designer';
  const body = `<span class="k">Saratoga Springs, NY</span><h1>Brand designer in Saratoga Springs</h1>
<p class="lede">I'm John Bolster, an independent brand identity designer and art director based in Saratoga Springs. For more than two decades I've helped businesses, schools and nonprofits build brands that are clear, distinctive and built to last, and I'd love to do the same for yours.</p>
<h2>Local, in person</h2>
<p>Working with someone nearby still matters. I meet clients in Saratoga Springs, Ballston Spa, Glens Falls, Albany, Troy, Schenectady and across the Capital Region, whether that's a kickoff over coffee on Broadway, a walk through your shop to see how customers experience your brand, or a review of printed proofs side by side.</p>
<p>Recent Capital Region work includes social campaigns, motion and a logo for <a href="/projects/siena">Siena University</a> in Loudonville, and a full rebrand for <a href="/projects/king-brothers-dairy">King Brothers Dairy</a>, a family dairy in the Capital Region, built around one idea: Drink like a King.</p>
<h2>What I can help with</h2><div class="grid">${SERVICES.map((s) => `<div><h3>${esc(s.name)}</h3><p>${esc(s.text)}</p></div>`).join('')}</div>
<h2>Who I work with locally</h2>
<p>Restaurants, farms and food brands, schools and colleges, healthcare practices, nonprofits, professional services firms and growing local businesses that are ready to look as good as they are. I also partner with Capital Region marketing and advertising agencies as a freelance art director.</p>
<ul class="tags">${INDUSTRIES.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
<h2>Not local? No problem</h2>
<p>I also work with clients across the US, from national litigation firms to healthcare brands. The process works just as well over video calls, and you get the same attention either way.</p>
<h2>Selected work</h2><ul>${JB.projects.map((p) => `<li><a href="/projects/${p.slug}">${esc(p.title)}</a>: ${esc(p.seoDescription)}</li>`).join('')}</ul>
<a class="cta" href="mailto:${INTRO.email}?subject=New%20project">Start a project</a>`;
  const ld = { '@context': 'https://schema.org', '@type': 'ProfessionalService', '@id': SITE + '/#studio', name: 'John Bolster Design', url: SITE + '/', image: SITE + '/og.png', email: INTRO.email,
    address: { '@type': 'PostalAddress', addressLocality: 'Saratoga Springs', addressRegion: 'NY', addressCountry: 'US' },
    areaServed: ['Saratoga Springs, NY', 'Ballston Spa, NY', 'Glens Falls, NY', 'Albany, NY', 'Troy, NY', 'Schenectady, NY', 'Capital Region, NY', 'United States'],
    sameAs: ['https://g.page/r/CX3yfXTNIJFMEBM', 'https://www.linkedin.com/in/johnbolster/'], founder: { '@type': 'Person', name: 'John Bolster' } };
  return page({ title: 'Brand Designer in Saratoga Springs, NY | John Bolster', desc: 'John Bolster is a brand identity designer and art director in Saratoga Springs, NY, working with businesses, schools and nonprofits across the Capital Region and the US.', url, body, ld });
}

function remotePage() {
  const url = SITE + '/freelance-brand-designer';
  const body = `<span class="k">Freelance brand identity designer</span><h1>A senior brand designer, without the agency overhead</h1>
<p class="lede">I'm John Bolster, an independent brand identity designer and art director with more than two decades of experience. Small businesses, growing companies, schools, nonprofits and agencies across the US hire me for strategy-led brand identities that hold up over time.</p>
<h2>Why work with an independent designer</h2>
<div class="grid">
<div><h3>You work with me, directly</h3><p>No account managers or junior handoffs. The person you talk to is the person doing the strategy and the design, start to finish.</p></div>
<div><h3>Strategy before design</h3><p>Every identity starts with positioning, audience and messaging, so the visuals have a reason behind them. I also built Distinkt, an AI brand strategy tool for designers, so strategy is a big part of how I think.</p></div>
<div><h3>Agency experience, freelance flexibility</h3><p>Two decades of work for national brands in healthcare, legal, education, retail and food, scoped to what you actually need.</p></div>
</div>
<h2>Brand design for small businesses</h2>
<p>If your business has outgrown a logo someone made in a weekend, a clear brand identity makes everything easier: your website, your signage, your social posts and your sales conversations. I help small and growing businesses define what makes them different, then build a logo, color and type system and guidelines that make it easy to look consistent everywhere.</p>
<h2>Freelance art direction for agencies</h2>
<p>Marketing and advertising agencies bring me in as a freelance art director and senior designer when they need an extra pair of experienced hands on brand identity, campaigns, print and digital work. I can plug into your team for a single project or an ongoing relationship, and work under your brand or mine.</p>
<h2>What I do</h2><div class="grid">${SERVICES.map((s) => `<div><h3>${esc(s.name)}</h3><p>${esc(s.text)}</p></div>`).join('')}</div>
<h2>How remote projects work</h2><ol class="steps">${PROCESS.map(([t, d]) => `<li><b>${esc(t)}</b>${esc(d)}</li>`).join('')}</ol>
<p>Everything happens over video calls, shared presentations and email, and it works just as well as being in the same room. If you are near Saratoga Springs, NY, we can also <a href="/saratoga-springs-brand-designer">meet in person</a>.</p>
<h2>Industries</h2><ul class="tags">${INDUSTRIES.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
<h2>Selected work</h2><ul>${JB.projects.map((p) => `<li><a href="/projects/${p.slug}">${esc(p.title)}</a>: ${esc(p.seoDescription)}</li>`).join('')}</ul>
<p>Questions about pricing, timelines or how projects work? See the <a href="/faq">FAQ</a>.</p>
<a class="cta" href="mailto:${INTRO.email}?subject=New%20project">Start a project</a>`;
  const ld = { '@context': 'https://schema.org', '@type': 'Service', name: 'Freelance brand identity design and art direction', serviceType: 'Brand identity design', provider: { '@id': SITE + '/#studio' },
    areaServed: { '@type': 'Country', name: 'United States' }, audience: [{ '@type': 'BusinessAudience', name: 'Small businesses' }, { '@type': 'BusinessAudience', name: 'Marketing and advertising agencies' }],
    description: 'Strategy-led brand identity design and freelance art direction for small businesses, growing companies, nonprofits and agencies across the US.' };
  return page({ title: 'Freelance Brand Identity Designer for Small Businesses and Agencies | John Bolster', desc: 'Hire John Bolster, a senior freelance brand identity designer and art director. Strategy-led logos, identities and brand guidelines for small businesses, nonprofits and agencies across the US.', url, body, ld });
}

function faqPage() {
  const url = SITE + '/faq';
  const body = `<span class="k">FAQ</span><h1>Questions, answered</h1>
<p class="lede">Common questions about working with John Bolster, an independent brand identity designer and art director in Saratoga Springs, NY.</p>
${FAQ.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n')}
<a class="cta" href="mailto:${INTRO.email}?subject=New%20project">Start a project</a>`;
  const ld = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
  return page({ title: 'Branding FAQ | John Bolster, Brand Designer in Saratoga Springs NY', desc: 'What a brand identity project includes, how long it takes, how pricing works and how to get started with John Bolster, brand identity designer in Saratoga Springs, NY.', url, body, ld });
}

function llmsTxt() {
  return `# John Bolster\n\n> ${INTRO.summary}\n\n- Website: ${SITE}/\n- Location: ${INTRO.location} (Capital Region). Works with local and remote clients.\n- Email: ${INTRO.email}\n- LinkedIn: https://www.linkedin.com/in/johnbolster/\n- Instagram: https://www.instagram.com/johnbolster.design/\n- Also founded Distinkt (https://distinktai.com), an AI brand strategy creator for designers.\n\n## Services\n\n` +
    SERVICES.map((s) => `- **${s.name}**: ${s.text}`).join('\n') +
    `\n\n## Industries\n\n${INDUSTRIES.join(', ')}.\n\n## Selected work\n\n` +
    JB.projects.map((p) => `- [${p.title}](${SITE}/projects/${p.slug}): ${p.seoDescription}`).join('\n') +
    `\n\n## Pages\n\n- [Services and process](${SITE}/services)\n- [FAQ](${SITE}/faq)\n- [Brand designer in Saratoga Springs, NY](${SITE}/saratoga-springs-brand-designer)\n- [Freelance brand identity designer for small businesses and agencies](${SITE}/freelance-brand-designer)\n\n## FAQ\n\n` +
    FAQ.map(([q, a]) => `### ${q}\n${a}`).join('\n\n') + '\n';
}

// After the build, write a real HTML page for every project (own title, description,
// canonical, share image and structured data), plus sitemap.xml and robots.txt.
function seoPages() {
  return {
    name: 'seo-pages',
    closeBundle() {
      const dist = path.resolve('dist');
      const raw = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
      const base = raw.replace('<!--SEO-->', '');
      fs.writeFileSync(path.join(dist, 'index.html'), raw.replace('<!--SEO-->', `<noscript>${homeText()}</noscript>`));
      const urls = [SITE + '/', SITE + '/services', SITE + '/faq', SITE + '/saratoga-springs-brand-designer', SITE + '/freelance-brand-designer'];
      for (const [slug, html] of [['services', servicesPage()], ['faq', faqPage()], ['saratoga-springs-brand-designer', localPage()], ['freelance-brand-designer', remotePage()]]) {
        fs.mkdirSync(path.join(dist, slug), { recursive: true });
        fs.writeFileSync(path.join(dist, slug, 'index.html'), html);
      }
      fs.writeFileSync(path.join(dist, 'llms.txt'), llmsTxt());
      for (const p of JB.projects) {
        const url = `${SITE}/projects/${p.slug}`;
        const title = `${p.seoTitle} | John Bolster`;
        const ld = {
          '@context': 'https://schema.org', '@type': 'CreativeWork', name: p.title, headline: p.seoTitle,
          description: p.seoDescription, url, image: p.images.slice(0, 4),
          creator: { '@id': SITE + '/#john' }, author: { '@type': 'Person', name: 'John Bolster', url: SITE + '/' },
          about: p.client, keywords: p.services.join(', ')
        };
        let html = base
          .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
          .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(p.seoDescription)}`)
          .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
          .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`)
          .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(p.seoDescription)}`)
          .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
          .replace(/(<meta property="og:type" content=")[^"]*/, `$1article`)
          .replace(/(<meta property="og:image" content=")[^"]*/, `$1${ogFor(p.cover)}`)
          .replace('</head>', `<script type="application/ld+json">${JSON.stringify(ld)}</script>\n</head>`)
          .replace('<body>', `<body>\n<noscript>${projectText(p)}</noscript>`);
        const dir = path.join(dist, 'projects', p.slug);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), html);
        urls.push(url);
      }
      const today = new Date().toISOString().slice(0, 10);
      fs.writeFileSync(path.join(dist, 'sitemap.xml'),
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        urls.map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n') + '\n</urlset>\n');
      fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
    }
  };
}

export default defineConfig({
  build: { target: 'es2018' },
  plugins: [seoPages()],
});
