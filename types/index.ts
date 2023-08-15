export interface animeDataProps {
	title: string;
	duration: string;
	background: string;
	synopsis: string;
	status: string;
	mal_id: number;
	year: number;
	episodes: number;
	aired: animeAiringInfoProps;
	trailer: animeTrailerProps;
	images: animeImagesProps;
}
export interface animeImagesProps {
	jpg: image_urlProps;
}
export interface image_urlProps {
	image_url: string;
	large_image_url: string;
}
export interface animeTrailerProps {
	url: string;
}
export interface animeAiringInfoProps {
	from: string;
	to: string;
}
