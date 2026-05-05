/* 
	Создайте функцию getVerifiedAdultEmails, которая преобразует массив пользователей в массив email-адресов, но только для верифицированных пользователей старше 18 лет.
*/

type User = {email: string, verified: boolean, age: number}

export function getVerifiedAdultEmails(users: User[]): string[] {
	// Фильтруем верифицированных пользователей старше 18 лет и возвращаем их email-адреса
	return users
		.filter(user => user.verified && user.age > 18)
		.map(user => user.email);
}


