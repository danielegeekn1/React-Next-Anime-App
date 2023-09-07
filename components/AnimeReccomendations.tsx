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
				<div
					key={idx}
					className="flex flex-col flex-[30%] mb-[1rem] object-contain"
				>
					<h3 className="bg-[green] flex-[15%]">{animeinfo.title}</h3>
					<img
						src={animeinfo.images.jpg.image_url}
						alt="anime info img"
						className="flex-[70%] bg-[red] "
					/>
					<Link
						href={{
							pathname: "/animeinformations",
							query: {
								_animeTitle: animeinfo.title,
								_animeStatus: animeinfo.status,
								_animeStory: animeinfo.synopsis,
								_animeImage: animeinfo.images.jpg.image_url,
								_animeId: animeinfo.mal_id,
							},
						}}
					>
						<p className="flex-[15%] bg-[purple]">
							click here to learn more about this anime
						</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default AnimeReccomendations;
