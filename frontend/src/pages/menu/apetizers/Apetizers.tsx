import jaffa_burger from "media/menu/jaffa_burger/jaffa_burger.jpg";
import BackButton from "../BackButton";
import Dishes from "./Dishes";
import Modal from "../modal/Modal";
import { useState } from "react";

const Apetizers = () => {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<>
			{modalOpen && <Modal setModalOpen={setModalOpen} />}
			<BackButton />
			<div className="flex justify-center">
				<img className="h-96 mb-8" src={jaffa_burger} alt="burger" />
			</div>
			<div className="mx-24 gap-14 grid grid-cols-2 mb-10">
				<Dishes setModalOpen={setModalOpen} />
				<Dishes setModalOpen={setModalOpen} />
				<Dishes setModalOpen={setModalOpen} />
				<Dishes setModalOpen={setModalOpen} />
				<Dishes setModalOpen={setModalOpen} />
				<Dishes setModalOpen={setModalOpen} />
				<Dishes setModalOpen={setModalOpen} />
				<Dishes setModalOpen={setModalOpen} />
				<Dishes setModalOpen={setModalOpen} />
			</div>
		</>
	);
};

export default Apetizers;
