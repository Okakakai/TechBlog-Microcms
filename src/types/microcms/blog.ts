//型定義
export type Blog = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	content: string;
	eyecatch: ImageBlock;
	category?: Category;
};

export type Category = {
	id: string;
	tag: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	name: string;
};

export type BlogResponse = {
	totalCount: number;
	offset: number;
	limit: number;
	contents: Blog[];
};

export type ImageBlock = {
	url: string;
	width: number;
	height: number;
};