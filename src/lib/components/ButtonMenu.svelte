<script>
	import { toggleBold, 
		toggleItalic, 
		toggleStrike, 
		toggleHeading1, 
		toggleHeading2, 
		toggleHeading3 } from '$lib/buttonActions.js';
	import Button from './Button.svelte';
	
  export let editor;
</script>

{#if editor}
<div class="bubble-menu">
	<Button {editor} key="lucide:bold" on:click={() => toggleBold(editor)} />
	<Button {editor} key="lucide:italic" on:click={() => toggleItalic(editor)} />
	<Button {editor} key="lucide:strikethrough" on:click={() => toggleStrike(editor)} />
</div>
{/if}
