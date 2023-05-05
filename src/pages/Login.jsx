import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
	const [showPass, setShowPass] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const { signIn, googleLogin, githubLogin } = useContext(AuthContext);

	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		signIn(email, password)
			.then((res) => {
				const loggedUser = res.user;
				console.log(loggedUser);
				toast.success("Successfully Login", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.log(error);
				toast.error("Something Went Wrong", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			});
	};

	const handleGoogleLogin = () => {
		googleLogin()
			.then((res) => {
				const loggedUser = res.user;
				console.log(loggedUser);
				navigate(from, { replace: true });
			})
			.catch((err) => console.log(err));
	};

	const handleGithubLogin = () => {
		githubLogin()
			.then((res) => {
				const loggedUser = res.user;
				console.log(loggedUser);
				navigate(from, { replace: true });
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="my-container">
			<h1 className="text-4xl font-semibold md:text-center mb-5">Please Login</h1>
			<form
				onSubmit={handleLogin}
				className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 md:w-3/5 mx-auto">
				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2" htmlFor="email">
						Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						name="email"
						id="email"
						type="email"
						placeholder="Enter your email"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2" htmlFor="password">
						<div className="flex justify-between items-center">
							Password
							<span onClick={() => setShowPass(!showPass)} className="mr-2">
								{showPass ? <FaEyeSlash /> : <FaEye />}
							</span>
						</div>
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						name="password"
						id="password"
						type={showPass ? "text" : "password"}
						placeholder="Enter your password"
						required
					/>
				</div>
				<div className="md:flex items-center justify-between">
					<button className="btn-pr-2" type="submit">
						Login
					</button>
					<p className="mt-2 md:mt-0">
						Don't have an account?{" "}
						<Link to="/register" className="text-blue-700 underline">
							Register
						</Link>
					</p>
				</div>
			</form>
			<div className="md:flex justify-center gap-4 mt-4">
				<button re onClick={handleGoogleLogin} className="social-btn flex items-center">
					<FaGoogle />
					<span className="ml-2">Login With Google</span>
				</button>
				<button onClick={handleGithubLogin} className="social-btn flex items-center mt-2 md:mt-0">
					<FaGithub />
					<span className="ml-2">Login With GitHub</span>
				</button>
			</div>
		</div>
	);
};

export default Login;
