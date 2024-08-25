//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sportmonks.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  // Tried this from comments about vanilla-extract but this does not seem to optimize bulma CSS,
  // which I think is the root of the probelm with respect to big strings. Will leave here for now,
  // but need to move to a more atomic set of primitives for building out styles.
  experimental: {
    optimizePackageImports: ['bulma'],
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
