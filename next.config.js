const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = withContentlayer(nextConfig);
