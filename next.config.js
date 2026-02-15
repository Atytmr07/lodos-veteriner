/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // This helps with Windows file watching issues sometimes
    webpack: (config, { dev, isServer }) => {
        if (dev && !isServer) {
            config.watchOptions = {
                poll: 1000,
                aggregateTimeout: 300,
            }
        }
        return config
    },
}

module.exports = nextConfig
