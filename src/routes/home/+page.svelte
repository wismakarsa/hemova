<script>
    import { onMount } from 'svelte'
    import { fly, fade } from 'svelte/transition'
    import { cubicInOut } from 'svelte/easing';
    export let data;
    // your script goes here

    let readyPage = false
    let userMessage = 'Bunda'

    onMount(() => {
        readyPage = true
    })

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const today = new Date()
    const curHr = today.getHours()
    let greetings = ''
    if (curHr < 12) {
        greetings = 'Selamat Pagi'
    } else if (curHr < 18) {
        greetings = 'Selamat Sore'
    } else {
        greetings = 'Selamat Malam'
    }



    let beratBadan;
    let tinggiBadan;
    $: result = beratBadan / (tinggiBadan/100 * 2);

    let bmiColor = 'black'
    let id = 'bmi-result'
    $: switch (true) {
    case result >= 1 && result <= 17:
        bmiColor = 'red';
        break;
    case result >= 17 && result <= 25:
        bmiColor = 'green';
        break;
    case result > 25:
        bmiColor = 'red';
        break;
    case isNaN(result):
        bmiColor = 'black';
        break;
    default:
        // Handle other cases if needed
        break;
}

const aksesCepat = [
    {
        name: 'Reminders',
        href: '/bmi-kalkulator',
        icon: 'solar:bell-bold'
    },
    {
        name: 'Grafik',
        href: '/',
        icon: 'solar:pills-bold-duotone'
    },
    {
        name: 'Jadwal',
        href: '/',
        icon: 'solar:calendar-bold-duotone'
    },
    {
        name: 'Games',
        href: '/',
        icon: 'solar:star-fall-bold-duotone'
    },
    {
        name: 'Games',
        href: '/',
        icon: 'solar:star-fall-bold-duotone'
    },
    {
        name: 'Games',
        href: '/',
        icon: 'solar:star-fall-bold-duotone'
    },
    {
        name: 'Games',
        href: '/',
        icon: 'solar:star-fall-bold-duotone'
    }
]

const articles = [
    {
        title: 'Pariatur dolor sint mollit ut irure magna incididunt.',
        href: '#',
        description: 'Commodo duis tempor irure est. Officia est cillum culpa aute anim dolore dolor deserunt fugiat aute elit ea occaecat. Ut amet anim officia esse veniam officia dolore enim proident.'
    },
    {
        title: 'Pariatur dolor sint mollit ut irure magna incididunt.',
        href: '#',
        description: ']Ut amet anim officia esse veniam officia dolore enim proident. Quis ipsum nostrud ea dolore adipisicing proident tempor dolore esse. Id veniam irure ad mollit.'
    },
    {
        title: 'Pariatur dolor sint mollit ut irure magna incididunt.',
        href: '#',
        description: ']Quis ipsum nostrud ea dolore adipisicing proident tempor dolore esse. Id veniam irure ad mollit.'
    }
]

if (data.user?.collectionName === 'admins') {
    userMessage = 'Admin'

}

const frontName = data?.user?.name.split(" ")[0]
console.log(data.user)

</script>

{#if readyPage}


<div class="welcome" in:fade={{duration: 200}}>
    <div class="text-left">
      <div class="max-w-md m-5 mt-10 mb-[6em]  ">
<h1 class="welcome title text-3xl font-semibold tracking-tight ">{greetings}, <br> {userMessage} {capitalize(frontName)} <iconify-icon icon="fluent-emoji:sparkles"></iconify-icon>
</h1>
        </div>
    </div>
</div>

<!-- Akses Cepat -->
<div >
    <h3 class="font-medium my-2 mx-4" in:fly="{{ y: 10, duration: 800, easing: cubicInOut }}">Akses Cepat</h3>

    <div class="grid grid-flow-col grid-cols-20 gap-x-3 sm:gap-x-2 quick-access mx-4 h-full no-scrollbar overflow-x-auto pb-10 masked-overflow overscroll-x-contain sm:grid-cols-8">

        {#each aksesCepat as itemAkses, i}
        <div class="w-16 h-16 grid grid-row-[min-content]" in:fly|global="{{ y: 30, duration: 1000, easing: cubicInOut, delay: 50 * i }}">

                <a href=/home{itemAkses.href} class="btn btn-lg btn-primary btn-square w-16 h-16 shadow-lg shadow-primary/40 no-animation ml-1"  >
                    <iconify-icon icon={itemAkses.icon} width="30" class="drop-shadow-lg"></iconify-icon>
                    
                 </a>
                 <p class="block text-[0.60em] text-center my-2 font-medium">{itemAkses.name}</p>
    

        </div>
        {/each}
    </div>
</div>
{/if}
<div class="home-feed my-[4em]">
    <h3 class="font-medium mt-2 mx-4" in:fly|global="{{ y: 50, duration: 800, easing: cubicInOut, delay: 80 }}">Artikel</h3>



<div class="grid-cols-1 sm:grid md:grid-cols-3 ">
    {#each articles as a, i}
    <a href="#!">
    <div
      class="mx-3 mt-6 flex flex-col self-start rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-base-100 sm:shrink-0 sm:grow sm:basis-0" in:fly|global="{{ y: 200, duration: 1000, easing: cubicInOut, delay: 100 * i }}">
      <img
      class="rounded-t-lg aspect-[8/3]"
      src="https://placekitten.com/500/188"
      alt="Hollywood Sign on The Hill" />
      
 
      
      <div class="p-6">
        <h5
          class="mb-2 text-md font-medium leading-tight text-neutral-800">
          {a.title}
        </h5>
        <p class="mb-4 text-[0.60em] text-neutral-600">
          {a.description}
        </p>
      </div>
    </div>
</a>
    {/each}
  </div>
</div>


<style>
.masked-overflow {
    /* scroll bar width, for use in mask calculations */
    --scrollbar-width: 0px;

    /* mask fade distance, for use in mask calculations */
    --mask-height: 32px;


    /* Our height limit */
    height: max-content;

    /* Need to make sure container has bottom space,
  otherwise content at the bottom is always faded out */
    padding-bottom: var(--mask-height);

    /* Keep some space between content and scrollbar */

    /* The CSS mask */

    /* The content mask is a linear gradient from top to bottom */
    --mask-image-content: linear-gradient(
        to right,
        transparent,
        black calc(10% - 2em),
        rgb(0, 0, 0) calc(100% - 2em),
        rgba(0, 0, 0, 0)
    );

    /* Here we scale the content gradient to the width of the container 
  minus the scrollbar width. The height is the full container height */
    --mask-size-content: calc(100% - var(--scrollbar-width)) 100%;

    /* The scrollbar mask is a black pixel */
    --mask-image-scrollbar: linear-gradient(black, black);

    /* The width of our black pixel is the width of the scrollbar.
  The height is the full container height */
    --mask-size-scrollbar: var(--scrollbar-width) 100%;

    /* Apply the mask image and mask size variables */
    mask-image: var(--mask-image-content), var(--mask-image-scrollbar);
    mask-size: var(--mask-size-content), var(--mask-size-scrollbar);

    /* Position the content gradient in the top left, and the 
  scroll gradient in the top right */
    mask-position: 0 0, 100% 0;

    /* We don't repeat our mask images */
    mask-repeat: no-repeat, no-repeat;
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  .masked-overflow {
    --mask-image-content: linear-gradient(
        to right,
        black,
        black


    );

}
}
</style>