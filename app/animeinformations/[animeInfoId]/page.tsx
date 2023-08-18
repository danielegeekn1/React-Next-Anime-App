"use client";
import { animeTrailerDataProps } from "@/types";
import { fetchFullAnimeWithId } from "@/utils/FetchFromApi";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const page = ({ params }: any) => {
	const [animeTrailerData, setAnimeTrailerData] =
		useState<animeTrailerDataProps>();
	let animeid = params.animeInfoId;
	useEffect(() => {
		fetchFullAnimeWithId(animeid).then((data) => {
			let animeTrailerDataToPass = data.data;
			setAnimeTrailerData(animeTrailerDataToPass);
		});
	}, [animeid]);
	console.log("animetr", animeTrailerData?.trailer.url);
	let _animeTrailer = animeTrailerData?.trailer.url;
	return (
		<div>
			<h1>Anime Trailer</h1>
			<ReactPlayer url={_animeTrailer} className="react-player" controls />
		</div>
	);
};

export default page;
