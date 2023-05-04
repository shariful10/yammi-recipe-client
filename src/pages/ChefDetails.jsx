import React from "react";
import { Link } from "react-router-dom";

const ChefDetails = ({ cfdata }) => {
	const { id, name, img, rec_num, expr, like } = cfdata;
	return (
		<div className="card lg:card-side bg-gray-100 p-5">
			<figure>
				<img
					className="w-full h-[250px] md:w-36 md:h-36 rounded-lg shadow-lg"
					src={img}
					alt="Album"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">Chef Name: {name}</h2>
				<h2 className="card-title">Number of Recipe: {rec_num}</h2>
				<h2 className="card-title">Years of Exprience: {expr}</h2>
				<h2 className="card-title">Like: {like}</h2>
				<div className="card-actions justify-start md:justify-end">
					<Link to={`/chef/${id}`}>
						<button className="btn btn-pr-2 capitalize border-0 mt-3 md:mt-0">
							View Recipes
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ChefDetails;
