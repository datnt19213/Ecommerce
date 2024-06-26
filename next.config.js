const withTM = require('next-transpile-modules')(['rc-util', '@ant-design/icons', 'antd', 'rc-pagination', 'rc-picker']);
const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactStrictMode: false,
    webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'static/media/',
          publicPath: '/_next/static/media/',
          name: '[name].[hash].[ext]',
          esModule: false,
        },
      },
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = withTM(nextConfig);
