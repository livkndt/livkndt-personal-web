import { describe, expect, it } from 'vitest';
import { getWorkSections } from './workSections';

describe('getWorkSections', () => {
  it('always includes experience', () => {
    expect(getWorkSections(false)).toEqual(
      expect.arrayContaining([
        { href: '/experience', label: 'Experience', subtitle: 'Career history' },
      ])
    );
  });

  it('hides projects when projects feature is disabled', () => {
    expect(getWorkSections(false)).not.toEqual(
      expect.arrayContaining([
        { href: '/projects', label: 'Projects', subtitle: "Things I've built" },
      ])
    );
  });

  it('shows projects when projects feature is enabled', () => {
    expect(getWorkSections(true)).toEqual(
      expect.arrayContaining([
        { href: '/projects', label: 'Projects', subtitle: "Things I've built" },
      ])
    );
  });
});
