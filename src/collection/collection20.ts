/* 	
	Напишите функцию groupUnfinishedHighPriorityTasks, которая группирует задачи по категориям, фильтруя только незавершенные высокоприоритетные задачи.
*/

export type Task = { category: string; priority: string; completed: boolean };

export function groupUnfinishedHighPriorityTasks(tasks: Task[]): Map<string, Task[]> {
	const map = new Map<string, Task[]>();
	// Фильтруем и группируем задачи
	for (const task of tasks) {
		if (!task.completed && task.priority === 'high') {
			if (!map.has(task.category)) {
				map.set(task.category, []);
			}
			map.get(task.category)!.push(task);
		}
	}
	return map;
}


