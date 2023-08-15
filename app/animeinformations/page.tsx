"use client";
import { animeDataProps } from "@/types";
import { fetchAnime } from "@/utils/FetchFromApi";
import { useEffect, useState } from "react";

const page = () => {
	const [animeData, setAnimeData] = useState<animeDataProps[]>([]);
	useEffect(() => {
		fetchAnime().then((data) => {
			let animeDataToPass = data.data;
			setAnimeData(animeDataToPass);
		});
	}, []);
	return (
		<div className="flex justify-around flex-wrap gap-[0.5rem] border-[3px] border-[red]">
			{animeData.map((anime, idx) => (
				<div className="flex flex-col flex-[30%]" key={idx}>
					<h1>{anime.title}</h1>
					<img src={anime.images.jpg.image_url} alt="anime info image url" />
					<p>{anime.synopsis}</p>
				</div>
			))}
		</div>
	);
};

export default page;
