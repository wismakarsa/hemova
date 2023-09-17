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

    const formatDate = date.toLocaleString('in-ID', options);
	return formatDate
	}

	console.log('author name', data.article.expand.author.name)
</script>
<div class="text-xs breadcrumbs">
	<ul>
	  <li><a href="/home">Home</a></li> 
	  <li><a href="/home">Article</a></li> 
	  <li class="truncate">{data.article.title}</li>
	</ul>
  </div>
<div class="flex flex-col w-full mt-4 px-2">
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
	<div class="pl-1">


	<h1 class="text-xl sm:text-3xl font-bold mt-4">
		{data.article.title}
	</h1>
	<div class="about flex flex-col items-center text-[0.65em] text-gray-700 mt-1 ">

			
		<span class="inline-block">
			{dateFormat(data.article.created)}
		</span>
		<br>
		<div class="avatar">
			<div class="w-[1.2em] rounded-xl mr-1">
				<img src={data.article?.expand.author.avatar ? getImageURL(data.article?.expand.author.collectionId, data.article?.expand.author.id, data.article?.expand.author.avatar) : `https://ui-avatars.com/api/?name=${data.article?.expand.author.name}`}  alt="User avatar" />
			</div>
		</div>
		<span class="font-semibold block ">
			{data.article.expand.author.name}
		</span>

	</div>
	<div class="divider"></div>
	<!-- <p class="text-2xl font-light mt-2">{data.article}</p> -->
	<div class="preview min-h-fulll min-w-full py-4 text-sm">{@html marked(`${data.article.field}`)}</div>

	</div>
</div>
<style>


</style>