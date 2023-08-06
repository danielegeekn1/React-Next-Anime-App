import { animeDataProps } from "@/types";
import { url } from "inspector";
import { useEffect, useRef, useState } from "react";

type AutoPlayingSliderProps = {
	animeData: animeDataProps[];
};
const AutoPlayingSlider: React.FC<AutoPlayingSliderProps> = ({ animeData }) => {
	const [index, setIndex] = useState(0);
	const animeSliderRef: any = useRef(null);
	function resetTimeout() {
		if (animeSliderRef.current) {
			clearTimeout(animeSliderRef.current);
		}
	}
	const animeSliderTime = 4500;
	useEffect(() => {
		resetTimeout();
		const intervalId = setInterval(() => {
			setIndex((prevIndex) =>
				prevIndex === animeData.length - 1 ? 0 : prevIndex + 1
			);
		}, animeSliderTime);
		animeSliderRef.current = intervalId;
		return () => {
			resetTimeout();
		};
	}, [index]);
	return (
		<div>
			<h1>I am an auto playing slider</h1>
			{animeData.map((animed, idx) => (
				<div key={idx}>
					{idx === index && (
						<div className="flex gap-[0.8rem]">
							<div className="_mainAnimeinfo">
								<h4>{animed.title}</h4>
								<img
									src={animed.images.jpg.image_url}
									alt="anime image for slider section"
								/>
								<h5>Released in year {animed.year}</h5>
							</div>
							<div className="_animeStoryInformation">
								<h4>{animed.synopsis}</h4>
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default AutoPlayingSlider;
