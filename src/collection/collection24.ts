/* 
	Создайте функцию findMaxWithCondition, которая находит объект с максимальным значением свойства, но только среди элементов, удовлетворяющих условию фильтра, в противном случае возвращает null.
*/

export function findMaxWithCondition<T>(
	array: T[], 
	propertyName: keyof T,
	condition: (item: T) => boolean): T | null {
	// Фильтруем массив по условию
	const filtered = array.filter(condition);
	
	if (filtered.length === 0) {
		return null;
	}

	// Находим объект с максимальным значением свойства
	return filtered.reduce((max, current) => {
		return (current[propertyName] as any) > (max[propertyName] as any) ? current : max;
	});
}


