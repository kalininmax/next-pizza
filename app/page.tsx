import { Suspense } from 'react';

import {
	Container,
	Filters,
	ProductsList,
	Title,
	TopBar,
} from '@/components/shared';

import { PRODUCTS, CATEGORIES } from '@/mocks';

export default function HomePage() {
	return (
		<>
			<Container className="mt-5">
				<Title text="Все пиццы" size="lg" />
			</Container>

			<TopBar />
			<Container className="mt-10 pb-14">
				<div className="flex gap-10 lg:gap-20 h-min">
					<Suspense>
						<Filters className="hidden md:block sticky top-[132px]" />
					</Suspense>
					<div className="grid gap-16 flex-1">
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
