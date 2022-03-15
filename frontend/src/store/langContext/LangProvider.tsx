import { ReactNode, useEffect, useState } from "react";
import LangContext from "./LangContext";

const LangProvider = ({ children }: { children: ReactNode }) => {
	const [Language, setLanguage] = useState("en");

	const toggleLanguage = () => {
		setLanguage((prevLanguage) => {
			if (prevLanguage === "fr") {
				localStorage.setItem("lang", "en");
				return "en";
			}
			localStorage.setItem("lang", "fr");
			return "fr";
		});
	};

	const toggleSpecificLanguage = (langChange: string) => {
		if (langChange === "fr") {
			localStorage.setItem("lang", "en");
			setLanguage("en");
		} else {
			localStorage.setItem("lang", "fr");
			setLanguage("fr");
		}
	};

	useEffect(() => {
		const langStore = localStorage.getItem("lang");
		if (langStore) {
			if (langStore === "fr") {
				setLanguage("fr");
				localStorage.setItem("lang", "fr");
			} else {
				setLanguage("en");
				localStorage.setItem("lang", "en");
			}
		} else {
			const navigator: any = window.navigator;
			const lang = navigator.language || navigator.userLanguage;
			if (lang === "fr") {
				setLanguage("fr");
				localStorage.setItem("lang", "fr");
			} else {
				setLanguage("en");
				localStorage.setItem("lang", "en");
			}
		}
	}, []);

	const ContextObject = {
		toggleLanguage: toggleLanguage,
		toggleSpecificLanguage: toggleSpecificLanguage,
		lang: Language,
	};

	return (
		<LangContext.Provider value={ContextObject}>
			{children}
		</LangContext.Provider>
	);
};

export default LangProvider;
