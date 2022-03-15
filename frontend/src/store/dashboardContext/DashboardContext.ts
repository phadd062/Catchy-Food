import { useContext, createContext } from "react";

const DashboardContext = createContext<{ [key: string]: any }>({});
export default DashboardContext;

export const useDashboardContext = () => {
	const dashboard = useContext(DashboardContext);
	if (dashboard) return dashboard;
	throw new Error(
		"useDashboardContext must be used within a DashboardProvider"
	);
};
