// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCWg5J0COsJ_hkRFyoZRiuE0yMCC_DWrxc",
	authDomain: "yammi-recipe.firebaseapp.com",
	projectId: "yammi-recipe",
	storageBucket: "yammi-recipe.appspot.com",
	messagingSenderId: "819781351406",
	appId: "1:819781351406:web:aa4ab80800c4f0919d00ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
