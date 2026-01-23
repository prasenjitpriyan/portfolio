import { buildLegacyTheme } from 'sanity';

const props = {
  '--my-white': '#F9F9F9',
  '--my-black': '#363636',
  '--my-brand': '#363636',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666666',
  '--gray-base': '#666666',

  '--component-bg': props['--my-white'],
  '--component-text-color': props['--my-black'],

  /* Brand */
  '--brand-primary': props['--my-brand'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-brand'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-brand'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-brand'],
});
