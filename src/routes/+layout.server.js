export const prerender = true;
export const ssr = false;

import { serializeNonPOJOs } from "$lib/utils.js"
// export async function load({ url }) {

//     return {
  
//       currentPath: url.pathname,
  
//     };
  
//   };

export const load = ({ locals, url }) => {
    // let userTypeRes = serializeNonPOJOs(locals.user?.collectionName)
    // if (locals.user)  {
    //     return {
    //         user: locals.user,
    //         userType: userTypeRes,
    //         currentPath: url.pathname
    //     }
    // };
    
    return {
        user: undefined,
        currentPath: url.pathname
    }

}



