"use client";
import { useState } from "react";
import {
	animeMenuTitlesChoices,
	mangaAndAnimeMenuTitles,
	mangaMenuTitlesChoices,
} from "@/constants";
import Link from "next/link";

const Navbar = () => {
	const [selectedMenus, setSelectedMenus] = useState({
		anime: false,
		manga: false,
		lastUpdates: false,
	});

	const handleTitleClick = (title: string) => {
		setSelectedMenus({
			anime: title === "Anime" ? !selectedMenus.anime : false,
			manga: title === "Manga" ? !selectedMenus.manga : false,
			lastUpdates:
				title === "Last Updates" ? !selectedMenus.lastUpdates : false,
		});
	};

	return (
		<ul className="flex justify-between items-center m-[3rem] font-bold">
			{mangaAndAnimeMenuTitles.map((animeOrManga) => (
				<li
					key={animeOrManga.id}
					onClick={() => handleTitleClick(animeOrManga.mangaAndAnimeMenuTitle)}
				>
					{animeOrManga.mangaAndAnimeMenuTitle}
					{animeOrManga.mangaAndAnimeMenuTitle === "Anime" &&
						selectedMenus.anime && (
							<ul className="absolute left-0 mt-2">
								{animeMenuTitlesChoices.map((anime) => (
									<Link href={anime.url}>
										<li key={anime.id}>{anime.animeMenuListName}</li>
									</Link>
								))}
							</ul>
						)}
					{animeOrManga.mangaAndAnimeMenuTitle === "Manga" &&
						selectedMenus.manga && (
							<ul className="absolute left-[38rem] mt-2">
								{mangaMenuTitlesChoices.map((manga) => (
									<Link href={manga.url}>
										<li key={manga.id}>{manga.mangaMenuListName}</li>
									</Link>
								))}
							</ul>
						)}
					{animeOrManga.mangaAndAnimeMenuTitle === "Last Updates" &&
						selectedMenus.lastUpdates && (
							<ul>
								{/* Render the appropriate list for "Last Updates" here */}
							</ul>
						)}
				</li>
			))}
		</ul>
	);
};

export default Navbar;
