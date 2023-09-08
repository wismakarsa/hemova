import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils.js';

export const actions = {
	updateEmail: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());
		let userTypeRes = serializeNonPOJOs(locals.user?.collectionName)

		try {
			await locals.pb.collection(`${userTypeRes}`).requestEmailChange(data.email);
		} catch (err) {
			throw error(err.status, err.message);
		}

		return {
			success: true
		};
    },
	updateUsername: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());
		let userTypeRes = serializeNonPOJOs(locals.user?.collectionName)


		try {
			await locals.pb.collection(`${userTypeRes}`).getFirstListItem(`username = "${data.username}"`);
		} catch (err) {
			if (err.status === 404) {
				try {
					const { username } = await locals.pb
						.collection(`${userTypeRes}`)
						.update(locals.user.id, { username: data.username });
					locals.user.username = username;
					return {
						success: true
					};
				} catch (err) {
					console.log('Error: ', err);
					throw error(err.status, err.message);
				}
			}
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	}
};