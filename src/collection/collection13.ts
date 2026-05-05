/* 
	Создайте функцию countByRanges, которая принимает массив чисел и массив диапазонов, возвращает Map, где ключи - строковые представления диапазонов, а значения - количество чисел, попадающих в каждый диапазон.
*/

export function countByRanges(numbers: number[], ranges: [number, number][]): Map<string, number> {
	const result = new Map<string, number>();

	// Инициализируем Map нулями для каждого диапазона
	for (const [min, max] of ranges) {
		result.set(`${min}-${max}`, 0);
	}

	// Подсчитываем числа для каждого диапазона (включительно)
	for (const num of numbers) {
		for (const [min, max] of ranges) {
			if (num >= min && num <= max) {
				const key = `${min}-${max}`;
				result.set(key, result.get(key)! + 1);
			}
		}
	}

	return result;
}
