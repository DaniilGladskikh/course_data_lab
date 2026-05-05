/* 	
	Напишите функцию getAffordableInStockProducts, которая фильтрует продукты по цене (дешевле 1000) и наличию на складе, затем возвращает их названия.
*/

type Product = {name: string, price: number, inStock: boolean};

export function getAffordableInStockProducts(products: Product[]): string[] {
	// Фильтруем доступные продукты дешевле 1000 и возвращаем их названия
	return products
		.filter(product => product.inStock && product.price < 1000)
		.map(product => product.name);
}
