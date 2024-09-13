import { Container, Filters, Title, TopBar } from '@/components/shared';

export default function Home() {
	return (
		<>
			<Container className="mt-5">
				<Title text="Все пиццы" size="lg" className="font-bold" />
			</Container>

			<TopBar />

			<Container className="mt-10 pb-14">
				<div className="flex gap-16 h-min">
					<Filters className="sticky top-[132px]" />

					<div className="flex-1">
						<ul className="grid grid-cols-2 gap-4">
							{[...Array(100)].map((_, i) => (
								<li
									key={i}
									className="flex items-center justify-center p-6 aspect-video shadow-md text-3xl"
								>
									Пицца #{i + 1}
								</li>
							))}
						</ul>
					</div>
				</div>
			</Container>
		</>
	);
}
