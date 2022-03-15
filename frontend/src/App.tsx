import { Routes, Route } from "react-router-dom";
import TopNavBar from "components/layout/header/topnavbar/TopNavBar";
import NavBar from "components/layout/header/navbar/NavBar";
import Home from "pages/home/Home";
import Meal from "pages/meal/Meal";
import About from "pages/about/About";
import Contact from "pages/contact/Contact";
import Cart from "pages/cart/Cart";
import Login from "pages/account/Login";
import Create from "pages/account/Create";
// import Footer from "components/layout/footer/Footer";
import ScrollToTop from "components/scroll/ScrollToTop";
import MenuRoute from "components/route/menu/MenuRoute";

const App = () => {
	return (
		<>
			<ScrollToTop />
			<TopNavBar />
			<NavBar />
			<Routes>
				<Route path="" element={<Home />} />
				<Route path="menu/*" element={<MenuRoute />} />
				<Route path="meal" element={<Meal />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="cart" element={<Cart />} />
				<Route path="login" element={<Login />} />
				<Route path="create" element={<Create />} />
			</Routes>
			{/* <Footer /> */}
		</>
	);
};

export default App;
