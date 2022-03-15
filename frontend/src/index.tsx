import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HttpClientProvider from "./store/httpClientContext/HttpClientProvider";
import App from "./App";
import "./index.css";

// const container = document.getElementById("root");
// if (!container) throw new Error("Failed to find the root element");
// const root = ReactDOM.createRoot(container);

// root.render(
// 	<StrictMode>
// 		<BrowserRouter>
// 			<HttpClientProvider>
// 				<App />
// 			</HttpClientProvider>
// 		</BrowserRouter>
// 	</StrictMode>
// );

const container = document.getElementById("root");
ReactDOM.render(
	<StrictMode>
		<BrowserRouter>
			<HttpClientProvider>
				<App />
			</HttpClientProvider>
		</BrowserRouter>
	</StrictMode>,
	container
);
