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
	<!--
	<Button {editor} key="mingcute:heading-1-fill" keyFunc="heading" on:click={() => toggleHeading1(editor)} />
	<ButtonHeading {editor} key="mingcute:heading-2-fill" on:click={() => toggleHeading2(editor)} />
	-->
	<button class="btn btn-sm" on:click|preventDefault={() => toggleHeading1(editor)}
        class:active={editor.isActive("heading", { level: 1 })}>
		<iconify-icon icon="mingcute:heading-1-fill" width="14"></iconify-icon>
	</button>
	<button class="btn btn-sm" on:click|preventDefault={() => toggleHeading2(editor)}
        class:active={editor.isActive("heading", { level: 2 })}>
		<iconify-icon icon="mingcute:heading-2-fill" width="14"></iconify-icon>
	</button>
	<!--
	<button class="btn btn-sm" on:click|preventDefault={() => toggleHeading3(editor)}
        class:active={editor.isActive("heading", { level: 3 })}>
		<iconify-icon icon="mingcute:heading-3-fill" width="14"></iconify-icon>
	</button>
	-->

</div>
{/if}

<style>
	.fixed-menu {
		padding: 0.50em;
		min-height: 36px;
	}
	button {
	margin: 0;
	}
	
	button.active {
		background: black;
		color: white;
	}
</style>