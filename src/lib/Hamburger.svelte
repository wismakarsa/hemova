<script>
	import Hamburger from 'svelte-hamburger';
	export let open = false
</script>


<Hamburger {open} on:click={() => open = !open || console.log('asasa')} --line-width="3px" class="ml-2 mr-1 z-[999]" />
