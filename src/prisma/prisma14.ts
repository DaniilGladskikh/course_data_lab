import { prisma } from './prisma_init'

export async function find_students_above_course_average(courseTitle: string) {
    // Найти студентов, у которых есть оценки по указанному курсу выше среднего балла по этому курсу
    // Использовать два отдельных запроса: первый для нахождения среднего балла, второй для поиска студентов
    
    // 1. Находим средний балл
    const aggregate = await prisma.grade.aggregate({
        where: {
            course: { title: courseTitle }
        },
        _avg: { grade: true }
    })

    const avg = aggregate._avg.grade
    if (avg === null) return []

    // 2. Ищем оценки выше среднего
    const grades = await prisma.grade.findMany({
        where: {
            course: { title: courseTitle },
            grade: { gt: avg }
        },
        include: {
            student: {
                include: { person: true }
            }
        }
    })

    return grades.map(g => ({
        ...g,
        person: g.student.person
    }))
}