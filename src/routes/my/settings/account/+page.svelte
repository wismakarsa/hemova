<script>
    import { enhance, applyAction } from "$app/forms";
    import { invalidateAll } from "$app/navigation";
    import { Input, Modal } from "$lib/components";
    import { hideEmail } from "$lib/utils.js";

    export let form
    export let data

    let loading;
    let emailModalOpen;
    let usernameModalOpen;

    $: usernameModalOpen = false
    $: emailModalOpen = false
    $: logoutModalOpen = false
    $: loading = false

    const submitLogout = () => {
        loading = true;
        logoutModalOpen = true;
        return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					logoutModalOpen = false;
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
    }

    const submitUpdateEmail = () => {
		loading = true;
		emailModalOpen = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					emailModalOpen = false;
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};

	const submitUpdateUsername = () => {
		loading = true;
		usernameModalOpen = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					usernameModalOpen = false;
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};
</script>


<div class="flex flex-col w-full h-full space-y-12">
    <div class="w-full">
        <h3 class="text-2xl font-semibold">
            Ubah Email
        </h3>
        <div class="divider mb-0.5"></div>
        <p class="text-sm my-2 over">{hideEmail(data.user?.email)}</p>
        <Modal label="change-email" checked={emailModalOpen}>
            <span slot="trigger" class="btn btn-primary">Ubah Email</span>
            <h3 slot="heading">📫 Ubah Email anda</h3>
            <form action="?/updateEmail" method="POST" class="space-y-2" use:enhance={submitUpdateEmail}>
                <Input id="email"
                type="email"
                label="Masukan email baru anda"
                required={true}
                value={form?.data?.email}
                disabled={loading}
                />
                <button type="submit" class="btn btn-primary w-full" disabled={loading}>Ubah Emailku</button>

            </form>

        </Modal>
    </div>
    <!-- Username Change -->
    <div class="w-full">
        <h3 class="text-2xl font-semibold">
            Ubah Username
        </h3>
        <div class="divider mb-0.5"></div>
            <Input id="username" label="Username" value={data?.user?.username} disabled />
            <Modal label="change-username" checked={usernameModalOpen}>
                <span slot="trigger" class="btn btn-primary">Ubah Username</span>
                <h3 slot="heading">📎 Ubah Username anda</h3>
                <form action="?/updateUsername" method="POST" class="space-y-2" use:enhance={submitUpdateUsername}>
                    <Input id="username"
                    type="text"
                    label="Masukan username baru anda"
                    required={true}
                    value={form?.data?.username}
                    disabled={loading}
                    />
                    <button type="submit" class="btn btn-primary w-full" disabled={loading}>Ubah Usermameku</button>
    
                </form>
    
            </Modal>
            <Modal label="change-password" checked={logoutModalOpen}>
                <span slot="trigger" class="btn btn-md btn-outline btn-error mt-1 w-full text-start">Logout</span>
                <h3 slot="heading">🚪 Yakin Keluar dari akun?</h3>
                <form action="/logout" method="POST" class="mt-2" se:enhance={submitLogout}>
                    <button type="submit" class="btn btn-md btn-outline btn-error mt-1 w-full text-start">Yakin, Logout aja 🤪</button>
                </form>
            </Modal>
        
    </div>
</div>