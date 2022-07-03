import { IoMdAlbums } from 'react-icons/io';
import {
	orderRankField,
	orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
	name: 'hero',
	title: 'Hero',
	type: 'document',
	icon: IoMdAlbums,
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
		orderRankField({ type: 'hero' }),
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
				maxLength: 48,
			},
		},
		{
			name: 'button',
			title: 'Button',
			type: 'string',
			group: 'media',
		},
		{
			name: 'brief',
			title: 'Brief Title',
			type: 'string',
			group: 'info',
			validation: (Rule) => Rule.required().min(7).max(48),
		},
		{
			name: 'long',
			title: 'Long Title',
			type: 'string',
			group: 'info',
			validation: (Rule) => Rule.required().min(7).max(48),
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
