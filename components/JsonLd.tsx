export const JsonLd = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Prasenjit Das',
    url: 'https://portfolio-one-blond-61.vercel.app',
    jobTitle: 'Software Engineer',
    sameAs: [
      'https://github.com/yourGithub', // Replace with actual
      'https://linkedin.com/in/yourLinkedin', // Replace with actual
      'https://twitter.com/yourTwitter', // Replace with actual
    ],
    description:
      'From delivering postal services to delivering code – Crafting solutions with JavaScript & TypeScript.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
