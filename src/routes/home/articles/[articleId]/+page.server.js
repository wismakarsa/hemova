import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load = ({ locals, params }) => {
	const getProject = async (articleId) => {
		try {
			const article = serializeNonPOJOs(await locals.pb.collection('articles').getOne(articleId));
			return article;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		article: getProject(params.articleId)
	};
};