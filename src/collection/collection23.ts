/* 
	Напишите функцию groupByCategory, которая принимает массив объектов и имя свойства для группировки, возвращает объект, где ключи - значения свойства, а значения - массивы объектов.
*/

export function groupByCategory<T extends Record<string, any>>(arr: T[], key: keyof T): Record<T[keyof T], T[]> {
	// Группируем объекты в Record
	return arr.reduce((acc, item) => {
		const propertyValue = item[key] as unknown as keyof typeof acc;
		if (!acc[propertyValue]) {
			acc[propertyValue] = [];
		}
		acc[propertyValue].push(item);
		return acc;
	}, {} as Record<T[keyof T], T[]>);
}


