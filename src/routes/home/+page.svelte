<script>
    // your script goes here
    import { page } from '$app/stores'
    const name = $page.url.searchParams.get('email')

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
</script>


<div class="grid h-screen place-items-center">
    <div class="hero-content text-center">
      <div class="max-w-md mt-10 mb-[6em]  ">
<h1>Welcome Bunda {capitalize(name)}
</h1>
        </div>
    </div>
</div>