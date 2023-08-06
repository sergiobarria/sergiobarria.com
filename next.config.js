const { withContentlayer } = require('next-contentlayer');
const { withPlausibleProxy } = require('next-plausible');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.scdn.co',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = withPlausibleProxy()(withContentlayer(nextConfig));

// const config = withPlausibleProxy()(nextConfig);

// module.exports = withContentlayer(config);
