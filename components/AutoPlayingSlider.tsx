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
		<div className="w-[100%] h-[100%] border-[3px] border-[grey] overflow-hidden flex">
			<div className="flex flex-[2] relative h-[100%] w-[60%] ">
				{animeData.map((animed, idx) => (
					<div
						key={idx}
						className={`absolute top-[1.5rem] left-0 w-[90%] h-[90%] ${
							idx === index ? "block" : "hidden"
						}`}
						style={{
							objectFit: "cover",
						}}
					>
						<div className="flex flex-col border-[3px] border-[yellow] h-full w-full">
							<h4 className="flex flex-[25%]">{animed.title}</h4>
							<Link href={`/animeinformations/${animed.mal_id}`}>
								<img
									src={animed.images.jpg.image_url}
									alt="anime image for slider section"
									className="border-[2px] border-[purple] flex flex-[50%]"
								/>
								<h5 className="flex flex-[25%]">
									Released in year {animed.year}
								</h5>
							</Link>
							<div className="flex flex-col border-[3px] border-[pink] ">
								<h3>total episodes {animed.episodes}</h3>
								<h3>{animed.duration}</h3>
								<h3>{animed.status}</h3>
								<h3>
									aired from {animed.aired.from} to {animed.aired.to}
								</h3>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="flex flex-[1] flex-col overflow-y-scroll">
				{animeData.map((animei, idx) => (
					<p key={idx}>{animei.title}</p>
				))}
			</div>
		</div>
	);
};

export default AutoPlayingSlider;
