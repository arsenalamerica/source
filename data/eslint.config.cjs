const nx = require('@nx/eslint-plugin');
const baseConfig = require('../eslint.config.cjs');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/react-typescript'],
  // {
  //   ignores: ['.next/**/*'],
  // },
];
