import { Product } from '@prisma/client';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const generateProductVariants = (product: Product) => {
	if (product.categoryId === 1) {
		return [
			{ productId: product.id, pizzaType: 1, size: 25, price: 500 },
			{ productId: product.id, pizzaType: 1, size: 30, price: 700 },
			{ productId: product.id, pizzaType: 1, size: 35, price: 900 },
			{ productId: product.id, pizzaType: 2, size: 25, price: 500 },
			{ productId: product.id, pizzaType: 2, size: 30, price: 700 },
			{ productId: product.id, pizzaType: 2, size: 35, price: 900 },
		];
	}

	return [{ productId: product.id, price: 190 }];
};
