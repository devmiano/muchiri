export default {
	type: 'document',
	name: 'code',
	fields: [
		{
			name: 'code',
			title: 'Code',
			type: 'code',
			options: {
				theme: 'solarized_dark',
				language: 'js',
				languageAlternatives: [
					{ title: 'Javascript', value: 'js' },
					{ title: 'HTML', value: 'html' },
					{ title: 'CSS', value: 'css' },
					{ title: 'SASS', value: 'sass' },
				],
			},
		},
	],
};
