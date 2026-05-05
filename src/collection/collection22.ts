/* 
	Создайте функцию sumProperty, которая принимает массив объектов с числовыми свойствами и возвращает сумму всех значений указанного свойства.
*/

export function sumProperty<T>(objects: T[], property: keyof T): number {
	// Вычисляем сумму значений указанного свойства с помощью reduce
	return objects.reduce((sum, obj) => sum + Number(obj[property]), 0);
}


