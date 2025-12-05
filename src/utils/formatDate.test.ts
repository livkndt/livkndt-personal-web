import { describe, it, expect } from 'vitest';
import { format } from 'date-fns';

describe('Date formatting', () => {
  it('formats dates correctly', () => {
    const date = new Date('2024-01-15');
    const formatted = format(date, 'd MMMM yyyy');
    expect(formatted).toBe('15 January 2024');
  });
});
