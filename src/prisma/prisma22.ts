import { prisma } from './prisma_init'

export async function find_courses_min_max_average() {
    // Найти курсы с минимальной и максимальной средней оценкой
    // Использовать обработку в TypeScript (не агрегацию Prisma)
    const courses = await prisma.course.findMany({
        include: {
            grades: true
        }
    })

    if (courses.length === 0) return { min: null, max: null }

    const coursesWithAverage = courses.map(course => {
        const total = course.grades.reduce((sum, g) => sum + g.grade, 0)
        const count = course.grades.length
        const average = count > 0 ? total / count : 0
        return {
            ...course,
            averageGrade: average
        }
    })

    // Учитываем только те курсы, по которым есть оценки
    const withGrades = coursesWithAverage.filter(c => c.grades.length > 0)
    if (withGrades.length === 0) return { min: null, max: null }

    const sorted = [...withGrades].sort((a, b) => a.averageGrade - b.averageGrade)

    return {
        min: sorted[0],
        max: sorted[sorted.length - 1]
    }
}