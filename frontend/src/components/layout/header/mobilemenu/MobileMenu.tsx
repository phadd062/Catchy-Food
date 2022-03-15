import MobileMenuButton from "./MobileMenuButton";

const MobileMenu = ({
	closeMobileMenuModal,
}: {
	closeMobileMenuModal: () => void;
}) => {
	return (
		<div className="bg-slate-200 absolute inset-0 overflow-auto">
			<div className="flex justify-end p-8">
				<button
					className="border-2 border-slate-500 rounded-md px-3 py-1 shadow-md"
					onClick={closeMobileMenuModal}
				>
					Close
				</button>
			</div>
			<ul>
				<MobileMenuButton
					closeMobileMenuModal={closeMobileMenuModal}
					label="Home"
					to=""
				/>
				<MobileMenuButton
					closeMobileMenuModal={closeMobileMenuModal}
					label="Menu"
					to="menu"
				/>
				<MobileMenuButton
					closeMobileMenuModal={closeMobileMenuModal}
					label="About Us"
					to="about"
				/>
				<MobileMenuButton
					closeMobileMenuModal={closeMobileMenuModal}
					label="Contact Us"
					to="contact"
				/>
			</ul>
		</div>
	);
};

export default MobileMenu;
