import type { AnimeProp } from '$lib';

export const fetchNewData = async function (pageNumer: Number) {
	let request = await fetch(
		`https://shikimori.one/api/animes?page=${pageNumer}&limit=10&order=popularity`
	);
	let animes;

	try {
		animes = await request.json();
	} catch (err) {
		console.log('Error loading anime data from api');
	}

	return { animes } as { animes: AnimeProp[] };
};
