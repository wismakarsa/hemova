<script>
	import { toggleBold, 
		toggleItalic, 
		toggleStrike, 
		toggleHeading1, 
		toggleHeading2, 
		toggleHeading3 } from './buttonAction.js';
	import Button from './Button.svelte';
	
  export let editor;
</script>

{#if editor}
<div class="fixed-menu bg-base-300 rounded-t-lg">
	<Button {editor} key="mingcute:bold-fill" keyFunc="bold" on:click={() => toggleBold(editor)} />
	<Button {editor} key="mingcute:italic-fill" keyFunc="italic" on:click={() => toggleItalic(editor)} />
	<Button {editor} key="mingcute:strikethrough-fill" keyFunc="strike" on:click={() => toggleStrike(editor)} />
	<Button {editor} key="mingcute:heading-1-fill" keyFunc="heading" on:click={() => toggleHeading1(editor)} />
</div>
{/if}

<style>
	.fixed-menu {
		padding: 0.50em;
		min-height: 36px;
	}
</style>