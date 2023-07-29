import {
	animeMenuTitlesChoices,
	mangaAndAnimeMenuTitles,
	mangaMenuTitlesChoices,
} from "@/constants";

const Navbar = () => {
	return (
		<ul className="flex justify-between items-center m-[3rem] font-bold">
			{mangaAndAnimeMenuTitles.map((animeOrManga) => (
				<li key={animeOrManga.id}>
					{animeOrManga.mangaAndAnimeMenuTitle}
					{animeOrManga.mangaAndAnimeMenuTitle === "Anime" && (
						<ul>
							{animeMenuTitlesChoices.map((anime) => (
								<li key={anime.id}>{anime.animeMenuListName}</li>
							))}
						</ul>
					)}
					{animeOrManga.mangaAndAnimeMenuTitle === "Manga" && (
						<ul>
							{mangaMenuTitlesChoices.map((manga) => (
								<li key={manga.id}>{manga.mangaMenuListName}</li>
							))}
						</ul>
					)}
					{animeOrManga.mangaAndAnimeMenuTitle === "Last Updates" && (
						<ul>
							{mangaMenuTitlesChoices.map((manga) => (
								<li key={manga.id}>{manga.mangaMenuListName}</li>
							))}
						</ul>
					)}
				</li>
			))}
		</ul>
	);
};

export default Navbar;
