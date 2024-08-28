/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      // Add SVGR support for SVG files
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  