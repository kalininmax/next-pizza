import { Ingredient } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './api';

export const getAll = async () =>
	(await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;
