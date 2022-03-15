import { useNavigate } from "react-router-dom";

const MenuSection = ({
	label,
	menuBanner,
	alt,
	onClickLink,
}: {
	label: string;
	menuBanner: string;
	alt: string;
	onClickLink: string;
}) => {
	const navigate = useNavigate();
	const navigateToMenu = () => navigate(onClickLink);

	return (
		<li onClick={navigateToMenu} className="w-96 cursor-pointer">
			<img src={menuBanner} className="rounded-2xl shadow-lg mb-2" alt={alt} />
			<h3 className="ml-3 font-medium text-slate-900">{label}</h3>

			<p className="ml-3 text-slate-500 font-medium">
				60 mins &#183; $0 delivery fee, first order
			</p>
		</li>
	);
};

export default MenuSection;
