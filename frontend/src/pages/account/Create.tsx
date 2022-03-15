import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "store/httpClientContext/HttpClientContext";

type FormValues = {
	username: string;
	first_name: string;
	last_name: string;
	email: string;
	password: string;
};

const Create = () => {
	const client = useHttpClient();
	const navigate = useNavigate();
	const [submitDisabled, setSubmitDisabled] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<FormValues>();
	const backList = () => navigate("/");

	const CreateAccountSubmitHandler: SubmitHandler<FormValues> = (data) => {
		setSubmitDisabled(true);

		const fetchPost = async () => {
			const { data: responseData, clientError } = await client.post(
				"/api/account/create",
				JSON.stringify({ ...data, user_group: 2 })
			);
			console.log(responseData, clientError);
			if (clientError) return;
			else if (!responseData.errors) backList();
			else {
				for (const [key, value] of Object.entries<string[]>(
					responseData.errors
				)) {
					const keyError: any = key;
					setError(keyError, {
						type: "string",
						message: value[0],
					});
				}
				setSubmitDisabled(false);
			}
		};
		fetchPost();
	};

	return (
		<>
			<form onSubmit={handleSubmit(CreateAccountSubmitHandler)}>
				<div>
					<label>Username: </label>
					<input
						className={`${
							errors.username ? "border-red-700" : "border-slate-500"
						} border-2 rounded-md`}
						type="text"
						{...register("username", {
							required: true,
						})}
						placeholder="Username"
					/>
					<p className="text-red-700">
						{errors.username ? errors.username.message : ""}
					</p>
				</div>
				<div>
					<label>First Name: </label>
					<input
						className={`${
							errors.first_name ? "border-red-700" : "border-slate-500"
						} border-2 rounded-md`}
						type="text"
						{...register("first_name", {
							required: true,
						})}
						placeholder="First Name"
					/>
					<p className="text-red-700">
						{errors.first_name ? errors.first_name.message : ""}
					</p>
				</div>
				<div>
					<label>Last Name: </label>
					<input
						className={`${
							errors.last_name ? "border-red-700" : "border-slate-500"
						} border-2 rounded-md`}
						type="text"
						{...register("last_name", {
							required: true,
						})}
						placeholder="Last Name"
					/>
					<p className="text-red-700">
						{errors.last_name ? errors.last_name.message : ""}
					</p>
				</div>
				<div>
					<label>Email: </label>
					<input
						className={`${
							errors.email ? "border-red-700" : "border-slate-500"
						} border-2 rounded-md`}
						type="email"
						{...register("email", {
							required: true,
						})}
						placeholder="Email"
					/>
					<p className="text-red-700">
						{errors.email ? errors.email.message : ""}
					</p>
				</div>
				<div>
					<label>Password: </label>
					<input
						className={`${
							errors.password ? "border-red-700" : "border-slate-500"
						} border-2 rounded-md`}
						type="password"
						{...register("password", {
							required: true,
						})}
						placeholder="Password"
					/>
					<p className="text-red-700">
						{errors.password ? errors.password.message : ""}
					</p>
				</div>
				<div>
					<button
						disabled={submitDisabled}
						className="px-4 py-2 bg-red-200 border-2 rounded disabled:bg-slate-50 disabled:border-slate-200"
						type="submit"
					>
						Create Account
					</button>
				</div>
			</form>
		</>
	);
};

export default Create;
