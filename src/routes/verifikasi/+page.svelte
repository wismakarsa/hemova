<script>
	import { hideEmail } from '$lib/utils.js';
    export let form;
	export let data;

	console.log(data.user)
</script>


<div class="flex flex-col items-center h-full w-full text-center px-6">
	<h2 class="mt-2 text-3xl font-bold tracking-tight text-base-content">
		<iconify-icon icon="typcn:warning"></iconify-icon>
		Verifikasi akun Anda
	</h2>
    <p class="text-center mt-1 px-1">
		Kita akan mengirimkan email untuk me-verifikasi akun anda
		<br> 
	</p>
	<span class="text-medium mt-2"><em>{hideEmail(data.user?.email)}</em></span>
	<form action="?/verifikasiEmail" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4 px-6">
		<input type="email" name="email" value={data.user?.email} class="input input-bordered w-full max-w-sm sm:max-w-md" hidden/>
		<div class="w-full max-w-sm sm:max-w-md pt-2 my-2">
			<button type="submit" class="btn btn-primary w-full shadow-sm shadow-primary">Request Email Verifikasi</button>
		</div>

		{#if form?.success}
		<div class="alert alert-success max-w-sm sm:max-w-md">
			<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
			<span>Email nya udah kita kirim ya!</span>
		  </div>
		{/if}

	</form>
</div>