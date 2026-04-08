import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const REQUIRED_CSP_DIRECTIVES = [
  'default-src',
  'script-src',
  'style-src',
  'img-src',
  'connect-src',
  'font-src',
  'frame-src',
  'object-src',
  'base-uri',
  'frame-ancestors',
  'form-action',
];

function getCspDirectives(csp: string): string[] {
  return csp
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => part.split(/\s+/)[0]);
}

describe('security hardening config', () => {
  it('defines a comprehensive CSP in netlify config', () => {
    const netlifyToml = readFileSync('netlify.toml', 'utf8');
    const cspMatch = netlifyToml.match(/Content-Security-Policy\s*=\s*"([^"]+)"/);

    expect(cspMatch?.[1]).toBeDefined();

    const directives = getCspDirectives(cspMatch?.[1] ?? '');

    for (const directive of REQUIRED_CSP_DIRECTIVES) {
      expect(directives).toContain(directive);
    }
  });

  it('defines a comprehensive CSP in vercel config', () => {
    const vercelConfig = JSON.parse(readFileSync('vercel.json', 'utf8')) as {
      headers?: Array<{ source: string; headers: Array<{ key: string; value: string }> }>;
    };
    const globalHeaders = vercelConfig.headers?.find((entry) => entry.source === '/(.*)');
    const cspHeader = globalHeaders?.headers.find(
      (header) => header.key === 'Content-Security-Policy'
    );

    expect(cspHeader?.value).toBeDefined();

    const directives = getCspDirectives(cspHeader?.value ?? '');

    for (const directive of REQUIRED_CSP_DIRECTIVES) {
      expect(directives).toContain(directive);
    }
  });

  it('enforces HSTS in both hosting configs', () => {
    const netlifyToml = readFileSync('netlify.toml', 'utf8');
    const vercelConfig = JSON.parse(readFileSync('vercel.json', 'utf8')) as {
      headers?: Array<{ source: string; headers: Array<{ key: string; value: string }> }>;
    };
    const globalHeaders = vercelConfig.headers?.find((entry) => entry.source === '/(.*)');

    expect(netlifyToml).toContain('Strict-Transport-Security');
    expect(
      globalHeaders?.headers.some((header) => header.key === 'Strict-Transport-Security')
    ).toBe(true);
  });

  it('does not ship placeholder values in public security files', () => {
    const securityTxt = readFileSync('public/.well-known/security.txt', 'utf8');
    const robotsTxt = readFileSync('public/robots.txt', 'utf8');

    expect(securityTxt).not.toContain('your-email@example.com');
    expect(securityTxt).not.toContain('yourdomain.com');
    expect(robotsTxt).not.toContain('yourdomain.com');
  });
});
