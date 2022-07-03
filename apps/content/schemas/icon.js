import { FaUsers } from 'react-icons/fa';

export default {
	title: 'Icon',
	name: 'icon',
	icon: FaUsers,
	type: 'document',
	fields: [
		{
			title: 'Icon',
			name: 'icon',
			type: 'iconPicker',
			options: {
				outputFormat: 'react',
			},
		},
	],
};
