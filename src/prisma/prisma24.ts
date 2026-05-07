import { prisma } from './prisma_init'

export async function find_students_with_all_courses() {
    // Найти студентов, у которых есть оценки по всем существующим курсам
    // Использовать обработку в TypeScript
    const totalCourses = await prisma.course.count()
    
    if (totalCourses === 0) return []

    const students = await prisma.student.findMany({
        include: {
            person: true,
            grades: true
        }
    })

    return students.filter(student => {
        const uniqueCourseIds = new Set(student.grades.map(g => g.courseId))
        return uniqueCourseIds.size === totalCourses
    })
}