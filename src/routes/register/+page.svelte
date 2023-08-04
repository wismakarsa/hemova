<script>
    let name = ""
    let pass;

    $: value = name
</script>

<div class="relative flex flex-col justify-center h-screen overflow-hidden">
    <div class="w-1/2 p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
        <h1 class="text-3xl font-semibold text-center text-gray-700">Register</h1>
        <form class="space-y-4">
            <div>
                <label class="label">
                    <span class="text-base label-text">Nama</span>
                </label>
                <input type="username" placeholder="Nama" bind:value={name} class="w-full input input-bordered" />
            </div>
            <div>
                <label class="label">
                    <span class="text-base label-text">Email</span>
                </label>
                <input type="email" placeholder="Email Address" class="w-full input input-bordered" />
            </div>
            <div>
                <label class="label">
                    <span class="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter Password"
                    class="w-full input input-bordered" />
            </div>
            <a href="/login" class="text-xs text-gray-600 hover:underline hover:text-blue-600">Sudah buat akun?</a>
            <div>
                <a class="btn btn-block" href="/home?email={name}">Sign Up</a>
            </div>
        </form>
    </div>
</div>