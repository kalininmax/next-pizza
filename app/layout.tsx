import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/shared/header';

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Next Pizza | Главная',
	description: 'Next.js project - DodoPizza clone',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={nunito.variable}>
				<div className="flex flex-col min-h-screen">
					<Header />
					<main className="flex-1">{children}</main>
				</div>
			</body>
		</html>
	);
}
