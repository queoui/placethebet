import { createContext, useContext, useEffect, useState } from 'react';

import {httpClient} from "./HttpClient";

const AuthContext = createContext(null);


export function signUp(userEmail, userPassword) {

	return httpClient.post("/signup", {email: userEmail, password: userPassword}).catch(err => {console.error(err)});
}

export function logIn(userEmail, userPassword) {
	return httpClient.post("/login", {email: userEmail, password: userPassword}).catch(err => {console.error(err)});

}


export function logout() {

	return httpClient.get("/logout").catch(err => {console.error(err)});

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

