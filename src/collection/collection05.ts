/* 
	Реализуйте генераторную функцию range, которая принимает начальное и конечное числа и возвращает генератор, yielding все числа в этом диапазоне включительно.
*/

export function* range(from: number, to: number) {
	// Генератор возвращает числа в диапазоне от from до to включительно
	if (from <= to) {
		for (let i = from; i <= to; i++) {
			yield i;
		}
	} else {
		for (let i = from; i >= to; i--) {
			yield i;
		}
	}
}
