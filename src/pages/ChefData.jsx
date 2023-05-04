import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefDetails from "./ChefDetails";

const ChefData = () => {
	const chefData = useLoaderData();
	console.log(chefData);

	return (
		<div>
			
		</div>
	);
};

export default ChefData;
