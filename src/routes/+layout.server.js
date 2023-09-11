import { serializeNonPOJOs } from "$lib/utils.js"



export const load = ({ locals, url }) => {
    let userTypeRes = serializeNonPOJOs(locals.user?.collectionName)
    if (locals.user)  {
        return {
            user: locals.user,
            userType: userTypeRes,
            currentPath: url.pathname
        }
    };

    return {
        user: undefined,
        currentPath: url.pathname
    }

}




