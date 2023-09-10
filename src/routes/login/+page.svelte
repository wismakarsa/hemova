<script>
    // export let form
	export const prerender = false;
    export const ssr = false;
    import { onMount } from 'svelte'


	import { currentUser, pb } from "$lib/pocketbase";
    // import Button from "$lib/Button.svelte";

    let email = ''
    let password
    let loading
	let userTypeRes
	let emailUks

	if (email.endsWith('@uks.com')) {
            userTypeRes = 'admins'
            emailUks = true
        } else {
            userTypeRes = 'users'
            emailUks = false
        }


    async function login() {
        try {
            loading = true;
            await pb.collection(`${userTypeRes}`).authWithPassword(email, password);
            window.location.assign(`http://${window.location.host}/home`);
            loading = false;
        } catch(err){
            console.error(err);
            alert(err);
            pb.cancelAllRequests();
            loading = false;
        }
    }

    function signOut() {
        pb.authStore.clear();
    }


</script>


<div class="flex flex-col items-center h-full w-full text-center">
	<h2 class="mt-2 text-3xl font-bold tracking-tight text-base-content">
		Masuk ke akun
	</h2>
    <p class="text-center mt-1">
		atau <a href="/register" class="text-primary font-medium hover:cursor-pointer hover:underline"
			>Daftar</a
		> jika belum memiliki akun.
	</p>
	<form on:submit|preventDefault class="flex flex-col items-center space-y-2 w-full pt-4 px-6">
        <div class="w-full max-w-sm sm:max-w-md pt-2 my-2">
			<button type="submit" class="btn btn-primary w-full shadow-sm shadow-primary"><iconify-icon icon="bi:google"></iconify-icon>Masuk dengan Google</button>
		</div>
        <div class="divider max-w-sm sm:max-w-md w-full self-auto">atau</div>
		
		<div class="form-control w-full max-w-sm sm:max-w-md">
			<label for="email" class="label font-medium pb-1">
				<span class="label-text">Email</span>
			</label>
			<input type="email" name="email" bind:value={email} class="input input-bordered w-full max-w-sm sm:max-w-md" required/>
		</div>
		<div class="form-control w-full max-w-sm sm:max-w-md">
			<label for="password" class="label font-medium pb-1">
				<span class="label-text">Password</span>
			</label>
			<input type="password" name="password" class="input input-bordered w-full max-w-sm sm:max-w-md" bind:value={password} required/>
		</div>
		<div class="form-control w-full max-w-sm sm:max-w-md">
			<!-- <select class="select select-bordered" name="userType" id="userType" >
				<option disabled selected>Login sebagai ?</option>
				<option value="user">Siswi</option>
				<option value="admin">Admin</option>
			  </select> -->
		</div>
		
        <div class="w-full max-w-sm sm:max-w-md text-start">
            <a href="/reset-password" class="font-medium text-left text-primary hover:cursor-pointer hover:underline">Lupa Password?</a>
        </div>

		<div class="w-full max-w-sm sm:max-w-md pt-2 my-2">
			<button on:click={login} class="btn btn-primary w-full shadow-sm shadow-primary">Login</button>
		</div>
        <!-- {#if form?.notVerified}
        <div class="alert alert-error max-w-sm sm:max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Kamu harus verifikasi email dulu sebelum login ya..</span>
          </div>
        {/if} -->
	</form>
    <p class="mt-8">
        Kalo pengen coba pake <br> Email : a@b.com <br> Password : 12345678
    </p>
</div>