import { NavLink } from "react-router-dom";

const MobileMenuButton = ({
	closeMobileMenuModal,
	label,
	to,
}: {
	closeMobileMenuModal: () => void;
	label: string;
	to: string;
}) => {
	return (
		<li className="pl-10 py-2">
			<NavLink to={to} onClick={closeMobileMenuModal} className="text-xl font-medium">
				- {label}
			</NavLink>
		</li>
	);
};

export default MobileMenuButton;
