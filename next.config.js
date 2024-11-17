/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source:
          '/(.*).(jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot|mp3|mp4|webm|wav|ogg|pdf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
