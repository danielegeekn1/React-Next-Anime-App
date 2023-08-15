"use client";
import AutoPlayingSlider from "@/components/AutoPlayingSlider";
import { animeDataProps } from "@/types";
import { fetchAnime } from "@/utils/FetchFromApi";
import { useEffect, useState } from "react";
export default function Home() {
	const [animeData, setAnimeData] = useState<animeDataProps[]>([]);
	useEffect(() => {
		fetchAnime().then((data) => {
			let animeDataToPass = data.data;
			setAnimeData(animeDataToPass);
		});
	}, []);
	console.log("passed anime data", animeData);
	return (
		<main>
			<div className="_mainpageApp flex flex-col h-[200vh] w-[100vw] border-[3px]">
				<div className="_animeTopPageSection flex justify-between flex-[1] ">
					<div className="_autosliderSection flex flex-[2] border-[2px] border-[red]">
						<AutoPlayingSlider animeData={animeData} />
					</div>
					<div className="_animeReccomendationsSection flex flex-[1] border-[2px] border-[blue]">
						Anime Reccomendations Section
					</div>
				</div>

				<div className="_animeListSection flex flex-[1] border-[2px] border-[green]">
					Anime List Section
				</div>
				<div className="_animeNewsSection flex flex-[1] border-[2px] border-[orange]">
					Anime News Section
				</div>
			</div>
		</main>
	);
}
