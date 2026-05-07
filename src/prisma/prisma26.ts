import { prisma } from './prisma_init'

export async function find_oldest_and_newest_students() {
    // Найти самого старого и самого нового студента по дате создания
    // Используем дату из связанной таблицы person
    const oldest = await prisma.student.findFirst({
        include: { person: true },
        orderBy: {
            person: {
                createdAt: 'asc'
            }
        }
    })

    const newest = await prisma.student.findFirst({
        include: { person: true },
        orderBy: {
            person: {
                createdAt: 'desc'
            }
        }
    })

    return { oldest, newest }
}