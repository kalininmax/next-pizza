'use client';

import { FC } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface IProps {
	className?: string;
}

const list = [
	'Пиццы',
	'Комбо',
	'Закуски',
	'Коктейли',
	'Кофе',
	'Напитки',
	'Десерты',
];

export const Categories: FC<IProps> = ({ className }) => {
	const activeId = useCategoryStore((state) => state.activeId);

	return (
		<div className={cn('overflow-auto -mx-4 px-4', className)}>
			<div className={cn('flex gap-1 bg-gray-50 rounded-2xl p-1 w-fit')}>
				{list.map((name, i) => (
					<Link
						key={name}
						className={cn(
							'flex items-center font-bold h-11 rounded-2xl px-5 transition-all duration-300',
							activeId === i &&
								'bg-white shadow-md shadow-gray-200 text-primary'
						)}
						href={`#${name}`}
					>
						{name}
					</Link>
				))}
			</div>
		</div>
	);
};
