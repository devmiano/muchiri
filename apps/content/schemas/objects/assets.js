import { createImageField, fields } from 'sanity-pills';
import { IoLibrary } from 'react-icons/io5';

export default {
	name: 'assets',
	title: 'Assets',
	type: 'document',
	icon: IoLibrary,
	fields: fields({
		name: {},
		asset: createImageField({
			validations: {
				required: true,
				minWidth: 500,
				minHeight: 500,
			},
			warnings: {
				minWidth: 1000,
				minHeight: 1000,
			},
		}),
	}),
};
