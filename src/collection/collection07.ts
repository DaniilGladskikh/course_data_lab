/* 
  Напишите функцию countFrequency, которая принимает массив строк и возвращает Map, где ключи - это элементы массива, а значения - количество их вхождений.
*/

export function countFrequency(arr: string[]): Map<string, number> {
  const map = new Map<string, number>();
  // Подсчитываем частоту вхождений каждого элемента
  for (const item of arr) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  return map;
}
