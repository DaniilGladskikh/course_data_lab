import { prisma } from './prisma_init'

export async function find_courses_with_excellent_students() {
    // Найти курсы с количеством студентов, имеющих оценку 5 по этому курсу
    const stats = await prisma.grade.groupBy({
        by: ['courseId'],
        _count: {
            _all: true
        },
        where: {
            grade: 5
        }
    })

    const courses = await prisma.course.findMany()

    return courses.map(course => {
        const stat = stats.find(s => s.courseId === course.id)
        return {
            ...course,
            excellentCount: stat ? stat._count._all : 0
        }
    })
}