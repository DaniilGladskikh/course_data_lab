import type { Db } from "mongodb"

export class BlogPost {
    title: string
    content: string
    tags: string[]
    constructor(title: string, content: string, tags: string[]) {
        this.title = title
        this.content = content
        this.tags = tags
    }
}

export async function find_posts_by_keyword(db: Db, keyword: string): Promise<BlogPost[]> {
    // Находим посты, в заголовке или содержании которых есть указанное ключевое слово
    return await db.collection("posts").find({
        $or: [
            { title: { $regex: keyword } },
            { content: { $regex: keyword } }
        ]
    }).toArray() as unknown as BlogPost[]
}