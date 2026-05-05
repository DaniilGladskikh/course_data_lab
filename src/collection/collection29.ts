/* 
	Напишите функцию calculateTotalProgress, которая вычисляет общий прогресс пользователей, учитывая только активных и с прогрессом > 50%.
*/

type User = {active: boolean, progress: number}

export function calculateTotalProgress(users: User[]): number {
	// Фильтруем активных пользователей с прогрессом > 50%
	const activeHighProgressUsers = users.filter(user => user.active && user.progress > 50);
	
	if (activeHighProgressUsers.length === 0) {
		return 0;
	}

	// Вычисляем средний прогресс для отфильтрованных пользователей
	const sum = activeHighProgressUsers.reduce((total, user) => total + user.progress, 0);
	return sum / activeHighProgressUsers.length;
}