<script>
	import { fly } from 'svelte/transition';
    import { cubicIn, quartIn } from 'svelte/easing';
	export let pathname = '';
</script>

{#key pathname}
	<div in:fly={{ x: -10, duration: 300, dealy: 200, easing: cubicIn}} out:fly={{ x: 10, duration: 200, easing: quartIn }}>
		<slot />
	</div>
{/key}