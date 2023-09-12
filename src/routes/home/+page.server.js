import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load = ({ locals, params }) => {
	const getProject = async (articleId) => {
		try {
			const articleRes = serializeNonPOJOs(await locals.pb.collection('articles').getList(1,50));
			return articleRes.items;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		article: getProject()
	};
};