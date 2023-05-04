import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ChefData = () => {
	const chef = useLoaderData();
	const [favorite, setFavorite] = useState(true);
	const [favorite2, setFavorite2] = useState(true);
	const [favorite3, setFavorite3] = useState(true);

	const { img, rec_1, rec_2, rec_3, name, bio } = chef;
	console.log(chef);

	const handleFavorite = (e) => {
		setFavorite(e.target.checked);
	};

	const handleFavorite2 = (e) => {
		setFavorite2(e.target.checked);
	};

	const handleFavorite3 = (e) => {
		setFavorite3(e.target.checked);
	};

	return (
		<div className="my-container">
			<h1 className="text-4xl w-full md:text-center mb-10 font-semibold items-center">
				Chef Details
			</h1>
			<div className="card lg:card-side bg-base-100 shadow-xl md:p-5 mb-5">
				<figure>
					<img className="w-full" src={img} alt="Album" />
				</figure>
				<div className="card-body">
					<h2 className="text-3xl font-semibold">{name}</h2>
					<p>{bio}</p>
				</div>
			</div>
			<div className="grid md:grid-cols-3 gap-6">
				<div className="card card-compact w-full bg-base-100 shadow-xl mb-5">
					<figure>
						<img className="w-full h-[300px]" src={rec_1} alt="Shoes" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">Beef</h2>
						<div className="card-actions justify-start md:justify-end">
							<button
								onClick={handleFavorite}
								disabled={!favorite}
								className="btn btn-pr-2 capitalize border-0">
								Add To Favorite
							</button>
						</div>
					</div>
				</div>
				<div className="card card-compact w-full bg-base-100 shadow-xl mb-5">
					<figure>
						<img className="w-full h-[300px]" src={rec_2} alt="Shoes" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">Appetizers</h2>
						<div className="card-actions justify-start md:justify-end">
							<button
								onClick={handleFavorite2}
								disabled={!favorite2}
								className="btn btn-pr-2 capitalize border-0">
								Add To Favorite
							</button>
						</div>
					</div>
				</div>
				<div className="card card-compact w-full bg-base-100 shadow-xl mb-5">
					<figure>
						<img className="w-full h-[300px]" src={rec_3} alt="Shoes" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">Chicken</h2>
						<div className="card-actions justify-start md:justify-end">
							<button
								onClick={handleFavorite3}
								disabled={!favorite3}
								className="btn btn-pr-2 capitalize border-0">
								Add To Favorite
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChefData;
