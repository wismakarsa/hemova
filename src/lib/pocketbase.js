import PocketBase from 'pocketbase';

import { writable } from 'svelte/store';

// const devDatabase = "http://127.0.0.1:8090/";
const prodDatabase = "https://husada.pockethost.io";

export const pb = new PocketBase(prodDatabase);

export const currentUser = writable(pb.authStore.model);

// export const getImageURL = (collectionId, recordId, fileName) => {
//     return `https://husada.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}`
// }

pb.authStore.onChange((auth) => {
    console.log('authStore changed', auth)
    currentUser.set(pb.authStore.model);
})