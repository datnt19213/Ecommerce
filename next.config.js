const withTM = require('next-transpile-modules')(['rc-util', '@ant-design/icons', 'antd', 'rc-pagination', 'rc-picker']);
const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = withTM(nextConfig);
