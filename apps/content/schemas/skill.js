import { FaChessKnight } from 'react-icons/fa';
import {
	orderRankField,
	orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
	name: 'skill',
	title: 'Skill',
	icon: FaChessKnight,
	orderings: [orderRankOrdering],
	type: 'document',
	fields: [
		orderRankField({ type: 'skill' }),
		{
			title: 'Icon',
			name: 'icon',
			type: 'iconPicker',
			options: {
				outputFormat: 'react',
			},
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required().min(2).max(48),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 48,
			},
		},
	],
};
