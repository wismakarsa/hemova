<script>
	import 'iconify-icon';
	export let editor;
	export let key;
	export let keyFunc;
</script>
  
  {#if editor}
  <button class:active={editor.isActive(keyFunc)} on:click|preventDefault class="btn btn-sm">
	  <iconify-icon Icon={key} width="14"></iconify-icon>
  </button>
  {/if}
  
  <style>
	  button {
	  margin: 0;
	  }
	  
	  button.active {
		background: black;
		color: white;
	  }
  </style>