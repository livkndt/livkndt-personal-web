import { describe, it, expect } from 'vitest';
import { extractResponsibilities } from './extractResponsibilities';

describe('extractResponsibilities', () => {
  it('extracts bullet points from a "Role & Responsibilities" section', () => {
    const content = `
## Summary

Some description here.

## Role & Responsibilities

- Building out the MVP
- Working closely with the design team
- Automated testing using Jest

## Other Section

- Not included
`;
    const result = extractResponsibilities(content);
    expect(result).toEqual([
      'Building out the MVP',
      'Working closely with the design team',
      'Automated testing using Jest',
    ]);
  });

  it('extracts bullet points from a "Responsibilities" section (alternative heading)', () => {
    const content = `
## Responsibilities

- Leading the team
- Reviewing pull requests
`;
    const result = extractResponsibilities(content);
    expect(result).toEqual(['Leading the team', 'Reviewing pull requests']);
  });

  it('works with different heading depths (#, ##, ###)', () => {
    const content = `
# Role & Responsibilities

- First item

### Role & Responsibilities

- Deep heading item
`;
    const result = extractResponsibilities(content);
    expect(result).toContain('First item');
  });

  it('supports * bullets as well as - bullets', () => {
    const content = `
## Role & Responsibilities

* Star bullet one
- Dash bullet two
`;
    const result = extractResponsibilities(content);
    expect(result).toEqual(['Star bullet one', 'Dash bullet two']);
  });

  it('does not bleed into the next section', () => {
    const content = `
## Role & Responsibilities

- Included item

## Tech Stack

- Not included
`;
    const result = extractResponsibilities(content);
    expect(result).toEqual(['Included item']);
    expect(result).not.toContain('Not included');
  });

  it('falls back to all bullet points when no responsibilities section exists', () => {
    const content = `
## Summary

Some prose here.

- Bullet from summary
- Another bullet
`;
    const result = extractResponsibilities(content);
    expect(result).toEqual(['Bullet from summary', 'Another bullet']);
  });

  it('returns an empty array for content with no bullet points', () => {
    const content = `
## Summary

Just some prose, no bullets here at all.
`;
    const result = extractResponsibilities(content);
    expect(result).toEqual([]);
  });

  it('returns an empty array for empty content', () => {
    expect(extractResponsibilities('')).toEqual([]);
  });

  it('strips leading bullet markers from extracted items', () => {
    const content = `
## Role & Responsibilities

-   Extra spaces after dash
*   Star with spaces
`;
    const result = extractResponsibilities(content);
    expect(result).toEqual(['Extra spaces after dash', 'Star with spaces']);
  });
});
