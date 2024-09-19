import * as products from './products';
import * as ingredients from './ingredients';

export enum ApiRoutes {
	PRODUCTS = '/products',
	PRODUCTS_SEARCH = '/products/search',
	INGREDIENTS = '/ingredients',
}

export const Api = {
	products,
	ingredients,
};
