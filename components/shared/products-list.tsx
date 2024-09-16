import { FC } from 'react';

import { Title } from '@/components/shared';
import { ProductCard, IProduct } from './product-card';

interface IProps {
	title: string;
	list: IProduct[];
	className?: string;
}

export const ProductsList: FC<IProps> = ({ title, list, className }) => {
	return (
		<div className={className}>
			<Title text={title} size="lg" className="font-extrabold mb-5" />

			<div className="grid grid-cols-3 gap-10">
				{list.map((item) => (
					<ProductCard
						key={item.id}
						id={item.id}
						name={item.name}
						imageUrl={item.imageUrl}
						price={item.price}
					/>
				))}
			</div>
		</div>
	);
};
