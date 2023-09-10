// import { json } from "@sveltejs/kit";


export const POST = async ({ request }) => {
    const authHeader = request.headers.get('Authorization')
    const body = await request.json();

    if (authHeader !== '123') {
        return new Response(JSON.stringify({message: 'Invalid credentials'}), { status: 401 })
    }

    console.log(body)
    return new Response(JSON.stringify({messsage: 'success'}), { status: 201 })
}