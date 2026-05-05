/* 	Напишите функцию findMostPopularTag, которая находит самый часто встречающийся тег в массиве постов и количество его повторений. Функция не должна использовать циклы.
*/

type Post = { tags: string[] };

export function findMostPopularTag(posts: Post[]): Record<string, number> {
	// Подсчитываем частоту вхождений каждого тега без использования циклов
	return posts
		.flatMap(post => post.tags)
		.reduce((acc, tag) => {
			acc[tag] = (acc[tag] || 0) + 1;
			return acc;
		}, {} as Record<string, number>);
}
