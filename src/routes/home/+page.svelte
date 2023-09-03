<script>
    export let data;
    // your script goes here

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
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


const frontName = data?.user?.name.split(" ")[0]


</script>


  
<div class="welcome">
    <div class="text-left">
      <div class="max-w-md m-5 mt-10 mb-[6em]  ">
<h1 class="welcome title text-3xl font-bold">Welcome Bunda {capitalize(frontName)}
</h1>
        </div>
    </div>
</div>

<div class="bmi-calculator m-5">
    <h1 class="text-xl">BMI Calculator</h1>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="label">
        <span class="label-text">Berat Badan</span>
      </label>
    <input bind:value={beratBadan} id="berat-badan" type="number" min="1" placeholder="Berat Badan (kg)" class="input input-bordered w-full max-w-xs" />
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="label">
        <span class="label-text">Tinggi Badan</span>
      </label>
    <input bind:value={tinggiBadan} id="tinggi-badan" type="number" placeholder="Tinggi Badan (cm)" class="input input-bordered w-full max-w-xs" />
    <br>
    <button class="btn btn-wide my-2">Hitung</button>
      <br>
    <h1 style="display: inline;background: {bmiColor}; color:white" class="text-md" id="bmi-result">{result.toFixed(2)}</h1>
    <h1>bb : {beratBadan}</h1>
    <h1>tb : {tinggiBadan}</h1>
</div>




<style>

</style>