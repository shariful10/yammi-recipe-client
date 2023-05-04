import React from "react";

const ChefDetails = ({ cfdata }) => {
	const { name, img, rec_num, like } = cfdata;
	return (
		<div className="card lg:card-side bg-gray-100 p-5">
			<figure>
				<img className="w-36 h-36 rounded-lg shadow-lg" src={img} alt="Album" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">Chef Name: {name}</h2>
				<h2 className="card-title">Number of Recipe: {rec_num}</h2>
				<h2 className="card-title">Like: {like}</h2>
				<div className="card-actions justify-end">
					<button className="btn btn-pr-2 capitalize border-0">Listen</button>
				</div>
			</div>
		</div>
	);
};

export default ChefDetails;
