import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "media/logo.png";
import NavMenu from "./NavMenu";
import MobileMenu from "../mobilemenu/MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	const [mobileMenuModal, setMobileMenuModal] = useState(false);
	const [cartItems, setCartItems] = useState(0);
	const openMobileMenuModal = () => setMobileMenuModal(true);
	const closeMobileMenuModal = () => setMobileMenuModal(false);

	useEffect(() => {
		const cart = localStorage.getItem("cart");
		if (cart) {
			const newCart = JSON.parse(cart);
			setCartItems(newCart.length)
		}
	}, []);

	return (
		<>
			{mobileMenuModal && (
				<MobileMenu closeMobileMenuModal={closeMobileMenuModal} />
			)}
			<nav className="flex justify-between items-center bg-slate-200 pt-[1.4rem] pb-5 shadow shadow-slate-300 px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 mb-[0.1rem]">
				<div className="w-32 sm:w-36 md:w-40 shadow-lg shadow-yellow-300/30">
					<NavLink to="">
						<img src={logo} alt="Logo" />
					</NavLink>
				</div>
				<ul className="hidden xl:flex items-center gap-5">
					<NavMenu to="" label="Home" />
					<NavMenu to="menu" label="Menu" />
					<NavMenu to="about" label="About Us" />
					<NavMenu to="contact" label="Contact Us" />
					<li className="font-semibold text-xl mb-[0.125rem]">|</li>
					<li>
						<NavLink
							className="px-4 py-3 rounded-lg border-2 hover:border-slate-500 tracking-wider font-semibold"
							to="cart"
						>
							<FontAwesomeIcon icon={faCartShopping} /> {cartItems} items
						</NavLink>
					</li>
					<li>
						<NavLink
							className="bg-yellow-400 px-4 py-3 rounded-lg border-2 border-yellow-500 hover:bg-yellow-200 tracking-wide shadow-lg"
							to="login"
						>
							<FontAwesomeIcon icon={faCircleUser} /> Login
						</NavLink>
					</li>
				</ul>
				<button
					onClick={openMobileMenuModal}
					className="flex xl:hidden justify-center items-center gap-3"
				>
					<span className="font-semibold text-lg">Menu</span>{" "}
					<FontAwesomeIcon size="lg" icon={faBars} />
				</button>
			</nav>
		</>
	);
};

export default NavBar;
