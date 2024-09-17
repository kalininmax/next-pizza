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
				<div className="flex gap-10 lg:gap-20 h-min">
					<Filters className="hidden md:block sticky top-[132px]" />
					<div className="grid gap-16 flex-1">
						<ProductsList id={0} title="Пиццы" list={PIZZAS} />
						<ProductsList id={1} title="Комбо" list={PIZZAS} />
						<ProductsList id={2} title="Закуски" list={PIZZAS} />
						<ProductsList id={3} title="Коктейли" list={PIZZAS} />
						<ProductsList id={4} title="Кофе" list={PIZZAS} />
						<ProductsList id={5} title="Напитки" list={PIZZAS} />
						<ProductsList id={6} title="Десерты" list={PIZZAS} />
					</div>
				</div>
			</Container>
		</>
	);
}
