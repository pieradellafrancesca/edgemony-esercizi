/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.lorem.space"],
  },
  env: {
    PUBLIC_URL: "/",
  },
  sassOptions: {
    includePaths: ["src/styles"],
    prependData: `
    @import "./src/styles/variables/all.scss";
    `,
  },
};

module.exports = nextConfig;
