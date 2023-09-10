<script>
    import Transition from '$lib/components/Transition.svelte';
    export let data
    import { page } from '$app/stores'
    const navigation = [
        {
            title: 'Profil',
            href: '/my/settings/profile'
        },
        {
            title: 'Akun',
            href: '/my/settings/account'
        },
        {
            title: 'Keamanan',
            href: '/my/settings/security'
        }
    ]
</script>

<div class="w-full h-full px-6 py-2 sm:px-4">
    <div class="grid grid-col">
        <div class="inline-block align-baseline">
            <h3 class="text-2xl font-semibold">
                <iconify-icon icon="solar:settings-linear" width="25" class="align-middle inline-block">
                </iconify-icon>
                Settings</h3>
     </div>
</div>


    <div class="divider"></div>
</div>

<div class="flex w-full h-full space-x-2 px-2">
    <ul class="menu bg-base-100 w-64 p-2 -mt-4 rounded-box sm:p-1">
        {#each navigation as navItem}
        <li class="last:mb-0 mb-1 ">
            <a href={navItem.href} class="font-medium {$page.url.pathname === navItem.href ? 'active' : ''} p-4">{navItem.title}</a>
        </li>
        {/each}
    </ul>
    <div class="w-full mt-1">
        <Transition pathname={data.currentPath}>
            <slot />
        </Transition>
    </div>
</div>
    
