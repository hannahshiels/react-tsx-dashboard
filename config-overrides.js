const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@layout': path.resolve(__dirname, 'src/layout/'),
      '@styles': path.resolve(__dirname, 'src/shared/styles/css'),
      '@assets': path.resolve(__dirname, 'src/shared/assets'),
      '@interfaces': path.resolve(__dirname, 'src/shared/interfaces'),
      '@constants': path.resolve(__dirname, 'src/shared/constants'),
      '@hooks': path.resolve(__dirname, 'src/shared/hooks'),
    },
  };

  return config;
};