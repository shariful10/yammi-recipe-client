import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<div className="bg-gray-100">
				<div className="md:flex my-container gap-5 justify-center items-center">
					<div className="order-1 md:order-none">
						<h1 className="text-6xl font-bold my-5">Yammi Recipes!</h1>
						<p className="my-5">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit omnis
							deleniti aliquid incidunt vitae, a facilis, adipisci ea nesciunt rerum
							dolorum maxime, praesentium officia vero reprehenderit magnam
							architecto. Id, ad!
						</p>
						<Link to="/blog">
							<button className="btn-pr">Learn More</button>
						</Link>
					</div>
					<img
						className="order-2 md:order-none"
						src="https://i.ibb.co/ggJNsK0/cover-2.png"
						alt=""
					/>
				</div>
			</div>
			<div className="my-container">
				<h2 className="text-4xl text-center font-bold">Our Recipies</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 justify-center mx-auto">
					<div>
						<img
							className="w-56 rounded-[50%] mx-auto"
							src="https://i.ibb.co/YRkwqW2/r1.jpg"
							alt=""
						/>
						<h3 className="text-center text-2xl font-semibold mt-5">Appetizers</h3>
					</div>
					<div>
						<img
							className="w-52 rounded-[50%] mx-auto"
							src="https://i.ibb.co/nMnsQJ0/r2.jpg"
							alt=""
						/>
						<h3 className="text-center text-2xl font-semibold mt-5">Beef</h3>
					</div>
					<div>
						<img
							className="w-52 rounded-[50%] mx-auto"
							src="https://i.ibb.co/JmXKQ4p/r3.jpg"
							alt=""
						/>
						<h3 className="text-center text-2xl font-semibold mt-5">Chicken</h3>
					</div>
					<div>
						<img
							className="w-52 rounded-[50%] mx-auto"
							src="https://i.ibb.co/TMK9R0w/r4.jpg"
							alt=""
						/>
						<h3 className="text-center text-2xl font-semibold mt-5">Vegetarian</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
