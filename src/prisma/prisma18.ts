import { prisma } from './prisma_init'

export async function find_students_with_excellent_grades() {
    // Найти всех студентов, у которых есть хотя бы одна оценка 5
    // Использовать обработку данных в TypeScript (не фильтрацию Prisma)
    const students = await prisma.student.findMany({
        include: {
            person: true,
            grades: true
        }
    })

    return students.filter(student => 
        student.grades.some(g => g.grade === 5)
    )
}