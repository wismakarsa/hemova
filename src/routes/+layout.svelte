<script>


	import '../global.css';
    import 'iconify-icon';

	import Navbar from '$lib/Navbar.svelte'
	import Sidebar from '$lib/Sidebar.svelte'
	import Hamburger from '$lib/Hamburger.svelte'



	let open = false
	export let sidebar = false
    export let data
</script>

<div class="min-h-full font-poppins">
	<Sidebar bind:open/>
	<nav class="navbar bg-base-100 border-b">
		
	    <Navbar bind:sidebar={open}/>
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">🏥</a>
		</div>
		<div class="flex-none">
			{#if !data.user}
				<div class="dropdown dropdown-end">
					<a href="/login" class="btn btn-secondary">Login</a>
					<a href="/register" class="btn btn-primary">Daftar</a>
				</div>
			{:else}
				<!-- <div class="dropdown dropdown-end mr-4">
					<a href="/bayi/new" class="btn btn-primary btn-outline">+</a>
				</div> -->
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
							<img src="https://placekitten.com/80/80" alt="User avatar" />
						</div>
					</label>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li><a href="/my/bayi">
                                <iconify-icon icon="lucide:baby"></iconify-icon>
                                Bayiku</a>
						</li>
						<li><a href="/my/settings">
                            <iconify-icon icon="lucide:settings"></iconify-icon>
                            Settings</a></li>
					
							<form action="/logout" method="POST">
								<button type="submit" class="btn btn-md mt-1 w-full text-start">Logout</button>
							</form>
					</ul>
				</div>
			{/if}
		</div>
	</nav>
	<div class="py-4">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<slot />
		</div>
	</div>
</div>