import { BsLaptopFill } from 'react-icons/bs';
import {
	orderRankField,
	orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
	name: 'project',
	title: 'Project',
	icon: BsLaptopFill,
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
		orderRankField({ type: 'project' }),
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
			name: 'link',
			title: 'Website Link',
			type: 'url',
			group: 'media',
		},
		{
			name: 'repo',
			title: 'GitHub Repo',
			type: 'url',
			group: 'info',
		},
		{
			name: 'text',
			title: 'Text',
			group: 'info',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'skills',
			title: 'Skills',
			group: 'info',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'skill' }] }],
		},
		{
			name: 'tagged',
			title: 'Tags',
			type: 'tags',
			options: {
				includeFromRelated: 'tagged',
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
