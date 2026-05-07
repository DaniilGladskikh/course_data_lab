import { prisma } from './prisma_init'

export async function find_students_by_name_pattern(pattern: string) {
    return await prisma.student.findMany({
        // Найти всех студентов, у которых имя содержит указанную подстроку
        where: {
            person: {
                name: {
                    contains: pattern,
                    mode: 'insensitive'
                }
            }
        },
        include: {
            person: true
        }
    })
}