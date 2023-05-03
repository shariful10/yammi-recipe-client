import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="bg-gray-100">
			<div className="relative flex items-center justify-between px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				{/* Logo Section */}
				<Link to="/" className="inline-flex items-center">
					{/* <img className="h-12 w-12" src="https://i.ibb.co/Q84nCxL/logo.jpg" alt="" /> */}
					<span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
						YammiRecipes
					</span>
				</Link>

				{/* Nav Items Section */}
				<ul className="items-center hidden space-x-8 lg:flex">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? "active" : "default")}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/books"
							className={({ isActive }) => (isActive ? "active" : "default")}>
							Blog
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/register"
							className={({ isActive }) => (isActive ? "active" : "default")}>
							Register
						</NavLink>
					</li>
				</ul>
				<div className="flex gap-3 items-center">
					<FaUserCircle className="h-8 w-8" />
					<button className="btn-pr-2">Login</button>
				</div>
				{/* Mobile Navbar Section  */}
				<div className="lg:hidden">
					{/* Dropdown Open Button */}
					<button
						aria-label="Open Menu"
						title="Open Menu"
						onClick={() => setIsMenuOpen(true)}>
						<FaBars className="w-5 text-gray-600" />
					</button>
					{isMenuOpen && (
						<div className="absolute top-0 left-0 w-full z-10">
							<div className="p-5 bg-white border rounded shadow-sm">
								{/* Logo & Button section */}
								<div className="flex items-center justify-between mb-4">
									<div>
										<Link to="/" className="inline-flex items-center">
											<img src="https://i.ibb.co/Q84nCxL/logo.jpg" alt="" />
											<span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
												YammiRecipes
											</span>
										</Link>
									</div>
									{/* Dropdown menu close button */}
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											onClick={() => setIsMenuOpen(false)}>
											<XMarkIcon className="w-5 text-gray-600" />
										</button>
									</div>
								</div>
								{/* Mobile Nav Items Section */}
								<nav>
									<ul className="space-y-4">
										<li>
											<Link to="/" className="default">
												Home
											</Link>
										</li>
										<li>
											<Link
												to="/books"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400">
												Blog
											</Link>
										</li>
										<li>
											<Link
												to="/about"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400">
												About Us
											</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
