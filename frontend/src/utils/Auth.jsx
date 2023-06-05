import { createContext, useContext, useEffect, useState } from 'react';

import {httpClient} from "./HttpClient";

const AuthContext = createContext(null);


export function signUp(userEmail, userPassword) {

	console.log(userEmail)
	return httpClient.post("/signup", {email: userEmail, password: userPassword}).catch(err => {console.error(err)});
}

function logIn(email, password) {
}


function logOut() {
}


export function AuthContextProvider({ children }) {

	const [user, setUser] = useState({});


	// useEffect(() => {
	// 	const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
	// 		setUser(currentUser);
	// 	});
	// 	return () => {
	// 		unsubscribe();
	// 	};
	// });

	return (
		<AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
			{children}
		</AuthContext.Provider>
	);
}

export function UserAuth() {
	return useContext(AuthContext);
}

