import { animeDataProps } from "@/types";
import { useEffect, useRef, useState } from "react";

type AutoPlayingSliderProps = {
	animeData: animeDataProps[];
};
const AutoPlayingSlider: React.FC<AutoPlayingSliderProps> = ({ animeData }) => {
	const [index, setIndex] = useState(0);
	const animeSliderRef: any = useRef(0);
	function resetTimeout() {
		if (animeSliderRef.current) {
			clearTimeout(animeSliderRef.current);
		}
	}
	useEffect(() => {
		resetTimeout();
		const intervalId = setInterval(() => {
			setIndex((prevIndex) =>
				prevIndex === animeData.length - 1 ? 0 : prevIndex + 1
			);
		}, 4000);
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
						<div>
							<h4>{animed.title}</h4>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default AutoPlayingSlider;
