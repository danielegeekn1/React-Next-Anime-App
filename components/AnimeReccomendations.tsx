import { useEffect, useRef, useState } from "react";
import { animeDataProps } from "@/types";
import Link from "next/link";

type AutoPlayingSliderProps = {
	animeData: animeDataProps[];
};

const AnimeReccomendations: React.FC<AutoPlayingSliderProps> = ({
	animeData,
}) => {
	const maxVisibleItems = 6;
	const visibleAnimeData = animeData.slice(0, maxVisibleItems);
	return (
		<div className="flex flex-wrap gap-[1rem] justify-between bg-[red] w-[100%] max-h-[calc(100vh - 20px)] overflow-hidden">
			{visibleAnimeData.map((animeinfo, idx) => (
				<div key={idx} className="flex flex-col flex-[30%] mb-[1rem]">
					<h3 className="bg-[green] flex-[15%]">{animeinfo.title}</h3>
					<img
						src={animeinfo.images.jpg.image_url}
						alt="anime info img"
						className="flex-[70%] bg-[red]"
					/>
					<Link href={`/animeinformations/${animeinfo.mal_id}`}>
						<p className="flex-[15%] bg-[purple]">
							click here to see this anime trailer
						</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default AnimeReccomendations;
