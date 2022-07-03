export default {
	name: 'caption',
	title: 'Caption',
	type: 'document',
	fields: [
		{
			name: 'text',
			title: 'Text',
			type: 'array',
			of: [{ type: 'block' }],
		},
	],
};
