import { writable } from "svelte/store";

const contentRes = writable('', () => {
    console.log('sub');
    return () => console.log('no sub')
})



export default contentRes;