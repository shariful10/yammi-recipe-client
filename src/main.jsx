import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main.jsx";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Register from "./pages/Register.jsx";
import Blog from "./pages/Blog.jsx";
import Login from "./pages/Login.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import ChefData from "./pages/ChefData.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("https://yammi-recipe-server-shariful10.vercel.app/chef-data"),
			},
			{
				path: "/chef/:id",
				element: <ChefData />,
				loader: ({ params }) => fetch(`https://yammi-recipe-server-shariful10.vercel.app/chef/${params.id}`),
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/blog",
				element: <Blog />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
