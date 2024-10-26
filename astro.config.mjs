import mdx from "@astrojs/mdx";
// @ts-check
import { defineConfig } from "astro/config";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [mdx(), sitemap()],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "src/styles/_variables.scss" as *;',
				},
			},
		},
	},
});
