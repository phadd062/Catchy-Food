import { NavLink } from "react-router-dom";

const Login = () => {
	return (
		<>
			<h1>Login here</h1>
			<div className="mt-4">
				<NavLink className="mt-4 px-4 py-2 bg-red-100 rounded" to="../create">
					Create Account
				</NavLink>
			</div>
		</>
	);
};

export default Login;
