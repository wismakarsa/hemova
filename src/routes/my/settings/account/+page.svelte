<script>
    import { Input, Modal } from "$lib/components";
    import { hideEmail } from "$lib/utils.js";

    export let form
    export let data

    let emailModalOpen;
    let usernameModalOpen;

    $: usernameModalOpen = false
    $: emailModalOpen = false
</script>


<div class="flex flex-col w-full h-full space-y-12">
    <div class="w-ful">
        <h3 class="text-2xl font-medium">
            Ubah Email
        </h3>
        <div class="divider mb-0.5"></div>
        <p class="text-md my-2">{hideEmail(data.user?.email)}</p>
        <Modal label="change-email" checked={emailModalOpen}>
            <span slot="trigger" class="btn btn-primary">Ubah Email</span>
            <h3 slot="heading">📫 Ubah Email anda</h3>
            <form action="?/updateEmail" method="POST" class="space-y-2">
                <Input id="email"
                type="email"
                label="Masukan email baru anda"
                required={true}
                value={form?.data?.email}

                />
                <button type="submit" class="btn btn-primary w-full">Ubah Emailku</button>

            </form>

        </Modal>
    </div>
    <!-- Username Change -->
    <div class="w-full">
        <h3 class="text-2xl font-medium">
            Ubah Username
        </h3>
        <div class="divider mb-0.5"></div>
            <Input id="username" label="Username" value={data?.user?.username} disabled />
            <Modal label="change-username" checked={usernameModalOpen}>
                <span slot="trigger" class="btn btn-primary">Ubah Username</span>
                <h3 slot="heading">📎 Ubah Username anda</h3>
                <form action="?/updateUsername" method="POST" class="space-y-2">
                    <Input id="username"
                    type="text"
                    label="Masukan username baru anda"
                    required={true}
                    value={form?.data?.username}
    
                    />
                    <button type="submit" class="btn btn-primary w-full">Ubah Usermameku</button>
    
                </form>
    
            </Modal>
        
    </div>
</div>