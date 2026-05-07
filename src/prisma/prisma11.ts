import { prisma } from './prisma_init'

export async function update_students_email_domain(oldDomain: string, newDomain: string) {
    // Найти всех студентов (через person), у которых email заканчивается на oldDomain
    const people = await prisma.person.findMany({
        where: {
            email: {
                endsWith: oldDomain
            }
        }
    })

    let count = 0
    for (const person of people) {
        const newEmail = person.email.replace(oldDomain, newDomain)
        await prisma.person.update({
            where: { id: person.id },
            data: { email: newEmail }
        })
        count++
    }
    return count
}