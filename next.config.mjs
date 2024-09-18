/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.dodostatic.net',
				pathname: '/image/r:292x292/**',
			},
			{
				protocol: 'https',
				hostname: 'cdn.dodostatic.net',
				pathname: '/static/Img/Ingredients/**',
			},
		],
	},
};

export default nextConfig;
