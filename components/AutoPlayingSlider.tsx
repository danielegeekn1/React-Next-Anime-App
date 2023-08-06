import { animeDataProps } from "@/types";

type AutoPlayingSliderProps = {
	animeData: animeDataProps[];
};
const AutoPlayingSlider: React.FC<AutoPlayingSliderProps> = ({ animeData }) => {
	return (
		<div>
			<h1>I am an auto playing slider</h1>
		</div>
	);
};

export default AutoPlayingSlider;
