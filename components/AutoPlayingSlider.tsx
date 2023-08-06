import { animeDataProps } from "@/types";
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
	const animeSliderTime = 6500;
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
			{animeData.map((animed, idx) => (
				<div key={idx}>
					{idx === index && (
						<div>
							<h4>{animed.title}</h4>
							<img
								src={animed.images.jpg.large_image_url}
								alt="anime image for slider section"
							/>
							<h5>Released in year {animed.year}</h5>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default AutoPlayingSlider;
