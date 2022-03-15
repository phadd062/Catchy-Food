import { ReactNode, useReducer } from "react";
import DashboardContext from "./DashboardContext";
import { reducer, INITIALDASHBOARDREDUCER } from "./reducer";

const DashboardProvider = ({ children }: { children: ReactNode }) => {
	const [dashboardState, dashboardDispatch] = useReducer(
		reducer,
		INITIALDASHBOARDREDUCER
	);

	const ContextObject = {
		dashboardState: dashboardState,
		dashboardDispatch: dashboardDispatch,
	};

	return (
		<DashboardContext.Provider value={ContextObject}>
			{children}
		</DashboardContext.Provider>
	);
};

export default DashboardProvider;
