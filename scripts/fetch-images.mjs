// CI'da çalışır: hizmet sayfalarındaki Pexels görsellerini indirir, WebP sürümlerini üretir.
// Dosyalar repoya kaydedilir; sonraki derlemeler internete ihtiyaç duymaz.
import { access, mkdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import { pexelsIds } from '../src/data/pages.js';
const exists = (p) => access(p).then(() => true, () => false);
await mkdir('public/img', { recursive: true });
for (const id of pexelsIds) {
  const jpg = `public/img/${id}.jpg`;
  if (!(await exists(jpg))) {
    try {
      const r = await fetch(`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`);
      if (!r.ok) throw new Error(r.status);
      await writeFile(jpg, await sharp(Buffer.from(await r.arrayBuffer())).rotate().resize(1600, 1600, { fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 78 }).toBuffer());
      console.log('indirildi', id);
    } catch (e) { console.warn('ATLANDI', id, e.message); continue; }
  }
  for (const w of [800, 1600]) {
    const out = `public/img/${id}-${w}.webp`;
    if (!(await exists(out))) await sharp(jpg).resize(w, null, { withoutEnlargement: true }).webp({ quality: 74 }).toFile(out);
  }
}
