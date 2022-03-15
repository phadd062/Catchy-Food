import { useContext, createContext } from "react";

const MainContext = createContext<any>({});
export default MainContext;

export const useMainContext = () => {
	const main = useContext(MainContext);
	if (main) return main;
	throw new Error("useMainContext must be used within a MainProvider");
};
