import jwt_decode from "jwt-decode";
import { AuthenticationError, isString } from "utils/helpers";

interface JwtPayloadCustom {
	iss?: string;
	sub?: string;
	aud?: string[] | string;
	exp: number;
	nbf?: number;
	iat?: number;
	jti?: string;
}

const REFRESH_TOKEN_STORAGE_KEY = "tokenRefresh";
const TOKEN_STORAGE_KEY = "token";

const LOGIN_TOKEN_URL = "/token/login";
const REFRESH_TOKEN_URL = "/catchyfoodmain/jwt/api/token/refresh";
const LOGOUT_URL = "/catchyfoodmain/jwt/api/token/revoke";

interface ResponseData {
	data?: any;
	clientError?: any;
}

export default class HttpClient {
	#navigateFunc: (url: string, arg: object) => void;

	constructor(navigateFunc: (url: string) => void) {
		this.#navigateFunc = navigateFunc;
	}

	rawGet = async (url: string) => {
		return this.#request(url, {
			method: "GET",
			raw: true,
		}) as Promise<Response>;
	};
	get = async (url: string) => {
		return this.#request(url, { method: "GET" }) as ResponseData;
	};
	post = async (url: string, body: any) => {
		return this.#request(url, { method: "POST" }, body) as ResponseData;
	};
	put = async (url: string, body: any) => {
		return this.#request(url, { method: "PUT" }, body) as ResponseData;
	};
	delete = async (url: string) => {
		// API delete endpoints are not uniform (returning 200 and 204) so we force clients to interact with the raw response
		return this.#request(url, {
			method: "DELETE",
			raw: true,
		}) as Promise<Response>;
	};
	login = async (username: string, password: string): Promise<Boolean> => {
		const response = await fetch(LOGIN_TOKEN_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		});
		if (!response.ok) return false;
		const data = await response.json();
		localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, data.refresh);
		localStorage.setItem(TOKEN_STORAGE_KEY, data.access);
		return true;
	};
	logout = async () => {
		const isAuthenticated = await this.isAuthenticated();
		if (isAuthenticated) {
			const authHeaders = await this.#getAuthHeaders();
			fetch(LOGOUT_URL, {
				method: "Post",
				body: JSON.stringify({
					tokenRefresh: this.#getRefreshTokenFromLocalStorage(),
				}),
				headers: { ...authHeaders, "Content-Type": "application/json" },
			});
		}
		this.#clearTokens();
		this.navigateToLogin();
	};
	navigateToLogin = () => this.#navigateFunc("/login", { replace: true });
	isAuthenticated = async (): Promise<Boolean> => {
		if (this.#hasValidToken()) return true;
		else if (!this.#hasValidRefreshToken()) return false;
		const wroteNewToken = await this.#writeNewTokenFromRefresh();
		return wroteNewToken;
	};

	#request = async (
		url: string,
		options: { raw?: boolean; method?: "PUT" | "GET" | "DELETE" | "POST" } = {},
		body: any = null
	) => {
		let bodyArg;
		if (body) bodyArg = isString(body) ? body : JSON.stringify(body);
		try {
			const resp = await fetch(url, {
				headers: { "Content-Type": "application/json" },
				method: options.method || "get",
				body: bodyArg,
			});

			if (options.raw) return resp;
			const data = await resp.json();
			return { data, clientError: undefined };
		} catch (e) {
			this.#handleFetchFailure(e);
			return { data: undefined, clientError: e };
		}
	};
	#handleFetchFailure = (err: any) => console.error(err);
	#handleAuthFailure = () => {
		this.#clearTokens();
		this.navigateToLogin();
	};
	#getAuthHeaders = async () => {
		const token = await this.#getToken();
		return { Authorization: `Bearer ${token}` };
	};
	#getToken = async () => {
		if (this.#hasValidToken()) return this.#getTokenFromLocalStorage();
		if (this.#hasValidRefreshToken()) {
			const gotNewToken = await this.#writeNewTokenFromRefresh();
			if (gotNewToken) return this.#getTokenFromLocalStorage();
		}
		throw new AuthenticationError("No valid token");
	};
	#writeNewTokenFromRefresh = async (): Promise<Boolean> => {
		const refreshToken = this.#getRefreshTokenFromLocalStorage();
		const resp = await fetch(REFRESH_TOKEN_URL, {
			method: "POST",
			body: JSON.stringify({ refresh: refreshToken }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!resp.ok) {
			this.#clearTokens();
			return false;
		}
		const json = await resp.json();
		localStorage.setItem(TOKEN_STORAGE_KEY, json.access);
		return true;
	};
	#hasValidToken = () => {
		const token = this.#getTokenFromLocalStorage();
		if (!token) return false;
		return !this.#isTokenExpired(token);
	};
	#hasValidRefreshToken = () => {
		const refreshToken = this.#getRefreshTokenFromLocalStorage();
		if (!refreshToken) return false;
		return !this.#isTokenExpired(refreshToken);
	};
	#isTokenExpired = (token: string) => {
		const decodedToken = jwt_decode<JwtPayloadCustom>(token);
		const CURRENTDATE = new Date().getTime() + 10000;
		const DECODEDTIME = 1000;
		return decodedToken.exp * DECODEDTIME < CURRENTDATE;
	};
	#getRefreshTokenFromLocalStorage = () => {
		return localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);
	};
	#getTokenFromLocalStorage = () => {
		return localStorage.getItem(TOKEN_STORAGE_KEY);
	};
	#clearTokens = () => {
		localStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
		localStorage.removeItem(TOKEN_STORAGE_KEY);
	};
}
