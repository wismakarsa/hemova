// import { error, redirect } from '@sveltejs/kit';
// // import { serializeNonPOJOs } from '$lib/utils.js';

// export const actions = {
//     login: async ({ request, locals }) => {
//         const body = Object.fromEntries(await request.formData());
//         let userTypeRes = 'users'
//         let emailUks = false
        
//         if (body.email.endsWith('@uks.com')) {
//             userTypeRes = 'admins'
//             emailUks = true
//         } else {
//             userTypeRes = 'users'
//             emailUks = false
//         }

//         try {
//             await locals.pb.collection(`${userTypeRes}`).authWithPassword(body.email, body.password)

            

//         } catch (err) {
//             console.log('Error : ', err);
//             throw error(500, `Something went wrong logging in, userType was ${body.userType} and emailUks was ${emailUks}`);
//         }

//         throw redirect(303, '/home')
//     }
// }