import { createContext, useContext } from "react";

const LangContext = createContext<any>({});
export default LangContext;

export const useLangContext = () => {
	const lang = useContext(LangContext);
	if (lang) return lang;
	throw new Error("useLangContext must be used within a LoginProvider");
};
