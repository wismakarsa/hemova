<script>
	import { toggleBold, toggleItalic, toggleStrike } from './buttonAction.js';
	import Button from './Button.svelte';
	
  export let editor;
</script>

{#if editor}
<div class="fixed-menu bg-base-300 rounded-t-lg">
	<Button {editor} key="B" keyFunc="bold" on:click={() => toggleBold(editor)} />
	<Button {editor} key="i" keyFunc="italic" on:click={() => toggleItalic(editor)} />
	<Button {editor} key="s" keyFunc="strike" on:click={() => toggleStrike(editor)} />
</div>
{/if}

<style>
	.fixed-menu {
		padding: 0.50em;
		min-height: 36px;
	}
</style>