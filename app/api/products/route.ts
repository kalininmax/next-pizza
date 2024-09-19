import { prisma } from '@/prisma/client';
import { NextResponse } from 'next/server';

export const GET = async () => {
	const products = await prisma.product.findMany();

	return NextResponse.json(products);
};
