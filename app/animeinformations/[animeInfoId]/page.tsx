const page = ({ params }: any) => {
	let animeid = params.animeInfoId;
	return (
		<div>
			<h1>anime info id dynamic route{animeid}</h1>
		</div>
	);
};

export default page;
