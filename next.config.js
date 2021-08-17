module.exports = {
  future: {
    strictPostcssConfiguration: true,
  },
  reactStrictMode: true,
  experimental: {
    turboMode: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  },
};
