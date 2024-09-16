import {
	Container,
	Filters,
	ProductsList,
	Title,
	TopBar,
} from '@/components/shared';
import { PIZZAS } from '@/mocks/products';

export default function Home() {
	return (
		<>
			<Container className="mt-5">
				<Title text="Все пиццы" size="lg" className="font-bold" />
			</Container>

			<TopBar />

			<Container className="mt-10 pb-14">
				<div className="flex gap-20 h-min">
					<Filters className="sticky top-[132px]" />

					<div className="flex-1">
						<ProductsList title="Пиццы" list={PIZZAS} />
					</div>
				</div>
			</Container>
		</>
	);
}
