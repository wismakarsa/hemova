<script>
	import { json } from '@sveltejs/kit';
    import { onMount } from 'svelte'
	import { currentUser, pb } from "$lib/pocketbase";
	import { generateUsername } from '$lib/utils';

	let name 
	let email
    let password
	let passwordConfirm
    let loading
	let userTypeRes
	let emailUks

	// if (email.endsWith('@uks.com')) {
    //         userTypeRes = 'admins'
    //         emailUks = true
    //     } else {
    //         userTypeRes = 'users'
    //         emailUks = false
    //    
let data = {
	'name': name,
	'email': email,
	'password': password,
	'passwordConfirm': passwordConfirm
	};
	

	// $: dataB = data

    async function signUp() {
		name = name
		email = email
		password = password
		passwordConfirm = passwordConfirm
        try {
			let username = generateUsername(name.split(' ').join('')).toLowerCase();
            loading = true;
			// console.log(email)
			// console.log(data)
            await pb.collection('users').create({ username, name, email, password, passwordConfirm });
            window.location.assign(`http://${window.location.host}/login`);
            loading = false;
        } catch(err){
            console.error(err);
			console.log(username)
			console.log(data)
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
		Daftar akun baru
	</h2>
	<p class="text-center mt-1">
		atau <a href="/login" class="text-primary font-medium hover:cursor-pointer hover:underline"
			>Login</a
		> jika sudah memiliki akun.
	</p>
	<form on:submit|preventDefault class="flex flex-col items-center space-y-2 w-full pt-4 px-6">
        <div class="w-full max-w-sm sm:max-w-md pt-2 my-2">
			<button type="submit" class="btn btn-primary w-full shadow-sm shadow-primary"><iconify-icon icon="bi:google"></iconify-icon>Masuk dengan Google</button>
		</div>
        <div class="divider max-w-sm sm:max-w-md w-full self-auto">atau</div>
		<div class="form-control w-full max-w-sm sm:max-w-md">
			<label for="name" class="label font-medium pb-1">
				<span class="label-text">Nama Lengkap</span>
			</label>
			<input type="text" name="name"  bind:value={name} class="input input-bordered w-full max-w-sm sm:max-w-md" required/>
		</div>
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
			<input type="password" name="password" bind:value={password} class="input input-bordered w-full max-w-sm sm:max-w-md" required/>
		</div>
		<div class="form-control w-full max-w-sm sm:max-w-md">
			<label for="passwordConfirm" class="label font-medium pb-1">
				<span class="label-text">Konfirmasi Password</span>
			</label>
			<input type="password" name="passwordConfirm" bind:value={passwordConfirm} class="input input-bordered w-full max-w-sm sm:max-w-md" required/>
		</div>
		<div class="w-full max-w-sm sm:max-w-md pt-2 my-2">
			<button type="submit" on:click={signUp} class="btn btn-primary w-full shadow-sm shadow-primary">Buat Akun</button>
		</div>
	</form>
	<pre>
		{data}
	</pre>
    <br>
    <!-- <p>** belum bisa register sepenuhnya karena email service nya berbayar 😐</p> -->
</div>

