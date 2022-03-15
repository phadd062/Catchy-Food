export const scrollPageTo = (navEl: string) => {
	const el = document.querySelector(`#${navEl}`)!;
	el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export class AuthenticationError extends Error {}

export const isString = (s: any) => {
	return typeof s === "string" || s instanceof String;
};

export const range = function* (start = 0, stop: number, step = 1) {
	let cur = stop === undefined ? 0 : start;
	let max = stop === undefined ? start : stop;
	for (let i = cur; step < 0 ? i > max : i < max; i += step) yield i;
};

export const convertNumber = (x: number, lang: string) => {
	if (lang === "fr") {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
