import { MdWebStories } from 'react-icons/md';
import {
	orderRankField,
	orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
	name: 'banner',
	title: 'Banner',
	type: 'document',
	icon: MdWebStories,
	orderings: [orderRankOrdering],
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
		orderRankField({ type: 'banner' }),
		{
			name: 'product',
			title: 'Product',
			group: 'media',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'product' }] }],
		},
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
			type: 'slug',
			group: 'media',
			options: {
				source: 'title',
				maxLength: 90,
			},
		},
		{
			name: 'discount',
			title: 'Discount',
			type: 'string',
			group: 'media',
		},
		{
			name: 'button',
			title: 'Button',
			type: 'string',
			group: 'media',
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
			group: 'info',
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
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'user' }],
				},
			],
		},
	],
};
