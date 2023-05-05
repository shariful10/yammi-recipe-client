import React, { createContext, useEffect, useState } from "react";
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import app from "../utils/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const provider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	const googleLogin = () => {
		setLoading(true);
		signInWithPopup(auth, provider);
	};

	const githubLogin = () => {
		setLoading(true);
		signInWithPopup(auth, githubProvider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
			setUser(loggedUser);
			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		createUser,
		signIn,
		logOut,
		loading,
		googleLogin,
		githubLogin,
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
