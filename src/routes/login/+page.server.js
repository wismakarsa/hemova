import { error, redirect } from '@sveltejs/kit';
// import { serializeNonPOJOs } from '$lib/utils.js';



export const actions = {
    login: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData());
        let userTypeRes = 'users'
        
        if (body.email.endsWith('@uks.com')) {
            userTypeRes = 'admins'
        } else {
            userTypeRes = 'users'
        }

        try {
            await locals.pb.collection(`${userTypeRes}`).authWithPassword(body.email, body.password)

        } catch (err) {
            console.log('Error : ', err);
            throw error(500, `${err}`);
        }

        throw redirect(303, '/home')
    }
}