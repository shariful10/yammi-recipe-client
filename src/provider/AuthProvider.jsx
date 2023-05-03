import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../utils/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const user = { displayName: "Shariful" };

	const authInfo = { user };

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
