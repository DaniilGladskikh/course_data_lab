import { prisma } from './prisma_init'

export async function find_students_with_same_names() {
    // Найти студентов с одинаковыми именами
    // Использовать обработку в TypeScript
    const students = await prisma.student.findMany({
        include: {
            person: true
        }
    })

    const groups: { [name: string]: typeof students } = {}
    for (const student of students) {
        const name = student.person.name
        if (!groups[name]) groups[name] = []
        groups[name].push(student)
    }

    return Object.entries(groups)
        .filter(([name, list]) => list.length > 1)
        .map(([name, list]) => ({
            name,
            students: list
        }))
}