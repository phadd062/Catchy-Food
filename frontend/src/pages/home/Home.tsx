import Banner from "media/banner1.jpg";

const Home = () => {
	return (
		<>
			<section
				className="bg-slate-300 h-96 flex flex-col justify-center items-center"
				style={{
					background: `url(${Banner}) left 10% bottom 50%/cover no-repeat`,
				}}
			/>
			<div className="flex gap-20 justify-center items-center my-10">
				<div className="w-80 h-80 border-2 border-slate-500 rounded shadow-lg shadow-slate-600/50 p-5 bg-slate-200/30">
					<div className="flex flex-col justify-center items-center">
						<h1 className="text-2xl font-medium mb-2">Clean</h1>
						<p>We clean all our kitchen equipment on a daily bases</p>
						<ul>
							<li>Gloves</li>
							<li>Masks</li>
							<li>Clean equipment</li>
						</ul>
					</div>
				</div>
				<div className="w-80 h-96 border-2 border-slate-500 rounded shadow-xl shadow-slate-600/50 p-5 bg-slate-500/50">
					<div className="flex flex-col justify-center items-center">
						<h1 className="text-2xl font-medium mb-2">Clean</h1>
						<p>We clean all our kitchen equipment on a daily bases</p>
						<ul>
							<li>Gloves</li>
							<li>Masks</li>
							<li>Clean equipment</li>
						</ul>
					</div>
				</div>
				<div className="w-80 h-80 border-2 border-slate-500 rounded shadow-lg shadow-slate-600/50 p-5 bg-slate-200/30">
					<div className="flex flex-col justify-center items-center">
						<h1 className="text-2xl font-medium mb-2">Clean</h1>
						<p>We clean all our kitchen equipment on a daily bases</p>
						<ul>
							<li>Gloves</li>
							<li>Masks</li>
							<li>Clean equipment</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
