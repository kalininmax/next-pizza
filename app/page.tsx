import {
	Container,
	Filters,
	ProductsList,
	Title,
	TopBar,
} from '@/components/shared';
import { PIZZAS, PRODUCTS, CATEGORIES } from '@/mocks';

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
						<ProductsList id={0} title={CATEGORIES[0].name} list={PIZZAS} />
						{CATEGORIES.map((category, index) => {
							const list = PRODUCTS.filter(
								(item) => item.categoryId === index + 1
							);

							if (!list.length) return null;

							return (
								<ProductsList
									key={index}
									id={index}
									title={category.name}
									list={list}
								/>
							);
						})}
					</div>
				</div>
			</Container>
		</>
	);
}
