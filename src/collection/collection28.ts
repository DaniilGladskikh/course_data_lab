/* 
	Создайте функцию getTopRatedInCategory, которая возвращает 3 товара с наивысшим рейтингом в указанной категории. Функция не должна использовать циклы.
*/

type Product = {category: string, rating: number, name: string}

export function getTopRatedInCategory(products: Product[], category: string): Product[] {
	// Фильтруем по категории, сортируем по убыванию рейтинга и выбираем первые 3 товара
	return products
		.filter(product => product.category === category)
		.sort((a, b) => b.rating - a.rating)
		.slice(0, 3);
}
