import React, { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	console.log(location);
	if (loading) {
		return (
			<Oval
				height={80}
				width={80}
				color="#3B82F6"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
				ariaLabel="oval-loading"
				secondaryColor="#3B82F6"
				strokeWidth={2}
				strokeWidthSecondary={2}
			/>
		);
	}

	if (user) {
		return children;
	}

	return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRoute;
