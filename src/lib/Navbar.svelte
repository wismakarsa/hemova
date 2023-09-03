<script>
	import Hamburger from '$lib/Hamburger.svelte'
	
	export let sidebar = false
	
</script>


<Hamburger bind:open={sidebar} on:click={() => (open = true)} class="z-101"/>
