export const ACTIONS = {
	ADMIN: "admin",
	HUB: {
		ASEC: "asec",
		CHS: "chs",
		RSS: "rss",
		TerraCanada: "terra",
		TSTS: "tsts",
	},
	DEPARTMENT: {
		CNSC: "cnsc",
		CNL: "cnl",
		NRC: "nrc",
	},
};

export const INITIALDASHBOARDREDUCER = {
	admin: null,
	hub: { ASEC: null, CHS: null, RSS: null, TerraCanada: null, TSTS: null },
	department: { CNSC: null, CNL: null, NRC: null },
};

export const reducer = (
	state: { admin: {}; hub: {}; department: {} },
	action: { type: string; payload: { [key: string]: any } }
) => {
	switch (action.type) {
		case ACTIONS.ADMIN:
			return {
				...state,
				admin: action.payload.admin,
			};
		case ACTIONS.HUB.ASEC:
			return {
				...state,
				hub: {
					...state.hub,
					ASEC: action.payload.asec,
				},
			};
		case ACTIONS.HUB.CHS:
			return {
				...state,
				hub: {
					...state.hub,
					CHS: action.payload.chs,
				},
			};
		case ACTIONS.HUB.RSS:
			return {
				...state,
				hub: {
					...state.hub,
					RSS: action.payload.rss,
				},
			};
		case ACTIONS.HUB.TerraCanada:
			return {
				...state,
				hub: {
					...state.hub,
					TerraCanada: action.payload.terra,
				},
			};
		case ACTIONS.HUB.TSTS:
			return {
				...state,
				hub: {
					...state.hub,
					TSTS: action.payload.tsts,
				},
			};
		case ACTIONS.DEPARTMENT.CNL:
			return {
				...state,
				department: {
					...state.department,
					CNL: action.payload.cnl,
				},
			};
		case ACTIONS.DEPARTMENT.NRC:
			return {
				...state,
				department: {
					...state.department,
					NRC: action.payload.nrc,
				},
			};
		default:
			return state;
	}
};
