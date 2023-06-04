// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import fp from "fastify-plugin";
import {FastifyInstance } from "fastify";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

	apiKey: "AIzaSyDxTf24KT8kdYcjsTUCT9iVlLgtes8-x08",

	authDomain: "placethebet-net.firebaseapp.com",

	projectId: "placethebet-net",

	storageBucket: "placethebet-net.appspot.com",

	messagingSenderId: "966875463996",

	appId: "1:966875463996:web:aaa591598c57b6a081de39"

};

declare module "fastify" {
	interface FastifyInstance {
		firebase: any
	}
}

// Initialize Firebase
const fastifyFirebase = async function(app:FastifyInstance, _options){
	const firebaseApp = initializeApp(firebaseConfig);
	app.decorate("firebase", firebaseApp);
}

export const FastifyFireBaseAuth = fp(fastifyFirebase, {
	name: "fastify-auth",
});


//
//
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

