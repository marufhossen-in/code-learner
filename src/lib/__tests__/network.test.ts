import { describe, expect, it } from 'vitest';
import { planJourney } from '../../components/visuals/networkSim';

const COLD = { cached: false, keepAlive: false };

describe('network journey planner (Section 11)', () => {
  it('an API URL walks the entire stack in order', () => {
    const j = planJourney('https://example.com/api/products', COLD);
    expect(j.ok).toBe(true);
    expect(j.status).toBe(200);
    const nodes = j.steps.map((s) => s.node);
    // browser → … → dns … → lb → server → db → … browser
    expect(nodes[0]).toBe(0); // browser parse
    expect(nodes).toContain(2); // dns
    expect(nodes.indexOf(4)).toBeLessThan(nodes.indexOf(5)); // lb before server
    expect(nodes.indexOf(5)).toBeLessThan(nodes.indexOf(6)); // server before db
    expect(nodes.lastIndexOf(0)).toBe(nodes.length - 1); // render is last
  });

  it('https adds a TLS step; http warns about missing encryption', () => {
    const secure = planJourney('https://example.com/', COLD);
    expect(secure.steps.some((s) => s.title.en.includes('TLS'))).toBe(true);
    const plain = planJourney('http://example.com/about', COLD);
    expect(plain.steps.some((s) => s.detail.en.includes('READ and MODIFY'))).toBe(true);
  });

  it('a cached static file never leaves the browser', () => {
    const j = planJourney('https://example.com/style.css', { cached: true, keepAlive: false });
    expect(j.fromCache).toBe(true);
    expect(j.status).toBe(200);
    expect(j.steps.every((s) => s.node === 0)).toBe(true);
    expect(j.totalMs).toBeLessThan(5);
  });

  it('uncached static assets stop at the CDN — no load balancer, no server', () => {
    const j = planJourney('https://example.com/style.css', COLD);
    const nodes = j.steps.map((s) => s.node);
    expect(nodes).not.toContain(4);
    expect(nodes).not.toContain(5);
    expect(nodes).not.toContain(6);
  });

  it('keep-alive makes the same journey strictly faster', () => {
    const cold = planJourney('https://example.com/api/users', COLD);
    const warm = planJourney('https://example.com/api/users', { cached: false, keepAlive: true });
    expect(warm.totalMs).toBeLessThan(cold.totalMs);
  });

  it('unknown routes complete the journey with a 404', () => {
    const j = planJourney('https://example.com/missing', COLD);
    expect(j.ok).toBe(true);
    expect(j.status).toBe(404);
    expect(j.steps.some((s) => s.node === 5)).toBe(true); // reached the server
  });

  it('unknown API routes skip the database', () => {
    const j = planJourney('https://example.com/api/nope', COLD);
    expect(j.status).toBe(404);
    expect(j.steps.some((s) => s.node === 6)).toBe(false);
  });

  it('total latency is the sum of the steps', () => {
    const j = planJourney('https://example.com/products', COLD);
    expect(j.totalMs).toBe(j.steps.reduce((n, s) => n + s.ms, 0));
  });

  it('invalid URLs fail gracefully', () => {
    const j = planJourney('not a url', COLD);
    expect(j.ok).toBe(false);
    expect(j.error?.bn.length).toBeGreaterThan(0);
  });
});
