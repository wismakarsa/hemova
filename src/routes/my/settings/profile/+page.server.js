import { error } from '@sveltejs/kit';


export const actions = {
    updateProfile: async ({ request, locals }) => {
        let data = await request.formData()
        const userAvatar = data.get('avatar')
        // const userTipe = userType

        if (userAvatar.size === 0) {
            data.delete('avatar')
        }
        try {
            const { name, avatar } = await locals.pb.collection(data.get('userType')).update(locals?.user?.id, data);

            locals.user.name = name
            locals.user.avatar = avatar

        } catch (err) {
            console.log('Error: ', err);

            throw error(400, 'Something went wrong updating your profile')
        }
        return {
            success: true
        }
    }
}