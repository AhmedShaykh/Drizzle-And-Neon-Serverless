/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        serverActions: true
    },
    env: {
        DATABASE_URL: "postgres://ahmed.shaykhwork:PrGuyFT8t5BY@ep-solitary-night-48233370-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
    }
};

module.exports = nextConfig;