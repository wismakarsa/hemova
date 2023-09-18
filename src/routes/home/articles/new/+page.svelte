<script>
	import { enhance, applyAction } from '$app/forms';
	import { Input } from '$lib/components';
	import TipTap from '$lib/components/TipTap.svelte'
	import { onMount, onDestroy } from 'svelte'
	import { writable } from 'svelte/store';

    let content

	// onMount(() => {
	// 	content = content
	// })
	let loading = false;
	const submitCreateArticle = () => {
        loading = true
        return async ({ result }) => {
            switch (result.type) {
                case 'success':
                    await invalidateAll()
                    break
                case 'error':
                    break
                default:
                    await applyAction(result)
            }
            loading = false
        }
    }

</script>

<div class="flex flex-col w-full h-full p-2 select-auto">
	<div class="w-full">
		
		<form
			action="?/create"
			method="POST"
			class="flex flex-col space-y-2 w-full items-center"
			enctype="multipart/form-data"
			use:enhance={submitCreateArticle}
		>
			<h3 class="text-3xl font-bold">Artikel baru 😃</h3>
			<p class="mt-2 text-lg">Kita butuh Judul, Isi artikel, dan thumbnail atau gambar!</p>
			<Input id="title" label="Judul" required/>
			<div class="form-control w-full max-w-lg">
				<label for="field" class="label font-medium pb-1">
					<span class="label-text">Isi deskripsi</span>
				</label>
				<div class="wrapper-editor my-2">
					<TipTap bind:content={content} />
				</div>
				<textarea class="h-0" name="field" bind:value={content} id="field" required hidden/>

			</div>
			<Input id="description" label="Deskripsi Pendek" />
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
				<button type="submit" class="btn btn-primary w-full max-w-lg" disabled={loading}>
					Upload Artikel
				</button>
			</div>
		</form>
		
	</div>
</div>


<style>
.ProseMirror {
	user-select: text !important;
}

/* p {
	user-select: text;
} */


.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}

.wrapper-editor {
	user-select: all;
	-moz-user-select: all;
	-webkit-user-select: all;
}

#field {
  opacity: 0;
  width: 0;
  height: 0;
  float: left; /* Reposition so the validation message shows over the label */

}

</style>