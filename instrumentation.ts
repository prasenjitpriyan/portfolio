export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const originalEmitWarning = process.emitWarning;
    process.emitWarning = (warning, ...args) => {
      if (
        (typeof warning === 'string' && warning.includes('url.parse()')) ||
        (typeof warning === 'object' &&
          warning.message?.includes('url.parse()')) ||
        args[0] === 'DEP0169'
      ) {
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (originalEmitWarning as any).call(process, warning, ...args);
    };
  }
}
