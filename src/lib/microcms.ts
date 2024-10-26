//SDK利用準備
import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";
import type { Blog, BlogResponse } from "../types/microcms";

const client = createClient({
	serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
	apiKey: import.meta.env.MICROCMS_API_KEY,
});

//APIの呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
	return await client.get<BlogResponse>({ endpoint: "blogs", queries });
};
export const getBlogDetail = async (
	contentId: string,
	queries?: MicroCMSQueries,
) => {
	return await client.getListDetail<Blog>({
		endpoint: "blogs",
		contentId,
		queries,
	});
};