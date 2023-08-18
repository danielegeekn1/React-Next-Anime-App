"use client";

import { animeInfoProps } from "@/types";
import Link from "next/link";

interface AnimeInfoComponentProps {
	searchParams: animeInfoProps;
}
const page: React.FC<AnimeInfoComponentProps> = ({ searchParams }) => {
	let _animeTitle = searchParams._animeTitle;
	let _animeStatus = searchParams._animeStatus;
	let _animeStory = searchParams._animeStory;
	let _animeImage = searchParams._animeImage;
	let _animeId = searchParams._animeId;
	console.log("anime title", searchParams._animeTitle);
	return (
		<div className="flex flex-col items-center border-[2px] border-[blue]">
			<h2 className="font-bold">{_animeTitle}</h2>
			<Link href={`/animeinformations/${_animeId}`}>
				<img src={_animeImage} alt="animeimg" />
				<p>{_animeStory}</p>
			</Link>

			<h4>{_animeStatus}</h4>
		</div>
	);
};

export default page;
