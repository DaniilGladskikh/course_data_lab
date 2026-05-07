import { prisma } from './prisma_init'

export async function find_student_progress_by_semester() {
    // Найти прогресс студентов по семестрам (группировка по месяцу создания оценок)
    // Использовать обработку в TypeScript
    const students = await prisma.student.findMany({
        include: {
            grades: true
        }
    })

    return students.map(student => {
        const monthGroups: { [month: string]: number[] } = {}
        
        for (const grade of student.grades) {
            const date = new Date(grade.createdAt)
            const monthStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
            if (!monthGroups[monthStr]) monthGroups[monthStr] = []
            monthGroups[monthStr].push(grade.grade)
        }

        const progress = Object.entries(monthGroups).map(([month, grades]) => {
            const total = grades.reduce((sum, g) => sum + g, 0)
            return {
                month,
                averageGrade: total / grades.length,
                gradeCount: grades.length
            }
        })

        return {
            studentId: student.id,
            progress
        }
    })
}