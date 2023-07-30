"use client";
import AutoPlayingSlider from "@/components/AutoPlayingSlider";
import { fetchAnime } from "@/utils/FetchFromApi";

export default function Home() {
	return (
		<main>
			<h1>Main Anime App</h1>
			<div className="_mainpageApp flex flex-col">
				<div className="_animeTopPageSection flex">
					<div className="_autosliderSection">
						<AutoPlayingSlider />
					</div>
					<div className="_animeReccomendationsSection">
						Anime Reccomendations Section
					</div>
				</div>

				<div className="_animeListSection">Anime List Section</div>
				<div className="_animeNewsSection">Anime News Section</div>
			</div>
			<button onClick={() => fetchAnime()}>fetch anime</button>
		</main>
	);
}
