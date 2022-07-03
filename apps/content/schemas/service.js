import { MdWork } from 'react-icons/md';
import {
	orderRankField,
	orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
	name: 'service',
	title: 'Service',
	icon: MdWork,
	orderings: [orderRankOrdering],
	type: 'document',
	groups: [
		{
			name: 'media',
			title: 'Media',
		},
		{
			name: 'info',
			title: 'Info',
		},
	],
	fields: [
		orderRankField({ type: 'service' }),
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			group: 'media',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			group: 'media',
			validation: (Rule) => Rule.required().min(7).max(48),
		},
		{
			name: 'slug',
			title: 'Slug',
			group: 'media',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 48,
			},
		},
		{
			name: 'text',
			title: 'Text',
			group: 'info',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'tagged',
			title: 'Tags',
			type: 'tags',
			options: {
				includeFromRelated: 'tagged',
				includeFromReference: 'skill',
				onCreate: (value) => ({
					label: value,
					value: value.toLowerCase().replace(/\W/g, '-'),
				}),
				checkValid: (input, values) => {
					return (
						!!input &&
						input.trim() === input &&
						!values.includes(input.trim().toLowerCase().replace(/\W/g, '-'))
					);
				},
			},
		},
		{
			name: 'time',
			title: 'Time',
			type: 'datetime',
			group: 'info',
		},
		{
			title: 'Author',
			name: 'author',
			group: 'info',
			type: 'reference',
			to: [{ type: 'user' }],
		},
	],
};
