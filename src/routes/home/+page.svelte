<script>
    export let data;
    // your script goes here

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
        name: 'BMI Kalkulator',
        href: '/bmi-kalkulator',
        icon: 'B'
    },
    {
        name: 'Grafik Pertumbuhan',
        href: '/',
        icon: 'G'
    },
    {
        name: 'Jadwal Posyandu',
        href: '/',
        icon: 'J'
    },
    {
        name: 'Show All',
        href: '/',
        icon: '...'
    }
]


const frontName = data?.user?.name.split(" ")[0]


</script>


  
<div class="welcome">
    <div class="text-left">
      <div class="max-w-md m-5 mt-10 mb-[6em]  ">
<h1 class="welcome title text-3xl font-semibold tracking-tight ">{greetings}, <br> Bunda {capitalize(frontName)} <iconify-icon icon="fluent-emoji:sparkles"></iconify-icon>
</h1>
        </div>
    </div>
</div>


<!-- Akses Cepat -->
<div>
    <h3 class="font-medium my-2 mx-4">Akses Cepat</h3>

    <div class="grid grid-cols-8 gap-x-20 sm:gap-x-10 quick-access mx-4">

        {#each aksesCepat as itemAkses}
        <div class="block w-16 h-16">
            <a href=/home{itemAkses.href} class="btn btn-lg btn-primary btn-square w-16 h-16">
                {itemAkses.icon}
             </a>
             <span class="block text-[0.60em] text-center my-2 font-medium">{itemAkses.name}</span>
        </div>
        {/each}
    </div>
</div>



<style>

</style>