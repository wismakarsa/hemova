<script>
	import { page } from '$app/stores';
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'
	// import { slide } from 'svelte/transition';
  	// import { quintOut } from 'svelte/easing';
	import Transition from '$lib/components/Transition.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { getImageURL } from '$lib/utils.js';
	import '../global.css';
    import 'iconify-icon';


	let ready = false;

	$: userType = data.userType

	onMount(() => {
		ready = true;
	})

	let homeHref = '/'
	let isDrawerOpen = false
    export let data
	

	let iconMenu = [
		{
			id: 1,
			name: 'menu',
			href: '/home',
			iconSize: '30',
			icon: 'solar:home-smile-bold'
		},
		{
			id: 2,
			name: 'plus',
			href: '#tambah-darah',
			iconSize: '30',
			icon: 'solar:add-circle-bold'
		},
		{
			id: 3,
			name: 'profil',
			href: '/my/settings/profile',
			iconSize: '24',
			icon: 'fa-solid:user'
		}
	];
	
	const hrefAdmin= {

		id: 2,
		name: 'plus',
		href: '/home/articles/new',
		iconSize: '30',
		icon: 'solar:add-circle-bold'

	}
	const iconMenuAdmins = [...iconMenu];
	const targetIcon = iconMenu.findIndex(f => f.id === 2)

	

	if (data.userType === 'admins') {
		iconMenu[targetIcon] = hrefAdmin
	}



	console.log(iconMenu)

	if (data.user){
		homeHref = '/home'
	}


	// if (userType === 'admins') {
	// 	const newState = iconMenu.map(obj =>
    // 	obj.id === "1" ? { ...obj, href: '/articles/new' } : obj
	// );
	// 	console.log('newstate', newState)
	// }

	// console.log('current path ', data.currentPath )

	$: settingsTransition = data.currentPath.includes('my/settings')

</script>

<svelte:head>
<MetaTags
title="Prototype"
titleTemplate="%s | development"
description="development website"
/>

</svelte:head>



{#if ready}
<div class="min-h-full font-poppins {(data.currentPath === '/home') ? 'bg-svg' : 'no-bg-svg'} scrollbar-hide sm:bg-base-100" >
	<nav class="navbar z-[80] ">
		<div class="flex-1 " >
			<!--  🔵	conditional class `swap-active` 👇	 -->
			<label for="my-drawer-3" class:swap-active={isDrawerOpen} class="btn btn-circle swap swap-rotate bg-transparent border-0 md:hidden">
				<svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
				<svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
			  </label>
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
				<a href="/home/notifications" class="btn btn-sm btn-circle bg-base-100 border-0 mx-1">
					<iconify-icon icon="solar:bell-bold" class="text-xl"></iconify-icon>
				</a>
					
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<a href="/my/settings/profile">
					<label tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">		
							<img src={data.user?.avatar ? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar) : `https://ui-avatars.com/api/?name=${data.user?.name}`}  alt="User avatar" />
						</div>
					</label>
					</a>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<!-- <ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li><a href="#">
                                <iconify-icon icon="lucide:baby"></iconify-icon>
                                Bayiku</a>
						</li>
						<li><a href="/my/settings">
                            <iconify-icon icon="lucide:settings"></iconify-icon>
                            Settings</a></li>
					
							<form action="/logout" method="POST">
								<button type="submit" class="btn btn-md mt-1 w-full text-start">Logout</button>
							</form>
					</ul> -->

				</div>
				<!-- Bottom Nav Bar -->
				<div class="backgradient sm:hidden">
				</div>
				<div class="btm-nav md:hidden z-[20]">
					<ul class="menu-bn menu menu-horizontal bg-base-100 basis-[88%] rounded-full mb-8 gap-10 sm:gap-20 shadow-[0px_9px_20px] shadow-primary/40">
						{#each iconMenu as btn}
						<li class="{btn.name} "> 
						  <a href={btn.href} class="text-gray-300 hover:bg-base-100 active:bg-transparent hover:text-primary {$page.url.pathname === btn.href ? 'text-primary' : ''}">
							<iconify-icon icon={btn.icon} width={btn.iconSize}></iconify-icon>
						</a>
						</li>
						{/each}
				</div>
				
				
			{/if}
			
		</div>
		
	</nav>
	<div class="drawer drawer-mobile w-full h-full">
		<!--  🔵	bind the `checked` attribute of checkbox 👇	 -->
    <input id="my-drawer-3" type="checkbox" bind:checked={isDrawerOpen} class="drawer-toggle"> 
    <div class="drawer-side z-[25]">
      <label for="my-drawer-3" class="drawer-overlay transition-all transition-300"></label> 
      <ul class="p-4 overflow-y-auto menu bg-base-100 h-full w-[70%] sm:w-[40]">
        <!-- Sidebar content here -->
        <li><span>Sidebar Item 1</span></li>
        <li><span>Sidebar Item 2</span></li>
      </ul>
    </div>
  </div>
  
	<div class="py-4 mb-20 md:mb-5 " >
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			{#if (settingsTransition)}
			<slot />
			{:else}
			<Transition pathname={data.currentPath}>
				<slot />
			</Transition>
			
			{/if}
			<!-- <slot /> -->
		</div>
	</div>
	<!-- <div class="absolute">
		<svg id="visual" viewBox="0 0 900 600" width="600" height="300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(442.0735900224799 278.8425734591127)"><path d="M148.2 -218.1C193.7 -201.4 233.3 -163 250 -116.9C266.7 -70.9 260.6 -17.2 249.2 33.2C237.9 83.5 221.3 130.5 192.9 172.1C164.5 213.6 124.2 249.8 77.1 264.5C30 279.2 -24 272.5 -68.3 251C-112.5 229.6 -146.9 193.4 -178.6 155.5C-210.3 117.6 -239.3 78.1 -243.8 36.1C-248.3 -6 -228.3 -50.6 -207.6 -94.4C-187 -138.3 -165.7 -181.5 -131 -203.1C-96.2 -224.7 -48.1 -224.9 1.6 -227.4C51.4 -229.9 102.7 -234.8 148.2 -218.1" fill="#F5F9FF"></path></g></svg>
	</div> -->
</div>

{/if}

<style>

/* .drawer-toggle:checked ~ .drawer-side > .drawer-overlay {
	backdrop-filter: blur(1px);
} */

.menu-bn li > *:not(ul):not(.menu-title):not(details):active, .menu-bn li > *:not(ul):not(.menu-title):not(details):active {
	background: transparent !important
}

:where(.menu li:not(.menu-title):not(.disabled) > *:not(ul):not(details):not(.menu-title)):not(summary):not(.active):focus {
	background: transparent;
	color: var(--primary);
}

.btm-nav {
	background: transparent;
	/* background: rgb(255,255,255);
	background: linear-gradient(0deg, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 70%);  */
}

.backgradient {
	overflow-y: hidden;
	background: #96b2ff00;
	/* background: #ff0000; */
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0;
	top: calc(100vh - 5rem);
	height: calc(20vh - 10px);
	/* -webkit-backdrop-filter: blur(2px);
	backdrop-filter: blur(2px); */
	-webkit-mask: linear-gradient(0deg, rgba(0,0,0,1) 34%, rgba(255,255,255,0) 93%);
	mask: linear-gradient(0deg, rgba(0,0,0,1) 20%, rgba(255,255,255,0) 93%);
}

.bg-svg {
	background: url('/svg/blob-haikei.svg');
	background-repeat: no-repeat;
	background-size: 200%;
	background-position: 70% -25%;
	transition: all 2s ease-out;
}
.no-bg-svg {
	/* background: url('/svg/blob-haikei.svg'); */
	background: transparent;
	background-position: 100% -25%;
	transition: all 2s ease-in-out;
}

</style>