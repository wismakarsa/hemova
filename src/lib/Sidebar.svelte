<script>
	import { slide } from 'svelte/transition';
 	 import { quintOut } from 'svelte/easing';
	import {clickOutside} from './clickOutside.js';
	function handleClickOutside(event) {
		open = false
		console.log('close')
	}


	export let open = false
</script>

{#if open}
<aside class="fixed w-1/2 h-full bg-base-200 shadow-lg sm:w-1/4"   class:open  transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}>
	<nav class="p-12 text-xl font-medium rounded-box z-30" transition:slide={{ delay: 450, duration: 400, easing: quintOut, axis: 'x' }} >
		<a class="btn bg-base-300 w-full text-left" href="#">aku gatau gatau </a>
		<a class="btn bg-base-300 w-full text-left" href="#">aaaaaaah</a>
	</nav>
</aside>
{/if}

<style>
	aside {
		transition: left 0.3s ease-in-out;
		z-index: 50;
	}
	
	.open {
		left: 0
	}
</style>