## Summary

<!-- What changed and why? -->

## Risk

- [ ] Low
- [ ] Medium
- [ ] High (explain mitigation below)

## Security Checklist

- [ ] I did not commit secrets, credentials, or private tokens.
- [ ] If headers/CSP/auth/config changed, I validated security impact.
- [ ] `npm audit --omit=dev --audit-level=high` passes locally (or I documented why not).

## Verification

- [ ] `npm run lint`
- [ ] `npm run test -- --run`
- [ ] `npm run build`
- [ ] CI checks are green

## AI Agent Definition of Done

- [ ] I did not modify generated artifacts (`.astro/`, `dist/`) unless explicitly intended.
- [ ] For security-sensitive changes (headers, CSP, auth, config, third-party scripts), I documented risk and mitigation.
- [ ] I added or updated tests/checks that prevent the same regression class.

## Notes

<!-- Add rollout/backout details if needed. -->
