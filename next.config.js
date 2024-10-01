/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io']
  },
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      bufferutil: 'commonjs bufferutil',
      canvas: 'commonjs canvas'
    });
    // config.infrastructureLogging = { debug: /PackFileCache/ };
    return config;
  },
  experimental: {
    turbo: {
      // rules: {
      //   '*.svg': {
      //     loaders: ['@svgr/webpack'],
      //     as: '*.js'
      //   }
      // }
      // resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json']
    }
  }
};

module.exports = nextConfig;
