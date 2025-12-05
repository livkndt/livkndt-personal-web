export const siteConfig = {
  title: 'Olivia Knoedt - Software Engineer',
  description:
    'Experienced software engineer specialising in modern web development. Portfolio and blog.',
  url: 'https://yourdomain.com', // Update with your actual domain
  author: 'Olivia Knoedt',
  social: {
    linkedin: 'https://www.linkedin.com/in/oliviaknoedt/',
    github: 'https://github.com/livkndt',
    medium: 'https://medium.com/@oliviaknoedt',
    substack: 'https://substack.com/@livkndt',
  },
  analytics: {
    googleAnalytics: {
      measurementId: 'G-MTPS2265QT', // Update with your Google Analytics 4 Measurement ID
    },
  },
  features: {
    // Feature flags - visible in dev, hidden in production
    // Can be overridden with environment variable ENABLE_PROJECTS=true
    // Set to true to enable in production when ready
    projects:
      import.meta.env.PUBLIC_ENABLE_PROJECTS === 'true' ||
      (!import.meta.env.PROD && import.meta.env.PUBLIC_ENABLE_PROJECTS !== 'false'),
  },
};
