<script>
	import { getImageURL } from '$lib/utils';
	import { marked } from 'marked'
	// import { pb } from '$lib/pocketbase.js'
	export let data;

	console.log(data)
	console.log(data.article)
	
	function dateFormat(string) {
		const date = new Date(string);
		const options = { 
			day: 'numeric', 
			month: 'long', 
			year: 'numeric', 
			hour: '2-digit', 
			minute: 'numeric',
			hour12: true,           // Use 12-hour clock (e.g., AM/PM)
		};

    const formatDate = date.toLocaleString('en-GB', options);
	return formatDate
	}

	console.log(data.article.author)
</script>
<p>Artikel</p>
<div class="flex flex-col w-full mt-4">
	<div class="avatar">
		<div class="w-full h-36 rounded">
			<img
				src={data.article?.thumbnail
					? getImageURL(data.article.collectionId, data.article.id, data.article.thumbnail, '480x120')
					: `https://placehold.co/480x120/436acd/FFF?font=montserrat&text=${data.article.title}`}
				alt="article thumbnail"
			/>
		</div>
	</div>
	<h1 class="text-3xl font-bold mt-4">
		{data.article.title}
	</h1>
	<p class="text-xs text-gray-700 mt-1">{dateFormat(data.article.created)}</p>
	<!-- <p class="text-2xl font-light mt-2">{data.article}</p> -->
	<div class="preview min-h-fulll min-w-full p-3">{@html marked(`${data.article.field}`)}</div>

	<p></p>
</div>
<style>


</style>