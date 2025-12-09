//@ts-check

const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {},
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
  sassOptions: {
    logger: {
      // @ts-expect-error - this is a custom logger
      warn: function (message) {
        console.warn(message);
      },
      // @ts-expect-error - this is a custom logger
      debug: function (message) {
        console.log(message);
      },
    },
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

// Add SVGR webpack config function
// @ts-expect-error - withSvgr takes a Next.js config object
const withSvgr = (config) => {
  const originalWebpack = config.webpack;
  // @ts-expect-error - config.webpack can be a function or undefined
  config.webpack = (webpackConfig, ctx) => {
    // Add SVGR support
    webpackConfig.module.rules.push({
      test: /.svg$/,
      issuer: { not: /.(css|scss|sass)$/ },
      resourceQuery: {
        not: [
          /__next_metadata__/,
          /__next_metadata_route__/,
          /__next_metadata_image_meta__/,
        ],
      },
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: {
            svgo: false,
            titleProp: true,
            ref: true,
          },
        },
        {
          loader: require.resolve('file-loader'),
          options: {
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });
    return originalWebpack
      ? originalWebpack(webpackConfig, ctx)
      : webpackConfig;
  };
  return config;
};

module.exports = composePlugins(...plugins, withSvgr)(nextConfig);
