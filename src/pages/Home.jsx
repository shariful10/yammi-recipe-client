import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="bg-gray-100">
			<div className="md:flex my-container gap-5 justify-center items-center">
				<div className="order-2 md:order-1">
					<h1 className="text-5xl font-bold my-5">Yammi Recipes!</h1>
					<p className="my-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit omnis
						deleniti aliquid incidunt vitae, a facilis, adipisci ea nesciunt rerum
						dolorum maxime, praesentium officia vero reprehenderit magnam architecto.
						Id, ad!
					</p>
					<Link to="/blog">
						<button className="btn-pr">Learn More</button>
					</Link>
				</div>
				<img
					className="order-1 md:order-2"
					src="https://i.ibb.co/ggJNsK0/cover-2.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Home;
