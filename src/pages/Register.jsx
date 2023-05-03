import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
	const [showPass, setShowPass] = useState(false);
	const [showComfirm, setShowComfirm] = useState(false);

	return (
		<div className="my-container">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-3/5 mx-auto">
				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2" htmlFor="name">
						Name
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="name"
						type="text"
						placeholder="Enter your name"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2" htmlFor="email">
						Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						placeholder="Enter your email"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2" htmlFor="photo-url">
						Photo URL
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="photo-url"
						type="url"
						placeholder="Enter your photo URL"
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
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type={showPass ? "text" : "password"}
						placeholder="Enter your password"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2" htmlFor="password">
						<div className="flex justify-between items-center">
							Confirm Password
							<span onClick={() => setShowComfirm(!showComfirm)} className="mr-2">
								{showPass ? <FaEyeSlash /> : <FaEye />}
							</span>
						</div>
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="confirm-password"
						type={showComfirm ? "text" : "password"}
						placeholder="Confirm your password"
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="button">
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
