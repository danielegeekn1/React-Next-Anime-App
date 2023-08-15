import { animeDataProps } from "@/types";
import Link from "next/link";
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
		<div className="w-[80%] h-[100%] border-[3px] border-[grey]">
			{animeData.map((animed, idx) => (
				<div key={idx}>
					{idx === index && (
						<div className="flex justify-between items-start gap-[1.5rem] mt-[1.5rem]">
							<div className="flex flex-col border-[3px] border-[yellow] flex-[1]">
								<h4 className="flex flex-[1] ">{animed.title}</h4>
								<Link href={`/animeinformations/${animed.mal_id}`}>
									<img
										src={animed.images.jpg.image_url}
										alt="anime image for slider section"
										className=" border-[2px] border-[purple] flex flex-[2]"
									/>
									<h5>Released in year {animed.year}</h5>
								</Link>
							</div>
							<div className="flex flex-[1] flex-col border-[3px] border-[pink]">
								<h3>total episodes {animed.episodes}</h3>
								<h3>{animed.duration}</h3>
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default AutoPlayingSlider;
