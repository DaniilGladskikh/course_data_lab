import { prisma } from './prisma_init'

export async function find_students_with_most_courses() {
    // Найти студентов с максимальным количеством уникальных курсов
    // Использовать обработку данных в TypeScript (не агрегацию Prisma)
    const students = await prisma.student.findMany({
        include: {
            person: true,
            grades: true
        }
    })

    const studentCourseCounts = students.map(student => {
        const uniqueCourses = new Set(student.grades.map(g => g.courseId))
        return {
            ...student,
            courseCount: uniqueCourses.size
        }
    })

    const maxCount = Math.max(...studentCourseCounts.map(s => s.courseCount))
    
    if (maxCount === 0) return []

    return studentCourseCounts.filter(s => s.courseCount === maxCount)
}