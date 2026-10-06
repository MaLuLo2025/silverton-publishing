/** @type {import('next').NextConfig} */
const nextConfig = {
  // 301s for consolidated near-duplicate posts (older slug -> newer survivor).
  async redirects() {
    return [
      {
        source: "/blog/what-business-insurance-do-i-need",
        destination: "/blog/business-insurance-types-guide",
        statusCode: 301,
      },
      {
        source: "/blog/how-to-fire-an-employee-legally",
        destination: "/blog/how-to-legally-terminate-employee",
        statusCode: 301,
      },
    ];
  },
};

module.exports = nextConfig;
