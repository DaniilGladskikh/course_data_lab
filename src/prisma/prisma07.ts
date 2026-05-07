import { prisma } from "./prisma_init";

export async function update_student_email(
  studentId: number,
  newEmail: string
) {
  // Обновить email студента по его ID через связанную запись person
  return await prisma.student.update({
    where: { id: studentId },
    data: {
      person: {
        update: { email: newEmail }
      }
    },
    include: { person: true }
  })
}
