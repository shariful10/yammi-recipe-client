import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-black">
			<div className="container mx-auto grid md:grid-cols-4 py-5">
				<div>
					<h3 className="text-2xl text-blue-400">Address</h3>
					<p className="text-white pt-2">Dhanmondi 27, Dhaka 1400, Bangladesh</p>
				</div>
				<div>
					<h3 className="text-2xl text-blue-400">Quick Link</h3>
					<div className="text-white pt-2">
						<p>
							<Link to="/home" className="hover:underline">
								Home
							</Link>
						</p>
						<p>
							<Link to="/blog">Blog</Link>
						</p>
						<p>
							<Link to="/login">Login</Link>
						</p>
						<p>
							<Link to="/register">Register</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
