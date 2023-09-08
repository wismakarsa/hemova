/* eslint-disable no-undef */
import { error, redirect } from '@sveltejs/kit';
// import { serializeNonPOJOs } from '$lib/utils.js';

export const actions = {
	updatePassword: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());
		// let userTypeRes = serializeNonPOJOs(locals.user?.collectionName)
		// const dataRes = await request.formData()
		// let typeRes = dataRes.get('userType')


		try {
			await locals.pb.collection(`users`).update(locals.user.id, data);
			locals.pb.authStore.clear();
		} catch {
			// eslint-disable-next-line no-undef
			// console.log('Error: ', err);
			// throw error(err.status, err.message);
			throw error(500, `Sumn went bruh `);
		}

		throw redirect(303, '/login');
	}
}