/* 
	Напишите функцию addPrefix, которая принимает массив строк и добавляет к каждой строке префикс "Item: ". Используйте map для создания нового массива.
*/

export function addPrefix(arr: string[]): string[] {
	// Добавляем префикс "Item: " к каждой строке в массиве
	return arr.map(str => `Item: ${str}`);
}


