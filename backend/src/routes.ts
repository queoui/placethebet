import dotenv from "dotenv";
dotenv.config();

import {FastifyInstance} from "fastify";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	getAuth
} from "firebase/auth";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import { FastifyFireBaseAuth } from "./plugins/firebase";


async function betRoutes(app: FastifyInstance, _options = {}) {


	if (!app) {
		throw new Error("Fastify instance has no value during routes construction");
	}

	app.post<{Body: {email: string, password:string}}>("/login", async (req, reply) => {
		let user = null
		try {
			const auth = getAuth(app.firebase);
			const db = getFirestore(app.firebase);
			const { email, password } = req.body;
			const jsonData = await signInWithEmailAndPassword(auth, email, password)
			return reply.send(jsonData.user.uid)

		}catch(err){
			console.log("failed to login", err.message);
			return reply.status(500).send({message:err.message});
		}

	});


	app.post("/logout", async (req, reply) => {
		try {
			const auth = getAuth(app.firebase);
			// const user1 = await signOut(auth)
			return
		}catch(err){
			console.log("failed to logout", err.message);
			return reply.status(500).send({message:err.message});

		}
	});

	app.post<{Body: {email: string, password:string}}>("/signup", async (req, reply) => {
			const { email, password } = req.body;
			let user = null
			try {
				const auth = getAuth(app.firebase);
				const db = getFirestore(app.firebase);
				const jsonData = await createUserWithEmailAndPassword(auth, email, password)
				await setDoc(doc(db, 'users', email), {
					savedShows: []
				});
				console.log("created new user");
				return reply.send(jsonData.user.uid)
			}catch(err){
				console.log("failed to create new user", err.message);
				return reply.status(500).send({message:err.message});
			}
	});


	 app.get("/", async (req, reply)=>{
		 reply.send("Hello");
	 });
}

export default betRoutes;
