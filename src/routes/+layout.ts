import { marked } from 'marked';
import fm from 'front-matter';

export interface ContentAttributes {
	background: string;
	avatar: string;
}

export interface Content {
	attributes: ContentAttributes;
	content: string;
}

export const prerender = true;

export const load = async ({ fetch }) => {
	const res = await fetch('/content.md');

	if (res.ok) {
		const text = await res.text();
		const data = fm(text);

		return {
			attributes: data.attributes,
			content: marked.parse(data.body)
		};
	}
};
