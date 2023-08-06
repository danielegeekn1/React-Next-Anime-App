export interface animeDataProps {
	title: string;
	duration: string;
	background: string;
	mal_id: number;
	episodes: number;
	images: animeImagesProps;
}
export interface animeImagesProps {
	jpg: image_urlProps;
}
export interface image_urlProps {
	image_url: string;
}
