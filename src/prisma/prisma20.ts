import { prisma } from './prisma_init'

export async function update_student_names_pattern(oldPattern: string, newPattern: string) {
    // Найти всех людей, у которых имя содержит oldPattern
    const people = await prisma.person.findMany({
        where: {
            name: {
                contains: oldPattern
            }
        }
    })

    let count = 0
    for (const person of people) {
        // Заменяем все вхождения паттерна
        const newName = person.name.split(oldPattern).join(newPattern)
        await prisma.person.update({
            where: { id: person.id },
            data: { name: newName }
        })
        count++
    }
    return count
}