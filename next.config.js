/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    loader: "custom",
  },
}

module.exports = nextConfig
