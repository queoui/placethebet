import axios from "axios"
const microIP = import.meta.env.VITE_MICROSERVICE_IP;
const microPort = import.meta.env.VITE_MICROSERVICE_PORT
const microserviceURL = `http://${microIP}:${microPort}`;

console.log(microserviceURL);

export const microserviceClient = axios.create({
	baseURL: microserviceURL,
	headers:{
		"Content-type": "application/json"
	}
})

