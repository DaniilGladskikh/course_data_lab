/* 
	Создайте генераторную функцию numberGenerator, которая принимает число max и возвращает генератор, yielding числа от 1 до max включительно.
*/

export function* numberGenerator(max: number) {
	// Генератор возвращает числа от 1 до max включительно
	for (let i = 1; i <= max; i++) {
		yield i;
	}
}


