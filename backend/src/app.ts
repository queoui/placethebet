import Fastify from "fastify";
import cors from '@fastify/cors'
// import config from "./db/mikro-orm.config.js";
// import {FastifySearchHttpMethodPlugin} from "./plugins/http_search.js";
// import {FastifyMikroOrmPlugin} from "./plugins/mikro.js";
import betRoutes from "./routes.js";
import {FastifyFireBaseAuth} from "./plugins/firebase.js";

const app = Fastify();

await app.register(cors, {
	origin: (origin, cb) => {
		cb(null, true);
	},
	methods: ['GET','POST','PUT','DELETE','PATCH','SEARCH'],
});

// await app.register(cors, {
// 	origin:false
// })

await app.register(betRoutes);
await app.register(FastifyFireBaseAuth);

export default app;
