<script lang="ts">
	import AnimeCard from './AnimeCard.svelte';
	import type { AnimeProp } from '$lib';

	import { fetchNewData } from '$lib/utils';

	let pageNumber = $state(1);
	let fetching = $state(false); // tracks if we are in the middle of a fetch or not
	let animeArray: AnimeProp[] = $state([]);

	let spinnerContainer: HTMLElement;

	let options = {
		root: null,
		rootMargin: '0px', // visibility offset from edge of screen, 0 means no offset
		threshold: 0.35 //if 30% of the spinnerContainer is visible we run the callback func
	};

	async function getNewData() {
		pageNumber += 1; // get next page
		fetching = true;
		const request = await fetchNewData(pageNumber);
		try {
			request.animes.forEach((anime) => {
				animeArray.push(anime);
			});
			fetching = false;
		} catch (error) {
			console.error(error);
		}
	}

	// attach an observer to spinnerContainer to get a callback whenever it becomes viewable
	$effect(() => {
		if (spinnerContainer) {
			// when this html element is initialized and is not null
			let observer = new IntersectionObserver(() => {
				getNewData();
			}, options);

			observer.observe(spinnerContainer); // start observing this html element
		}
	});
</script>
<section class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {#if animeArray.length > 0}
        {#each animeArray as anime, i}
            <AnimeCard {anime} />
        {/each}
    {/if}
</section>

<div class="flex w-full items-center justify-center" bind:this={spinnerContainer}>
    {#if fetching}
	<div>
		<img src="./spinner.svg" alt="spinner" width={56} height={56} />
	</div>
    {/if}
</div>
