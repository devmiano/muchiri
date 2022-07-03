import { FaUsers } from 'react-icons/fa';

export default {
	title: 'User',
	name: 'user',
	icon: FaUsers,
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string',
			validation: (Rule) => Rule.required().min(4).max(20),
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'text',
			title: 'Text',
			type: 'array',
			of: [{ type: 'block' }],
		},
	],
};
