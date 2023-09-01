/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        serverActions: true
    },
    env: {
        DATABASE_URL: "postgres://ahmed.shaykhwork:ZYAod1Xn6NqE@ep-restless-frog-79495068-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
    },
    images: {
        domains: ['lh3.googleusercontent.com', "icon-library.com"]
    }
};

module.exports = nextConfig;