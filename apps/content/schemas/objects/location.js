export default {
	name: 'location',
	type: 'document',
	fields: [
		{
			name: 'location',
			type: 'geopoint',
			options: {
				leaflet: {
					defaultLocation: {
						lat: 59.924095,
						lng: 10.758458,
					},
				},
			},
		},
	],
};
