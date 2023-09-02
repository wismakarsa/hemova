<script>
export let data;
</script>
<div class="grid h-screen place-items-center">
    <div class="hero-content text-center">
      <div class="max-w-md mt-0 mb-[10em]">
   
        <h1 class="text-5xl font-bold text-base-content drop-shadow-xl mb-2">🏥</h1>
        <h1 class="text-5xl font-bold text-base-content drop-shadow-xl">Prototype</h1>



            {#if !data.user} 
                <div class="button pt-6">
                    <a href="/register" class="btn btn-wide btn-primary mb-2">Daftar akun baru</a>
                    <a href="/login" class="btn btn-wide btn-secondary">Login</a>
                </div>
            {:else}

            <div class="button pt-6">
                <a href="/home" class="btn btn-wide btn-primary mb-2">Home</a>
            </div>
            {/if}




     </div>
    </div>
</div>
