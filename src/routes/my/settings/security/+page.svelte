<script>
	export let data
	import { Input } from '$lib/components';
</script>


{#if data.userType === 'users'}
<div class="flex flex-col w-full h-full">
	<div class="w-full">
		<form action="?/updatePassword" method="POST" class="flex flex-col space-y-2 w-full">
			<h3 class="text-2xl font-medium">Ubah Password</h3>
			<div class="divider" />
			<!-- <input type="hidden" name="userType" value={data.userType}> -->
			<Input id="oldPassword" label="Password Lama" type="password" required />
			<Input id="password" label="Password Baru" type="password" required />
			<Input id="passwordConfirm" label="Konfirm Password Baru" type="password" required />
			<a href="/reset-password" class="text-primary text-xs hover:cursor-point hover:underline sm:text-sm">
				Aku lupa password lamaku 🤐</a
			>
			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-primary w-full max-w-lg"> Update Password </button>
			</div>
		</form>
	</div>
</div>
{:else}
<div class="flex flex-col w-full h-full">
	<div class="w-full">
	<h1 class="text-xl">untuk admin, reset password kontak developer dulu ya..</h1>
	</div>
</div>

{/if}