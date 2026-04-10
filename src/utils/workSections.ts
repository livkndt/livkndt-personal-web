interface WorkSection {
  href: string;
  label: string;
  subtitle: string;
}

export const getWorkSections = (projectsEnabled: boolean): WorkSection[] => [
  { href: '/experience', label: 'Experience', subtitle: 'Career history' },
  ...(projectsEnabled
    ? [{ href: '/projects', label: 'Projects', subtitle: "Things I've built" }]
    : []),
];
