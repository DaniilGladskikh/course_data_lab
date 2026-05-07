import { prisma } from './prisma_init'

export async function delete_students_without_grades() {
    // Удалить всех студентов, у которых нет ни одной оценки
    // Сначала считаем, потом удаляем
    const count = await prisma.student.count({
        where: { grades: { none: {} } }
    })
    await prisma.student.deleteMany({
        where: { grades: { none: {} } }
    })
    return count
}