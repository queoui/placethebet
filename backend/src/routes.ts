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


	if (!app) {
		throw new Error("Fastify instance has no value during routes construction");
	}

	app.get<{Body: {email: string, password:string}}>("/login", async (req, reply) => {

		const auth = getAuth(app.firebase);
		const db = getFirestore(app.firebase);
		const {email, password} = req.body;
		return signInWithEmailAndPassword(auth, email, password);

	});


	app.get("/logout", async (req, reply) => {

		const auth = getAuth(app.firebase);
		const db = getFirestore(app.firebase);
		return signOut(auth);
	});

	app.post<{Body: {email: string, password:string}}>("/signup", async (req, reply) => {
		console.log("get it ")
			const { email, password } = req.body;

			console.log(email);
			console.log(password);

			try {
				const auth = getAuth(app.firebase);
				const db = getFirestore(app.firebase);
				const jsonData = await createUserWithEmailAndPassword(auth, email, password);
				await setDoc(doc(db, 'users', email), {
					savedShows: []
				});
				console.log("created new user");
				app.log.info("created new user");
				return reply.send(jsonData.user.getIdToken())
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
