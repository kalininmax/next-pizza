import { prisma } from './client';
import { Cart, Category, Ingredient, Prisma, User } from '@prisma/client';

import { generateProductVariants } from '@/lib/utils';
import {
	USERS,
	CATEGORIES,
	INGREDIENTS,
	PRODUCTS,
	CARTS,
	CART_ITEMS,
} from '@/mocks';

const tables = [
	'User',
	'Category',
	'Ingredient',
	'Product',
	'ProductVariant',
	'Cart',
	'CartItem',
];

const up = async () => {
	await prisma.user.createMany({
		data: USERS as User[],
	});

	await prisma.category.createMany({
		data: CATEGORIES as Category[],
	});

	await prisma.ingredient.createMany({
		data: INGREDIENTS as Ingredient[],
	});

	const variants = await Promise.all(
		PRODUCTS.map(async (product) => {
			const productData = await prisma.product.create({
				data: product,
			});

			return generateProductVariants(productData);
		})
	);

	await prisma.productVariant.createMany({
		data: variants.flat(),
	});

	await prisma.cart.createMany({
		data: CARTS as Cart[],
	});

	CART_ITEMS.forEach(
		async (item) => await prisma.cartItem.create({ data: item })
	);
};

const down = async () => {
	tables.forEach(async (tableName) => {
		const query = Prisma.raw(
			`TRUNCATE TABLE "${tableName}" RESTART IDENTITY CASCADE;`
		);
		await prisma.$executeRaw`${query}`;
	});
};

const main = async () => {
	try {
		await down();
		await up();
	} catch (e) {
		console.error(e);
	}
};

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
