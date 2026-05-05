/* 
	Создайте функцию getUnique, которая принимает массив чисел и возвращает новый массив только с уникальными элементами, используя Set.
*/

export function getUnique(arr: number[]): number[] {
	// Возвращаем массив уникальных элементов с помощью Set
	return Array.from(new Set(arr));
}
