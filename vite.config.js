import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { JB } from './src/data.js';

const SITE = 'https://johnbolster.design';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const ogFor = (u) => u.replace('/upload/', '/upload/c_fill,g_auto,w_1200,h_630,q_auto,f_jpg/');

// After the build, write a real HTML page for every project (own title, description,
// canonical, share image and structured data), plus sitemap.xml and robots.txt.
function seoPages() {
  return {
    name: 'seo-pages',
    closeBundle() {
      const dist = path.resolve('dist');
      const base = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
      const urls = [SITE + '/'];
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
          .replace('</head>', `<script type="application/ld+json">${JSON.stringify(ld)}</script>\n</head>`);
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
