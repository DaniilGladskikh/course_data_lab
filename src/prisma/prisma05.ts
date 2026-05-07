import { prisma } from './prisma_init'

export async function find_courses_by_title_paginated(
    titlePattern: string, 
    skip: number, 
    take: number
) {
    // Найти курсы, в названии которых содержится указанная подстрока
    // Применить пагинацию (skip, take) и отсортировать по дате создания (новые первыми)
    return await prisma.course.findMany({
        where: {
            title: {
                contains: titlePattern
            }
        },
        orderBy: {
            createdAt: 'desc'
        },
        skip,
        take
    })
}