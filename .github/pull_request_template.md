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

## Notes

<!-- Add rollout/backout details if needed. -->
