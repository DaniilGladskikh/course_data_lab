import { prisma } from './prisma_init'

export async function find_most_popular_course() {
    // Найти курс с максимальным количеством уникальных студентов
    // Использовать агрегацию средствами Prisma (groupBy)
    const stats = await prisma.grade.groupBy({
        by: ['courseId'],
        _count: {
            studentId: true
        },
        orderBy: {
            _count: {
                studentId: 'desc'
            }
        },
        take: 1
    })

    if (stats.length === 0) return null

    const course = await prisma.course.findUnique({
        where: { id: stats[0].courseId }
    })

    if (!course) return null

    return {
        ...course,
        studentCount: stats[0]._count.studentId
    }
}