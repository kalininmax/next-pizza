import { prisma } from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
	const users = await prisma.user.findMany();

	return NextResponse.json(users);
};

export const POST = async (request: NextRequest) => {
	const data = await request.json();

	const user = await prisma.user.create({ data });

	return NextResponse.json(user);
};
