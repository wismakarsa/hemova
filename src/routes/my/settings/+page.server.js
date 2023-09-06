import { redirect } from '@sveltejs/kit'



export const load = ({ locals }) => {
    // fromUrl = event.url.pathname + event.url.search

    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login')
    } else {
        throw redirect(303, '/my/settings/profile')
    }
};