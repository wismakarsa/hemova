import { serializeNonPOJOs } from "$lib/utils.js"

export const load = ({ locals }) => {
    let userTypeRes = serializeNonPOJOs(locals.user?.collectionName)
    if (locals.user)  {
        return {
            user: locals.user,
            userType: userTypeRes
        }
    };
    
    return {
        user: undefined
    }

}



