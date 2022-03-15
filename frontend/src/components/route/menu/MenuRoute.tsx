import { Routes, Route } from "react-router-dom";
import Menu from "pages/menu/Menu";
import Apetizers from "pages/menu/apetizers/Apetizers";

const MenuRoute = () => {
	return (
		<Routes>
			<Route path="" element={<Menu />} />
			<Route path="apetizers" element={<Apetizers />} />
			<Route path="mains" element={<Apetizers />} />
			<Route path="desert" element={<Apetizers />} />
			<Route path="sauce" element={<Apetizers />} />
		</Routes>
	);
};

export default MenuRoute;
