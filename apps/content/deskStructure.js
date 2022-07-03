import S from '@sanity/desk-tool/structure-builder';
import SocialPreview from 'part:social-preview/component';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
// import { createSuperPane } from 'sanity-super-pane';

export default () =>
	S.list()
		.title('Content')
		.items([
			S.documentTypeListItem('hero'),
			S.documentTypeListItem('banner'),
			S.documentTypeListItem('product'),
			S.divider(),
			...S.documentTypeListItems().filter(
				(item) =>
					item.getId() !== 'banner' &&
					item.getId() !== 'product' &&
					item.getId() !== 'hero' &&
					item.getId() !== 'user'
			),
			S.divider(),
			orderableDocumentListDeskItem({ type: 'hero' }),
			orderableDocumentListDeskItem({ type: 'banner' }),
			orderableDocumentListDeskItem({ type: 'service' }),
			orderableDocumentListDeskItem({ type: 'project' }),
			orderableDocumentListDeskItem({ type: 'product' }),
			orderableDocumentListDeskItem({ type: 'skill' }),
			S.divider(),
			S.documentTypeListItem('user'),
		]);

export const getDefaultDocumentNode = ({ schemaType }) => {
	if (['product', 'project', 'service', 'hero'].includes(schemaType)) {
		return S.document().views([
			S.view.form(),
			S.view.component(SocialPreview()).title('Social & SEO'),
		]);
	}
	return S.document().views([S.view.form()]);
};

//   export default () =>
// S.list()
// 	.title('Content')
// 	.items([
// 		S.documentTypeListItem('banner'),
// 		S.divider(),
// 		...S.documentTypeListItems().filter(
// 			(item) => item.getId() !== 'banner' && item.getId() !== 'product'
// 		),
// 		S.divider(),
// 		S.documentTypeListItem('product')
// 			.title('Product')
// 			.child(createSuperPane('product', S)),
// 	]);
