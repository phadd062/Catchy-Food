import { NavLink } from "react-router-dom";

const NavMenu = ({ to, label }: { to: string; label: string }) => {
	return (
		<li>
			<NavLink
				to={to}
				className="py-2 px-1 font-bold text-lg tracking-wider cursor-pointer border-y-2 border-transparent hover:border-b-slate-500 duration-300"
			>
				{label}
			</NavLink>
		</li>
	);
};

export default NavMenu;
