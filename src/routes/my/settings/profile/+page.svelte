<script>
	import { invalidateAll } from '$app/navigation';
    import { enhance, applyAction } from '$app/forms';
    export let data;
    import { Input } from '$lib/components'
	import { getImageURL } from '$lib/utils.js';

    console.log('locals' )

    let loading

    $: loading = false

    const showPreview = (event) => {
        const target = event.target
        const files = target.files

        if (files.length > 0) {
            const src = URL.createObjectURL(files[0])
            const preview = document.getElementById('avatar-preview')
            preview.src = src
        }
    };


    const submitUpdateProfile = () => {
        loading = true
        return async ({ result }) => {
            switch (result.type) {
                case 'success':
                    await invalidateAll()
                    break
                case 'error':
                    break
                default:
                    await applyAction(result)
            }
            loading = false
        }
    }

    console.log('ini userType', data.userType)
</script>


<div class="flex flex-col w-full h-full ">
    <h3 class="text-2xl font-semibold">Update Profil</h3>
    <div class="divider mb-0.5"></div>
    <form 
    action="?/updateProfile" 
    method="POST" class="flex flex-col space-y-2 w-full" 
    enctype="multipart/form-data"
    use:enhance={submitUpdateProfile}
    >

        <div class="form-control w-full max-w-lg">
            <label for="avatar" class="label font-medium pb-2">
                <span class="label-text">Profile Picture</span>
            </label>
            <label for="avatar" class="avatar w-32 rounded-full hover:cursor-pointer">
                <label for="avatar" class="absolute -bottom-0.5 -right-0.5 hover:cursor-pointer">
                    <span class="btn btn-circle btn-sm bg-primary border-2 border-white">
                        <iconify-icon icon="mingcute:user-edit-fill" class="text-white"></iconify-icon>
                    </span>
                </label>
                <div class="w-32 rounded-full outline outline-2 outline-blue-200 hover:brightness-[0.4] active:brightness-[0.4] transition-all">
                    <img src={data.user?.avatar ? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar) : `https://ui-avatars.com/api/?name=${data.user?.name}`} alt="User Avatar" id="avatar-preview" >
                </div>
            </label>
            <input 
            type="file" 
            name="avatar" 
            id="avatar" 
            value="" 
            accept="image/*" 
            hidden 
            on:change={showPreview}
            disabled={loading}

            />
            <input type="hidden" name="userType" value={data.userType}>
        </div>
        <br>
        <Input id='name' label='Nama' value={data?.user?.name} disabled={loading} class="text-gray-400"/>
        <div class="w-full max-w-lg pt-3">
            <button class="btn btn-primary w-full max-w-lg" type="submit" disabled={loading}>
                Update Profile
            </button>
        </div>
    </form>

</div>