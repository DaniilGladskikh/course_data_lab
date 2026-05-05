/* 	
	Напишите функцию findProductsInCategory(xmlDoc, categoryName), которая принимает в качестве аргументов XML-документ xmlDoc и название категории categoryName. Функция должна возвращать массив продуктов в данной категории.

	Пример XML:
<categories>
  <category name="electronics">
    <products>
      <product id="1" name="Laptop" price="1000"/>
      <product id="2" name="Phone" price="500"/>
    </products>
  </category>
  <category name="books">
    <products>
      <product id="3" name="Novel" price="20"/>
    </products>
  </category>
</categories>
*/

export interface Category {
  name: string;
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
}

export function findProductsInCategory(
  xmlDoc: Document,
  categoryName: string
): Element[] {
	// Находим все элементы <category>
	const categories = xmlDoc.getElementsByTagName('category');
	
	// Итерируемся по категориям для поиска нужной по атрибуту 'name'
	for (let i = 0; i < categories.length; i++) {
		const category = categories[i];
		if (category.getAttribute('name') === categoryName) {
			// Если категория найдена, возвращаем массив элементов <product> внутри неё
			const products = category.getElementsByTagName('product');
			return Array.from(products) as Element[];
		}
	}
	
	// Если категория не найдена, возвращаем пустой массив
	return [];
}
