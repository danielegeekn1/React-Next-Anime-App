"use client";
import { fetchAnime } from "@/utils/FetchFromApi";
import { useEffect, useState } from "react";

const page = () => {
	const [animeData, setAnimeData] = useState([]);
	useEffect(() => {
		fetchAnime().then((data) => {
			let animeDataToPass = data.data;
			setAnimeData(animeDataToPass);
		});
	}, []);
	console.log("animed", animeData);
	return (
		<div>
			<h1>anime informations</h1>
		</div>
	);
};

export default page;
