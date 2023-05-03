import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
	const [showPass, setShowPass] = useState(false);

	return (
		<div className="my-container">
			<h1 className="text-4xl font-semibold md:text-center mb-5">Please Login</h1>
			<form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 md:w-3/5 mx-auto">
				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2" htmlFor="email">
						Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						placeholder="Enter your email"
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
						id="password"
						type={showPass ? "text" : "password"}
						placeholder="Enter your password"
					/>
				</div>
				<div className="md:flex items-center justify-between">
					<button className="btn-pr-2" type="button">
						Login
					</button>
					<p className="mt-2 md:mt-0">
						Don't have an account?{" "}
						<Link to="/register" className="text-blue-700 underline">
							Register
						</Link>
					</p>
				</div>
				<div className="md:flex justify-between mt-4">
					<div>
						<button className="px-4 py-3 border-2 rounded border-blue-400 hover:bg-blue-400 text-blue-400 hover:text-white font-semibold">
							Login With Google
						</button>
					</div>
					<div>
						<button className="px-4 py-3 border-2 rounded border-blue-400 hover:bg-blue-400 text-blue-400 hover:text-white font-semibold mt-2 md:mt-0">
							Login With GitHub
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
