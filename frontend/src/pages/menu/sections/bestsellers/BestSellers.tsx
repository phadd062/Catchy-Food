import jaffa_burger from "media/jaffa_burger/jaffa_burger.jpg";

const BestSellers = () => {
	return (
		<div className="bg-slate-100 flex flex-col justify-center items-center border-4 rounded-md border-slate-900 p-10 shadow-2xl shadow-slate-400">
			<h1 className="text-4xl font-bold text-slate-800 mb-8">
				~~~ Best Sellers ~~~
			</h1>
			<div className="flex flex-wrap justify-between gap-10">
				<img className="w-96" src={jaffa_burger} alt="jaffa" />
				<img className="w-96" src={jaffa_burger} alt="jaffa" />
				<img className="w-96" src={jaffa_burger} alt="jaffa" />
			</div>
		</div>
	);
};

export default BestSellers;
