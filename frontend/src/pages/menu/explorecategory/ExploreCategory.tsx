import MenuSection from "./MenuSection";
import jaffa_burger from "media/menu/jaffa_burger/jaffa_burger.jpg";
import specialty_pudding from "media/menu/specialty_pudding/specialty_pudding_1.jpg";
import creamy_chicken_curry from "media/menu/creamy_chicken_curry/creamy_chicken_curry_1.jpg";
import quinoa_salad from "media/menu/quinoa_salad/quinoa_salad_2.jpg";

const ExploreCategory = () => {
	return (
		<>
			<h1 className="text-4xl font-bold text-slate-800 mb-8 text-center">
				Explore by category
			</h1>
			<ul className="flex justify-center gap-10 flex-wrap mx-4 mb-14">
				<MenuSection
					onClickLink="apetizers"
					label="Apetizers"
					menuBanner={jaffa_burger}
					alt="Burger"
				/>
				<MenuSection
					onClickLink="mains"
					label="Mains"
					menuBanner={creamy_chicken_curry}
					alt="Mains"
				/>
				<MenuSection
					onClickLink="desert"
					label="Desert"
					menuBanner={specialty_pudding}
					alt="Desert"
				/>
				<MenuSection
					onClickLink="sauce"
					label="Sauce"
					menuBanner={quinoa_salad}
					alt="Sauce"
				/>
			</ul>
		</>
	);
};

export default ExploreCategory;
