import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-black">
			<div className="container mx-auto grid grid-cols-2 md:grid-cols-4 py-5 px-3 md-px-0">
				<div>
					<h3 className="text-2xl text-blue-400">Address</h3>
					<div className="flex items-center mt-2">
						<FaMapMarkerAlt className="text-white" />
						<p className="text-white ml-2">St 18, Johnson Road</p>
					</div>
					<p className="text-white ml-4">New York 1600, USA</p>
				</div>
				<div>
					<h3 className="text-2xl text-blue-400">Quick Link</h3>
					<div className="text-white pt-2">
						<p>
							<Link to="/" className="hover:underline hover:text-blue-400">
								Home
							</Link>
						</p>
						<p>
							<Link to="/blog" className="hover:underline hover:text-blue-400">
								Blog
							</Link>
						</p>
						<p>
							<Link to="/login" className="hover:underline hover:text-blue-400">
								Login
							</Link>
						</p>
						<p>
							<Link to="/register" className="hover:underline hover:text-blue-400">
								Register
							</Link>
						</p>
					</div>
				</div>
				<div>
					<h3 className="text-2xl text-blue-400">Social Link</h3>
					<div className="text-white pt-2">
						<p>
							<Link
								to="https://www.facebook.com/"
								target="_blank"
								className="hover:underline hover:text-blue-400">
								Facebook
							</Link>
						</p>
						<p>
							<Link
								to="https://www.instagram.com/"
								target="_blank"
								className="hover:underline hover:text-blue-400">
								Instagram
							</Link>
						</p>
						<p>
							<Link
								to="https://twitter.com/"
								target="_blank"
								className="hover:underline hover:text-blue-400">
								Twitter
							</Link>
						</p>
						<p>
							<Link
								to="https://www.linkedin.com/"
								target="_blank"
								className="hover:underline hover:text-blue-400">
								LinkedIn
							</Link>
						</p>
					</div>
				</div>
				<div>
					<h3 className="text-2xl text-blue-400">Contact Us</h3>
					<div className="text-white pt-2">
						<p className="flex items-center hover:text-blue-400">
							<FaPhoneAlt /> <span className="ml-2">+880 1582 2654 358</span>
						</p>
						<p className="flex items-center hover:text-blue-400">
							<FaPhoneAlt /> <span className="ml-2">+880 1412 3624 958</span>
						</p>
						<p className="flex items-center hover:text-blue-400">
							<FaEnvelope /> <span className="ml-2">yammi@recipes.com</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
