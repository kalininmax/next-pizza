import { FC } from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';

import { Title } from '@/components/shared';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export interface IProduct {
	title: string;
	name: string;
	imageUrl?: string;
	className?: string;
}

export const ProductCard: FC<IProduct> = ({ title, imageUrl, className }) => {
	return (
		<article className={className}>
			<div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
				{imageUrl && (
					<Image
						className="object-contain w-[215px] h-[215px]"
						src={imageUrl}
						alt=""
						width={215}
						height={215}
						quality={90}
					/>
				)}
			</div>

			<Link href="/products/1">
				<Title text={title} size="sm" className="mb-1 mt-3" />
			</Link>

			<p className="text-sm text-gray-400">
				Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
				альфредо, чеснок
			</p>

			<div className="flex justify-between gap-4 items-center mt-4">
				<span className="text-[20px]">
					от <b>{/*price*/} ₽</b>
				</span>

				<Button variant="secondary">
					<Plus className="w-4 h-4 mr-1" />
					Добавить
				</Button>
			</div>
		</article>
	);
};
