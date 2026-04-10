export interface SocialConfig {
  linkedin: string;
  github: string;
  substackTech: string;
  substack: string;
  medium: string;
}

export interface SocialLink {
  href: string;
  label: 'LinkedIn' | 'GitHub' | 'Substack' | 'Medium';
  icon: 'linkedin' | 'github' | 'substack' | 'medium';
}

export const getAboutSocialLinks = (social: SocialConfig): SocialLink[] => [
  { href: social.linkedin, label: 'LinkedIn', icon: 'linkedin' },
  { href: social.github, label: 'GitHub', icon: 'github' },
  { href: social.substackTech, label: 'Substack', icon: 'substack' },
  { href: social.medium, label: 'Medium', icon: 'medium' },
];

export const getFooterSocialLinks = (social: SocialConfig): SocialLink[] => [
  { href: social.linkedin, label: 'LinkedIn', icon: 'linkedin' },
  { href: social.github, label: 'GitHub', icon: 'github' },
  { href: social.substack, label: 'Substack', icon: 'substack' },
  { href: social.medium, label: 'Medium', icon: 'medium' },
];
