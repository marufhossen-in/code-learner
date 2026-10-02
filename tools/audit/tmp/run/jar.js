// one Set-Cookie line, four requests. Does the browser send it back?
const cookie = { name: 'sess', value: 'a1b2', domain: 'shop.example.com', path: '/cart', secure: true, sameSite: 'Lax', maxAge: 30 };
const now = 1000, sentAt = 985;
const requests = [
  { url: 'https://shop.example.com/cart', site: 'shop.example.com', method: 'GET' },
  { url: 'http://shop.example.com/cart', site: 'shop.example.com', method: 'GET' },
  { url: 'https://shop.example.com/cart/receipt', site: 'shop.example.com', method: 'GET' },
  { url: 'https://blog.example.org/reader', site: 'blog.example.org', method: 'POST' }
];
for (const r of requests) {
  const host = new URL(r.url).hostname;
  const why = [];
  if (host !== cookie.domain) why.push('domain');
  if (!new URL(r.url).pathname.startsWith(cookie.path)) why.push('path');
  if (cookie.secure && !r.url.startsWith('https')) why.push('secure');
  if (cookie.sameSite === 'Lax' && r.site !== cookie.domain && r.method === 'POST') why.push('same-site');
  if (now - sentAt > cookie.maxAge) why.push('max-age');
  console.log(r.url.padEnd(36), why.length ? 'NOT sent: ' + why.join(', ') : 'sent');
}
