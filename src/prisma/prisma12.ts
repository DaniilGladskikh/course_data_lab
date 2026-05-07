import { prisma } from './prisma_init'

export interface StudentWithAverage {
    studentId: number
    studentName: string
    averageGrade: number
    gradeCount: number
}

export async function find_top_students(limit: number): Promise<StudentWithAverage[]> {
    // Найти топ N студентов по среднему баллу
    // Учитывать только студентов, у которых есть хотя бы одна оценка
    const stats = await prisma.grade.groupBy({
        by: ['studentId'],
        _avg: {
            grade: true
        },
        _count: {
            grade: true
        },
        orderBy: {
            _avg: {
                grade: 'desc'
            }
        },
        take: limit
    })

    const studentIds = stats.map(s => s.studentId)
    const students = await prisma.student.findMany({
        where: {
            id: { in: studentIds }
        },
        include: {
            person: true
        }
    })

    return stats.map(s => {
        const student = students.find(std => std.id === s.studentId)!
        return {
            studentId: s.studentId,
            studentName: student.person.name,
            averageGrade: s._avg.grade || 0,
            gradeCount: s._count.grade
        }
    })
}