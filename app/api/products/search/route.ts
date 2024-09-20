import { prisma } from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
	const query = req.nextUrl.searchParams.get('q') || '';

	const products = await prisma.product.findMany({
		where: {
			name: {
				contains: query.toLowerCase(),
			},
		},
		take: 5,
	});

	return NextResponse.json(products);
};
