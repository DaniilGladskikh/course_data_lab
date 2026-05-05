/* 
	Напишите функцию findIntersection, которая принимает два массива и возвращает массив их общих элементов, используя Set.
*/

export function findIntersection(arr1: number[], arr2: number[]): number[] {
  // Используем Set для нахождения пересечения двух массивов
  const set1 = new Set(arr1);
  const intersection = new Set(arr2.filter(num => set1.has(num)));
  return [...intersection];
}
