import dotenv from "dotenv";
dotenv.config();

import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged, getAuth
} from "firebase/auth";
import { setDoc, doc, getFirestore } from "firebase/firestore";


async function betRoutes(app: FastifyInstance, _options = {}) {

	const auth = getAuth(app.firebase);
	const db = getFirestore(app.firebase);

	if (!app) {
		throw new Error("Fastify instance has no value during routes construction");
	}

	app.get<{Body: {email: string, password:string}}>("/login", async (req, reply) => {
		const {email, password} = req.body;
		return signInWithEmailAndPassword(auth, email, password);

	})


	app.get("/logout", async (req, reply) => {
		return signOut(auth);
	})

	app.get<{Body: {email: string, password:string}}>("/signup", async (req, reply) => {
			const { email, password } = req.body;

		await createUserWithEmailAndPassword(auth, email, password);
		await setDoc(doc(db, 'users', email), {
			savedShows: []
		})
	})


	 app.get("/", async (req, reply)=>{
		 reply.send("Hello")
	 })
}

export default betRoutes;
