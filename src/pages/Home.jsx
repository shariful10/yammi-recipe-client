import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ChefDetails from "./ChefDetails";

const Home = () => {
	const chefData = useLoaderData();

	return (
		<div>
			<div className="bg-gray-100">
				<div className="flex flex-col md:flex-row my-container gap-5 justify-center items-center">
					<div className=" order-last md:order-first">
						<h1 className="text-6xl font-bold my-5">Yammi Recipes!</h1>
						<p className="my-5">
							A handful of simple ingredients typify the fresh, vibrant flavors of
							Greek cooking, delicious and testy food forever.
						</p>
						<Link to="/blog">
							<button className="btn-pr">Learn More</button>
						</Link>
					</div>
					<img
						className="order-first md:order-last md:mx-auto"
						src="https://i.ibb.co/ggJNsK0/cover-2.png"
						alt=""
					/>
				</div>
			</div>
			<div className="my-container">
				<h2 className="text-4xl text-center font-bold">Our Recipes</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 justify-center mx-auto">
					<div>
						<img
							className="w-[160px] h-[160px] md:w-[250px] md:h-[250px] rounded-[50%] mx-auto"
							src="https://i.ibb.co/YRkwqW2/r1.jpg"
							alt=""
						/>
						<h3 className="text-center text-2xl font-semibold mt-5">Appetizers</h3>
					</div>
					<div>
						<img
							className="w-[160px] h-[160px] md:w-[250px] md:h-[250px] rounded-[50%] mx-auto"
							src="https://i.ibb.co/nMnsQJ0/r2.jpg"
							alt=""
						/>
						<h3 className="text-center text-2xl font-semibold mt-5">Beef</h3>
					</div>
					<div>
						<img
							className="w-[160px] h-[160px] md:w-[250px] md:h-[250px] rounded-[50%] mx-auto"
							src="https://i.ibb.co/JmXKQ4p/r3.jpg"
							alt=""
						/>
						<h3 className="text-center text-2xl font-semibold mt-5">Chicken</h3>
					</div>
					<div>
						<img
							className="w-[160px] h-[160px] md:w-[250px] md:h-[250px] rounded-[50%] mx-auto"
							src="https://i.ibb.co/TMK9R0w/r4.jpg"
							alt=""
						/>
						<h3 className="text-center text-2xl font-semibold mt-5">Vegetarian</h3>
					</div>
				</div>
			</div>
			<div className="my-container">
				<h2 className="text-4xl text-center font-bold">Our Chef</h2>
				<div className="grid md:grid-cols-2 gap-4 mt-10">
					{chefData.map((cfdata) => (
						<ChefDetails key={cfdata.id} cfdata={cfdata}></ChefDetails>
					))}
				</div>
			</div>
			<div className="my-container grid grid-cols-1 md:grid-cols-2 items-center gap-6">
				<img className="rounded-lg" src="https://i.ibb.co/pPqSfbC/ab.jpg" alt="" />
				<div>
					<h3 className="text-2xl w-full font-semibold">
						It's time to kick start a new lifestyle. Start eating, feeling & living
						better today. Build good habits with us in no time.
					</h3>
					<p className="my-5">
						The key difference between uncontrolled and controlled is the level of
						control that the developer has over their behavior. With an uncontrolled
						component, the developer must rely on external factors to determine how the
						component behaves. With a controlled component, the developer has complete
						control over the component's behavior, and can define it to meet their
						specific requirements.
					</p>
					<Link to="/blog">
						<button className="btn-pr">Learn More</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
