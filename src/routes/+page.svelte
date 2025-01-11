<script>
	import AnimeCard from '$lib/components/AnimeCard.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	let { data } = $props();
</script>

<div class="mx-auto max-w-7xl bg-[#0F1117]">
	<main class="sm:p-16 flex-col flex gap-10 px-8 py-16">
		<h2 class="text-white text-3xl font-bold">Explore Anime</h2>
		<section class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each data.animes as anime}
				<AnimeCard {anime} />
			{/each}
		</section>
		<div id="spinner-container">
            <Spinner />
        </div>
	</main>
</div>
