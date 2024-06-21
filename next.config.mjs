/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.alias = {
  //       ...config.resolve.alias,
  //       'rc-util/es': 'rc-util/es',
  //       'rc-util/es/warning': 'rc-util/es/warning.js',
  //     };
  //   }
  //   return config;
  // },
};

export default nextConfig;
