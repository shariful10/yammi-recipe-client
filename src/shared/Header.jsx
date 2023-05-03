import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="bg-black">
			<div className="relative flex items-center justify-between px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				{/* Logo Section */}
				<Link to="/" className="inline-flex items-center">
					<span className="ml-2 text-xl font-bold tracking-wide text-blue-400">
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
							to="/blog"
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
					<FaUserCircle className="h-8 w-8 text-white" />
					<Link to='/login'><button className="btn-pr-2">Login</button></Link>
				</div>
				{/* Mobile Navbar Section  */}
				<div className="lg:hidden">
					{/* Dropdown Open Button */}
					<button
						aria-label="Open Menu"
						title="Open Menu"
						onClick={() => setIsMenuOpen(true)}>
						<FaBars className="w-5 text-white" />
					</button>
					{isMenuOpen && (
						<div className="absolute top-0 left-0 w-full z-10">
							<div className="p-5 bg-black border rounded shadow-sm">
								{/* Logo & Button section */}
								<div className="flex items-center justify-between mb-4">
									<div>
										<Link to="/" className="inline-flex items-center">
											<span className="ml-2 text-xl font-bold tracking-wide text-blue-400">
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
											<XMarkIcon className="w-5 text-white" />
										</button>
									</div>
								</div>
								{/* Mobile Nav Items Section */}
								<nav>
									<ul className="space-y-4">
										<li>
											<Link to="/" className="text-white">
												Home
											</Link>
										</li>
										<li>
											<Link
												to="/blog"
												className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-blue-400">
												Blog
											</Link>
										</li>
										<li>
											<Link
												to="/about"
												className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-blue-400">
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
