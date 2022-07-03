import { createSlugField, fields } from 'sanity-pills';

export default {
	name: 'slugged',
	title: 'Slugged',
	type: 'document',
	fields: fields({
		// optional string field
		title: {},

		// slug with a “generate” button that sources from name
		slug: createSlugField({ source: 'title' }),

		// produces a prefixed URL like /blog/hello/ and validates
		// that the prefixes is included as expected
		scopedSlug: createSlugField({
			prefix: 'blog',
			source: 'title',
		}),
	}),
};
