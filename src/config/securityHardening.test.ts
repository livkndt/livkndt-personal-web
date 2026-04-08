import { existsSync, readFileSync } from 'node:fs';
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

  it('enforces HSTS in netlify config', () => {
    const netlifyToml = readFileSync('netlify.toml', 'utf8');

    expect(netlifyToml).toContain('Strict-Transport-Security');
  });

  it('does not ship placeholder values in public security files', () => {
    const securityTxt = readFileSync('public/.well-known/security.txt', 'utf8');
    const robotsTxt = readFileSync('public/robots.txt', 'utf8');

    expect(securityTxt).not.toContain('your-email@example.com');
    expect(securityTxt).not.toContain('yourdomain.com');
    expect(robotsTxt).not.toContain('yourdomain.com');
  });

  it('pins Decap CMS version in admin script source', () => {
    const adminIndexHtml = readFileSync('public/admin/index.html', 'utf8');
    const scriptMatch = adminIndexHtml.match(
      /https:\/\/unpkg\.com\/decap-cms@([^/]+)\/dist\/decap-cms\.js/
    );

    expect(scriptMatch?.[1]).toBeDefined();
    expect(scriptMatch?.[1]).not.toContain('^');
    expect(scriptMatch?.[1]).not.toContain('~');
  });

  it('defines phase three repository guardrail files', () => {
    expect(existsSync('.github/CODEOWNERS')).toBe(true);
    expect(existsSync('.github/pull_request_template.md')).toBe(true);
    expect(existsSync('.github/workflows/security.yml')).toBe(true);
  });

  it('runs security checks in CI workflow', () => {
    const securityWorkflow = readFileSync('.github/workflows/security.yml', 'utf8');

    expect(securityWorkflow).toContain('name: Security');
    expect(securityWorkflow).toContain('CodeQL');
    expect(securityWorkflow).toContain('gitleaks');
    expect(securityWorkflow).toContain('npm audit --omit=dev --audit-level=high');
  });

  it('defines cursor AI guardrail rules', () => {
    expect(existsSync('.cursor/rules/ai-agent-guardrails.mdc')).toBe(true);

    const agentRules = readFileSync('.cursor/rules/ai-agent-guardrails.mdc', 'utf8');

    expect(agentRules).toContain('.astro');
    expect(agentRules).toContain('dist');
    expect(agentRules).toContain('npm run lint');
    expect(agentRules).toContain('npm run test -- --run');
    expect(agentRules).toContain('npm run build');
    expect(agentRules).toContain('CSP');
  });

  it('includes AI definition of done checks in PR template', () => {
    const prTemplate = readFileSync('.github/pull_request_template.md', 'utf8');

    expect(prTemplate).toContain('AI Agent Definition of Done');
    expect(prTemplate).toContain('generated artifacts');
    expect(prTemplate).toContain('security-sensitive');
  });

  it('defines phase five maintenance automation and runbook', () => {
    expect(existsSync('.github/workflows/maintenance.yml')).toBe(true);

    const maintenanceWorkflow = readFileSync('.github/workflows/maintenance.yml', 'utf8');

    expect(maintenanceWorkflow).toContain("cron: '0 7 * * 1'");
    expect(maintenanceWorkflow).toContain("cron: '0 8 1 * *'");
    expect(maintenanceWorkflow).toContain("cron: '0 8 1 */3 *'");
    expect(maintenanceWorkflow).toContain('npm audit --omit=dev --audit-level=high');
    expect(maintenanceWorkflow).toContain('npm outdated');
    expect(maintenanceWorkflow).toContain('Quarterly maintenance checklist');
    expect(maintenanceWorkflow).toContain('Review CSP and security headers');
    expect(maintenanceWorkflow).toContain('Validate security.txt contact and expiry');
  });
});
