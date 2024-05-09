
const production = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: production ? '/' : '',
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REPOSITORY_NAME: 'LarvenLLC/lych-statuspage',
    REPOSITORIES_API_BASE_URL: 'https://api.github.com/repos',
  },
}

module.exports = nextConfig
