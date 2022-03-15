import jaffa_burger from "media/menu/jaffa_burger/jaffa_burger.jpg";

const Dishes = ({
	setModalOpen,
}: {
	setModalOpen: (name: boolean) => void;
}) => {
	return (
		<div
			className="flex justify-center items-center border-2 border-slate-200 px-3 py-6 bg-slate-50 hover:bg-slate-100 rounded-sm cursor-pointer"
			onClick={() => setModalOpen(true)}
		>
			<div>
				<h1 className="text-xl font-semibold">Big Mac Bacon Extra Value</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
					molestias labore ex harum dignissimos soluta autem numquam hic
					doloremque quisquam, debitis eos repellat inventore illum distinctio?
					Cum aut maiores tempore?
				</p>
				<p>CA$11.82</p>
			</div>
			<div>
				<img
					className="w-96 rounded-xl shadow-md"
					src={jaffa_burger}
					alt="burger"
				/>
			</div>
		</div>
	);
};

export default Dishes;
