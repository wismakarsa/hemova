<script>
	import { slide } from 'svelte/transition';
  	import { quintOut } from 'svelte/easing';
	import { getImageURL } from '$lib/utils.js';
	import '../global.css';
    import 'iconify-icon';

	import Navbar from '$lib/Navbar.svelte'
	import Sidebar from '$lib/Sidebar.svelte'
	import Hamburger from '$lib/Hamburger.svelte'


	let homeHref = '/'
	let open = false
    export let data
	

	if (data.user){
		homeHref = '/home'
	}
	
</script>

<div class="min-h-full font-poppins">
	<Sidebar bind:open/>
	<nav class="navbar bg-base-100 border-b">
		
	    <Navbar bind:sidebar={open}/>
		<div class="flex-1" >
			<a href={homeHref} class="btn btn-ghost normal-case text-xl">
				<iconify-icon icon="fluent-emoji:beaming-face-with-smiling-eyes" width="35">
				</iconify-icon>
			</a>
				
		</div>
		<div class="flex-none">
			{#if !data.user}
				<div class="dropdown dropdown-end">
					<a href="/login" class="btn btn-secondary">Login</a>
					<a href="/register" class="btn btn-primary">Daftar</a>
				</div>
			{:else}
				{#if !data.user.verified}
					<a href="/verifikasi" class="btn btn-sm text-xs bg-yellow-500 mr-2 sm:btn-xs">
						<iconify-icon icon="typcn:warning" class="text-xl sm:text-sm"></iconify-icon>
						<span class="hidden sm:block">			
						Belum me-verifikasi email
					</span>
					<span class="block sm:hidden">			
						Verifikasi Email
					</span>
					</a>
				{/if}
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">		
							<img src={data.user?.avatar ? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar) : `https://ui-avatars.com/api/?name=${data.user?.name}`}  alt="User avatar" />
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