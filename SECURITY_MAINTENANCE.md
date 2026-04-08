# Security Maintenance Runbook

This runbook defines recurring security and reliability checks for the production website.

## Weekly

- Review the latest security workflow runs in GitHub Actions.
- Triage any secret scanning or CodeQL alerts.
- Review and merge safe Dependabot updates after CI passes.

## Monthly

- Run and review `npm audit --omit=dev --audit-level=high`.
- Review `npm outdated` output and plan non-breaking upgrades.
- Confirm CI required checks are still enforced on protected branches.

## Quarterly

- Review CSP and security header configuration for least-privilege behavior.
- Validate `public/.well-known/security.txt` content and expiry date.
- Confirm incident and contact details are current.
- Review redirects/rewrites and third-party script sources for unnecessary exposure.

## Incident Notes

- Treat secret leaks and high-severity dependency findings as immediate-action incidents.
- Rotate affected credentials before publishing remediation details.
