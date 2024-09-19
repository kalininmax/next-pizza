/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.dodostatic.net',
				pathname: '/static/Img/Ingredients/**',
			},
		],
	},
};

export default nextConfig;
