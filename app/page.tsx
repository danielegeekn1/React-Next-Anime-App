"use client";
import AutoPlayingSlider from "@/components/AutoPlayingSlider";
import { fetchAnime } from "@/utils/FetchFromApi";
import { useEffect, useState } from "react";

export default function Home() {
	const [animeData, setAnimeData] = useState([]);
	useEffect(() => {
		fetchAnime().then((data) => {
			let animeDataToPass = data.data;
			setAnimeData(animeDataToPass);
		});
	}, []);
	console.log("passed anime data", animeData);
	return (
		<main>
			<div className="_mainpageApp flex flex-col">
				<div className="_animeTopPageSection flex justify-between ">
					<div className="_autosliderSection flex flex-[3] bg-[green]">
						<AutoPlayingSlider animeData={animeData} />
					</div>
					<div className="_animeReccomendationsSection flex flex-[1] bg-[blue]">
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
