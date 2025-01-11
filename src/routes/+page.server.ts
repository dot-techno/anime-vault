
import { error } from '@sveltejs/kit';
import type { AnimeProp } from '$lib';

export const load = (async () => {
    // load first page of anime data from api -- more data can will be loaded by fetch func in utils.ts
    const request = await fetch('https://shikimori.one/api/animes?page=1&limit=10&order=popularity');
    let animes;
    try {
        animes = await request.json();

    } catch(err){
        error(401, 'Error loading anime data from api');
    }

    return {animes} as {animes: AnimeProp[]}; // specify type to get type safety in +page.svelte

});