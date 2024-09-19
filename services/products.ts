import { Product } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './api';

export const search = async (q: string) =>
	(
		await axiosInstance.get<Product[]>(ApiRoutes.PRODUCTS_SEARCH, {
			params: { q },
		})
	).data;
