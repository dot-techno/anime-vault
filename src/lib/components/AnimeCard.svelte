<script lang='ts'>
    import type { AnimeProp } from '$lib/index';

    let {anime} : {anime:AnimeProp} = $props();

</script>

<div class="max-w-sm rounded relative w-full" >
    <div class="relative w-full h-[37vh]">
      <img class=" object-fill w-full h-full rounded-md"
        src={`https://shikimori.one${anime.image.original}`}
        alt={anime.name}
      />
    </div>
    <div class="py-4 flex flex-col gap-3">
      <div class="flex justify-between items-center gap-1">
        <h2 class="font-bold text-white text-xl line-clamp-1 w-full">
          {anime.name}
        </h2>
        <div class="py-1 px-2 bg-[#161921] rounded-sm">
          <p class="text-white text-sm font-bold capitalize">
            {anime.kind}
          </p>
        </div>
      </div>
      <div class="flex gap-4 items-center">
        <div class="flex flex-row gap-2 items-center">
          <img
            src="./episodes.svg"
            alt="episodes"
            class="object-contain"
          />
          <p class="text-base text-white font-bold">
            {anime.episodes || anime.episodes_aired}
          </p>
        </div>
        <div class="flex flex-row gap-2 items-center">
          <img
            src="./star.svg"
            alt="star"
            class="object-contain"
          />
          <p class="text-base font-bold text-[#FFAD49]">{anime.score}</p>
        </div>
      </div>
    </div>
  </div>