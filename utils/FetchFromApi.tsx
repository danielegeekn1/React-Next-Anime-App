const baseAnimeUrl = "https://api.jikan.moe/v4/anime";
const baseMangaUrl = "https://api.jikan.moe/v4/manga";
export async function fetchAnime() {
	const animeData = await fetch(`${baseAnimeUrl}`);
	const res = await animeData.json();
	console.log("anime res ", res);
	return res;
}
export async function fetchAnimeFromUserTitle(userTypedSearch: string) {
	const animeData = await fetch(
		`${baseAnimeUrl}?q=${userTypedSearch}&limit=20`
	);
	const res = await animeData.json();
	console.log("anime res ", res);
	return res;
}
export async function fetchMangaFromUserTitle(userTypedSearch: string) {
	const mangaData = await fetch(
		`${baseMangaUrl}?q=${userTypedSearch}&limit=20`
	);
	const res = await mangaData.json();
	console.log("manga res", res);
	return res;
}
export async function fetchAnimeEpisodes(animeId: string) {
	const animeEpisodeData = await fetch(`${baseAnimeUrl}/${animeId}/episodes`);
	const res = await animeEpisodeData.json();
	console.log("anime episodes res", res);
	return res;
}
export async function fetchFullAnimeWithId(animeId: string) {
	const animeFromIdData = await fetch(`${baseAnimeUrl}/${animeId}/full`);
	const res = await animeFromIdData.json();
	console.log("anime episodes res", res);
	return res;
}
export async function fetchAnimePictures(animeId: string) {
	const animePicturesData = await fetch(`${baseAnimeUrl}/${animeId}/pictures`);
	const res = await animePicturesData.json();
	console.log("anime pictures res", res);
	return res;
}
export async function fetchAnimeNews(animeId: string) {
	const animeNewsData = await fetch(`${baseAnimeUrl}/${animeId}/news`);
	const res = await animeNewsData.json();
	console.log("anime news res", res);
	return res;
}
export async function fetchAnimeCharacters(animeId: string) {
	const animeNewsData = await fetch(`${baseAnimeUrl}/${animeId}/characters`);
	const res = await animeNewsData.json();
	console.log("anime character res", res);
	return res;
}
export async function fetchAnimeReccomendations(animeId: string) {
	const animeReccomendationsData = await fetch(
		`${baseAnimeUrl}/${animeId}/reccomendations`
	);
	const res = await animeReccomendationsData.json();
	console.log("anime reccomendations res", res);
	return res;
}

export async function fetchMangaReccomendations(mangaId: string) {
	const mangaReccomendationsData = await fetch(
		`${baseMangaUrl}/${mangaId}/reccomendations`
	);
	const res = await mangaReccomendationsData.json();
	console.log("manga reccomendations res", res);
	return res;
}
