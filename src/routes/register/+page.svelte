<div class="flex flex-col items-center h-full w-full text-center">
	<h2 class="mt-2 text-3xl font-bold tracking-tight text-base-content">
		Daftar akun baru
	</h2>
	<p class="text-center mt-1">
		atau <a href="/login" class="text-primary font-medium hover:cursor-pointer hover:underline"
			>Login</a
		> jika sudah memiliki akun.
	</p>
	<form action="?/register" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4 px-6">
        <div class="w-full max-w-sm sm:max-w-md pt-2 my-2">
			<button type="submit" class="btn btn-primary w-full shadow-sm shadow-primary"><iconify-icon icon="bi:google"></iconify-icon>Masuk dengan Google</button>
		</div>
        <div class="divider max-w-sm sm:max-w-md w-full self-auto">atau</div>
		<div class="form-control w-full max-w-sm sm:max-w-md">
			<label for="name" class="label font-medium pb-1">
				<span class="label-text">Nama Lengkap</span>
			</label>
			<input type="text" name="name" class="input input-bordered w-full max-w-sm sm:max-w-md" />
		</div>
		<div class="form-control w-full max-w-sm sm:max-w-md">
			<label for="email" class="label font-medium pb-1">
				<span class="label-text">Email</span>
			</label>
			<input type="email" name="email" class="input input-bordered w-full max-w-sm sm:max-w-md" />
		</div>
		<div class="form-control w-full max-w-sm sm:max-w-md">
			<label for="password" class="label font-medium pb-1">
				<span class="label-text">Password</span>
			</label>
			<input type="password" name="password" class="input input-bordered w-full max-w-sm sm:max-w-md" />
		</div>
		<div class="form-control w-full max-w-sm sm:max-w-md">
			<label for="passwordConfirm" class="label font-medium pb-1">
				<span class="label-text">Konfirmasi Password</span>
			</label>
			<input type="password" name="passwordConfirm" class="input input-bordered w-full max-w-sm sm:max-w-md" />
		</div>
		<div class="w-full max-w-sm sm:max-w-md pt-2 my-2">
			<button type="submit" class="btn btn-primary w-full shadow-sm shadow-primary">Buat Akun</button>
		</div>
	</form>

    <br>
    <p>** belum bisa register sepenuhnya karena email service nya berbayar 😐</p>
</div>

