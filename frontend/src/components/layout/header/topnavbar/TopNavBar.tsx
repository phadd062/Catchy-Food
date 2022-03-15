import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const TopNavBar = () => {
	return (
		<nav className="bg-yellow-400 shadow-sm shadow-yellow-600 mb-[0.125rem] py-3">
			<ul className="flex justify-between items-center px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10">
				<li className="font-medium tracking-wide">Ottawa, Ontario, Canada</li>
				<NavLink
					to="meal"
					className="flex flex-row justify-center items-center gap-2 bg-slate-700 px-3 py-2 rounded-md tracking-wide text-gray-50 shadow-xl transition-all duration-500 bg-gradient-to-l from-slate-800 via-gray-500 to-slate-600 bg-[length:200%_200%] bg-left hover:bg-right"
				>
					<FontAwesomeIcon icon={faUtensils} />
					<span>Meal of the week</span>
				</NavLink>
			</ul>
		</nav>
	);
};

export default TopNavBar;
