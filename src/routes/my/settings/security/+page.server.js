/* eslint-disable no-undef */
import { error, redirect } from '@sveltejs/kit';

export const actions = {
	updatePassword: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').update(locals.user.id, data);
			locals.pb.authStore.clear();
		} catch {
			// eslint-disable-next-line no-undef
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/login');
	}
};