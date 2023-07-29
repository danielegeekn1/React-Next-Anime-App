import { mangaAndAnimeMenuTitles } from "@/constants";

const Navbar = () => {
	return (
		<ul className="flex justify-between items-center m-[3rem] font-bold">
			{mangaAndAnimeMenuTitles.map((animeOrManga) => (
				<li key={animeOrManga.id}>{animeOrManga.mangaAndAnimeMenuTitle}</li>
			))}
		</ul>
	);
};

export default Navbar;
