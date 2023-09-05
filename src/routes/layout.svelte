<script>
	import { slide } from 'svelte/transition';
  	import { quintOut } from 'svelte/easing';
	import { getImageURL } from '$lib/utils.js';
	import '../global.css';
    import 'iconify-icon';

	// import Navbar from '$lib/Navbar.svelte'
	// import Sidebar from '$lib/Sidebar.svelte'
	// import Hamburger from '$lib/Hamburger.svelte'


	let homeHref = '/'
	let isDrawerOpen = false
    export let data
	

	let iconMenu = [
		{
			name: 'menu',
			href: '/home',
			iconSize: '30',
			icon: 'solar:home-smile-bold'
		},
		{
			name: 'plus',
			href: '#tambah-darah',
			iconSize: '30',
			icon: 'solar:add-circle-bold'
		},
		{
			name: 'profil',
			href: '/my/settings/profile',
			iconSize: '24',
			icon: 'fa:user'
		}
	]

	if (data.user){
		homeHref = '/home'
	}
	
</script>


<div class="min-h-full font-poppins">
	

	<div class="w-full navbar bg-base-300 gap-2">
	  <div class="flex-none lg:hidden">
			  <!--  🔵	conditional class `swap-active` 👇	 -->
		<label for="my-drawer-3" class:swap-active={isDrawerOpen} class="btn btn-circle swap swap-rotate">
		  <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
		  <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
		</label>
	  </div> 
	  <span>isDrawerOpen = {isDrawerOpen}</span>
	</div> 
  
	<div class="drawer drawer-mobile w-full h-full">
		  <!--  🔵	bind the `checked` attribute of checkbox 👇	 -->
	  <input id="my-drawer-3" type="checkbox" bind:checked={isDrawerOpen} class="drawer-toggle"> 
	  <div class="flex flex-col items-center justify-center drawer-content">
		<slot />
	  </div> 
	  <div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay"></label> 
		<ul class="p-4 overflow-y-auto menu w-80 bg-base-200">
		  <!-- Sidebar content here -->
		  <li><span>Sidebar Item 1</span></li>
		  <li><span>Sidebar Item 2</span></li>
		</ul>
	  </div>
	</div>
  </div>
  