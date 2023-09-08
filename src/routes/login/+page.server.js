import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils.js';

export const actions = {
    login: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData());
        let userTypeRes = serializeNonPOJOs(locals.user?.collectionName)

        try {
            // await locals.pb.collection(`${userTypeRes}`).authWithPassword(body.email, body.password)
            if (body.userType === 'user') {
                console.log('user')
                await locals.pb.collection('users').authWithPassword(body.email, body.password)
            } else if (body.userType === 'admin') {
                console.log('admin')
                await locals.pb.collection('admins').authWithPassword(body.email, body.password)
            } else if (!body.userType) {
                await locals.pb.collection(`${userTypeRes}`).authWithPassword(body.email, body.password)
            } else {
                throw error(500, 'Choose User Type blok');
            }

            
           
            // if (!locals.pb?.authStore.model?.verified) {
            //  try {
            //     await locals.pb.collection('admin').authWithPassword(body.email, body.password)

            //  } catch (err) {
            //     throw error(500, 'Sumn went wrong')
            //  }
                
            //     // return {
            //     //     notVerified: true;
            //     // }
            // }
        } catch (err) {
            console.log('Error : ', err);
            throw error(500, `Something went wrong logging in, userType was ${body.userType} `);
        }

        throw redirect(303, '/home')
    }
}