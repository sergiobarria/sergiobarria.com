// TODO: Update next.config file
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')
const { withContentlayer } = require('next-contentlayer')

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com'],
  },
  reactStrictMode: true,
  experimental: {
    turboMode: true,
  },
  future: {
    strictPostcssConfiguration: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
}

module.exports = withPlugins([
  withContentlayer,
  withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  }),
  nextConfig,
])
