"use client";
import {
	animeMenuTitlesChoices,
	mangaAndAnimeMenuTitles,
	mangaMenuTitlesChoices,
} from "@/constants";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [selectedMenus, setSelectedMenus] = useState({
		anime: false,
		manga: false,
		lastUpdates: false,
	});
	const setRelatedDropDownMenu = (menuTitle: string) => {
		setSelectedMenus({
			anime: menuTitle === "Anime" ? !selectedMenus.anime : false,
			manga: menuTitle === "Manga" ? !selectedMenus.manga : false,
			lastUpdates:
				menuTitle === "Last Updates" ? !selectedMenus.lastUpdates : false,
		});
	};
	return (
		<div>
			{/* className="inline-block relative" */}
			<div className="relative">
				{mangaAndAnimeMenuTitles.map((animeMenuTitles) => (
					<button
						className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
						onClick={() =>
							setRelatedDropDownMenu(animeMenuTitles.mangaAndAnimeMenuTitle)
						}
					>
						<span className="mr-1" key={animeMenuTitles.id}>
							{animeMenuTitles.mangaAndAnimeMenuTitle}
							{animeMenuTitles.mangaAndAnimeMenuTitle === "Anime" &&
								selectedMenus.anime && (
									<ul className="absolute text-gray-700 pt-1">
										{animeMenuTitlesChoices.map((animeC) => (
											<Link href={animeC.url}>
												<li
													key={animeC.id}
													className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
												>
													{animeC.animeMenuListName}
												</li>
											</Link>
										))}
									</ul>
								)}
							{animeMenuTitles.mangaAndAnimeMenuTitle === "Manga" &&
								selectedMenus.manga && (
									<ul className="absolute text-gray-700 pt-1">
										{mangaMenuTitlesChoices.map((mangaC) => (
											<Link href={mangaC.url}>
												<li
													key={mangaC.id}
													className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
												>
													{mangaC.mangaMenuListName}
												</li>
											</Link>
										))}
									</ul>
								)}
						</span>
						<svg
							className="fill-current h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</button>
				))}
			</div>
		</div>
	);
};

export default Navbar;
