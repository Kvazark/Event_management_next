/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: false, // Set to true if you want to use the new app directory features
	},
	pageExtensions: ['page.tsx', 'page.ts', 'tsx', 'ts', 'jsx', 'js', '_*.tsx', '_*.ts'],
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		})
		return config;
	},
};
export default nextConfig;
