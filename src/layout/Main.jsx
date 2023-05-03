import React from "react";
import Header from "../shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";

const Main = () => {
	return (
		<div>
			<Header />
			<div className="h-[calc(100vh-300px)]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Main;
