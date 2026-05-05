/* 	
	Создайте функцию getDiscountedInStockTotal, которая возвращает общую стоимость всех товаров в корзине, которые есть в наличии и имеют скидку.
*/

export type Product = { price: number; discount: boolean; inStock: boolean };

export function getDiscountedInStockTotal(products: Product[]): number {
	// Вычисляем общую стоимость товаров в наличии со скидкой
	return products
		.filter(p => p.inStock && p.discount)
		.reduce((total, p) => total + p.price, 0);
}
