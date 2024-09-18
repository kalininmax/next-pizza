import { prisma } from './client';
import { Category, Ingredient, Product, User } from '@prisma/client';

import { USERS, CATEGORIES, INGREDIENTS, PRODUCTS, PIZZAS } from '@/mocks';

const generatePizzaVariants = (pizza: { id: number }) => [
	{ productId: pizza.id, pizzaType: 1, size: 25, price: 500 },
	{ productId: pizza.id, pizzaType: 1, size: 30, price: 700 },
	{ productId: pizza.id, pizzaType: 1, size: 35, price: 900 },
	{ productId: pizza.id, pizzaType: 2, size: 25, price: 500 },
	{ productId: pizza.id, pizzaType: 2, size: 30, price: 700 },
	{ productId: pizza.id, pizzaType: 2, size: 35, price: 900 },
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

	await prisma.product.createMany({
		data: PRODUCTS as Product[],
	});

	const variants = await Promise.all(
		PIZZAS.map(async (pizza) => {
			const pizzaData = await prisma.product.create({
				data: pizza,
			});

			return generatePizzaVariants(pizzaData);
		})
	);

	await prisma.productVariant.createMany({
		data: variants.flat(),
	});
};

const down = async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
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
