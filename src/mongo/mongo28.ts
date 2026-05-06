import type { Db } from "mongodb"

export class Article {
	title: string
	content: string
	tags: string[]
	views: number
	constructor(title: string, content: string, tags: string[], views: number) {
		this.title = title
		this.content = content
		this.tags = tags
		this.views = views
	}
}

export interface SearchResult {
	_id: any
	title: string
	content: string
	tags: string[]
	views: number
	score: number
}

export async function search_articles(db: Db, searchText: string): Promise<SearchResult[]> {
	// Найти статьи по текстовому поиску и отсортировать по релевантности
	return await db.collection("articles").aggregate([
		{ $match: { $text: { $search: searchText } } },
		{
			$project: {
				title: 1,
				content: 1,
				tags: 1,
				views: 1,
				score: { $meta: "textScore" }
			}
		},
		{ $sort: { score: { $meta: "textScore" } } }
	]).toArray() as unknown as SearchResult[]
}