import { prisma } from './prisma_init'

export async function delete_students_without_person() {
    // Удалить студентов, у которых нет связанной записи в person
    // Использовать фильтрацию средствами Prisma
    const result = await prisma.student.deleteMany({
        where: {
            NOT: {
                person: {
                    id: {
                        gt: 0
                    }
                }
            }
        }
    })
    return result.count
}