'use client';

import { FC, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';

import { Title } from '@/components/shared';
import { ProductCard, IProduct } from './product-card';
import { useCategoryStore } from '@/store/category';
import { cn } from '@/lib/utils';

interface IProps {
	id: number;
	title: string;
	list: IProduct[];
	className?: string;
}

export const ProductsList: FC<IProps> = ({ id, title, list, className }) => {
	const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
	const intersectionRef = useRef(null);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	});

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(id);
		}
	}, [intersection, setActiveCategoryId, id]);

	return (
		<div
			id={title}
			className={cn('scroll-mt-[116px]', className)}
			ref={intersectionRef}
		>
			<Title text={title} size="lg" className="font-extrabold mb-5" />

			<div className="grid grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] gap-4 lg:gap-8">
				{list.map((item, index) => (
					<ProductCard key={index} name={item.name} imageUrl={item.imageUrl} />
				))}
			</div>
		</div>
	);
};
