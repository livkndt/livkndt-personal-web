import { describe, expect, it } from 'vitest';
import { getAboutSocialLinks, getFooterSocialLinks } from './socialLinks';

const social = {
  linkedin: 'https://www.linkedin.com/in/oliviaknoedt/',
  github: 'https://github.com/livkndt',
  substackTech: 'https://balancingthestack.substack.com/',
  substack: 'https://substack.com/@livkndt',
  medium: 'https://medium.com/@oliviaknoedt',
};

describe('social links', () => {
  it('includes Medium in about social links', () => {
    expect(getAboutSocialLinks(social)).toEqual(
      expect.arrayContaining([expect.objectContaining({ href: social.medium, label: 'Medium' })])
    );
  });

  it('includes Medium in footer social links', () => {
    expect(getFooterSocialLinks(social)).toEqual(
      expect.arrayContaining([expect.objectContaining({ href: social.medium, label: 'Medium' })])
    );
  });
});
