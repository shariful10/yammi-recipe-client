import React from "react";

const Blog = () => {
	return (
		<div className="my-container grid md:grid-cols-2 gap-6">
			<div className="card w-full bg-gray-100">
				<div className="card-body">
					<h2 className="card-title">
						What is the differences between uncontrolled and controlled components?
					</h2>
					<p>
						The key difference between uncontrolled and controlled is the level of
						control that the developer has over their behavior. With an uncontrolled
						component, the developer must rely on external factors to determine how the
						component behaves. With a controlled component, the developer has complete
						control over the component's behavior, and can define it to meet their
						specific requirements.
					</p>
				</div>
			</div>
			<div className="card w-full bg-gray-100">
				<div className="card-body">
					<h2 className="card-title">How to validate React props using PropTypes?</h2>
					<p>
						If the component is passed props that do not match the PropTypes
						specifications, React will display a warning in the console. This can be
						useful for catching errors early on in the development process and ensuring
						that components are being used correctly
					</p>
				</div>
			</div>
			<div className="card w-full bg-gray-100">
				<div className="card-body">
					<h2 className="card-title">
						What is the difference between nodejs and express js?
					</h2>
					<p>
						Node.js is a JavaScript runtime built on the Chrome V8 JavaScript engine. It
						allows developers to run JavaScript on the server-side and perform tasks
						like file I/O, networking, and other operations that are not typically
						available in a web browser.
					</p>
					<p>
						Express.js, on the other hand, is a web application framework built on top
						of Node.js. It provides a set of features and tools for building web
						applications, such as routing, middleware, and templating.
					</p>
				</div>
			</div>
			<div className="card w-full bg-gray-100">
				<div className="card-body">
					<h2 className="card-title">
						What is a custom hook, and why will you create a custom hook?
					</h2>
					<p>
						Custom hook is a JavaScript function that starts with the word "use" and
						allows developers to reuse stateful logic across components. Custom hooks
						are a way to extract reusable logic from a component so that it can be
						shared between multiple components.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
