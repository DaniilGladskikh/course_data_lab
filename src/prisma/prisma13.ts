import { prisma } from './prisma_init'

export async function find_top_courses(limit: number) {
    // Найти топ N курсов по средней оценке
    const courses = await prisma.course.findMany({
        include: {
            grades: true
        }
    })

    const coursesWithAverage = courses.map(course => {
        const total = course.grades.reduce((sum, g) => sum + g.grade, 0)
        const count = course.grades.length
        const average = count > 0 ? total / count : 0
        return {
            id: course.id,
            title: course.title,
            averageGrade: average
        }
    })

    return coursesWithAverage
        .sort((a, b) => b.averageGrade - a.averageGrade)
        .slice(0, limit)
}