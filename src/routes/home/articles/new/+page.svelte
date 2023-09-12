<script>
	import { enhance } from '$app/forms';
	import { Input } from '$lib/components';
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			action="?/create"
			method="POST"
			class="flex flex-col space-y-2 w-full items-center"
			enctype="multipart/form-data"
			use:enhance
		>
			<h3 class="text-3xl font-bold">Artikel baru 😃</h3>
			<p class="mt-2 text-lg">Kita butuh Judul, Isi artikel, dan thumbnail atau gambar!</p>
			<Input id="title" label="Judul" />
			<div class="form-control w-full max-w-lg">
				<label for="field" class="label font-medium pb-1">
					<span class="label-text">Isi deskripsi</span>
				</label>
				<textarea name="field" class="textarea textarea-bordered h-48 resize-none" />
			</div>
			<Input id="deskripsi" label="Deskripsi" />
			<div class="form-control w-full max-w-lg">
				<label for="thumbnail" class="label font-medium pb-1">
					<span class="label-text">Thumbnail</span>
				</label>
				<input
					type="file"
					name="thumbnail"
					id="thumbnail"
					class="file-input file-input-bordered w-full max-w-lg"
				/>
			</div>
			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-primary w-full max-w-lg">Upload Artikel</button>
			</div>
		</form>
	</div>
</div>