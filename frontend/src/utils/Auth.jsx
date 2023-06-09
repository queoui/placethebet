// import { createContext, useContext, useState } from 'react';
// import {httpClient} from "./HttpClient";
// import {onAuthStateChanged, getAuth} from 'firebase/auth'
// import {useRecoilState} from "recoil";
// import {userState} from "./state";

// const AuthContext = createContext();


// export function AuthContextProvider({ children }) {


	//
	// const [user, setUser] = useState();
	//
	// export function userSignUp(userEmail, userPassword) {
	// 	return httpClient.post("/signup", {email: userEmail, password: userPassword}).catch(err => {console.error(err)});
	// }
	//
	//
	// export function login(userEmail, userPassword) {
	// 	return httpClient.post("/login", {email: userEmail, password: userPassword}).catch(err => {console.error(err)});
	// }
	//
	//
	// export function logout() {
	// 	return httpClient.get("/logout").catch(err => {console.error(err)});
	// }



// 	return (
// 		<AuthContext.Provider value={{ userSignUp, login, logout, user }}>
// 			{children}
// 		</AuthContext.Provider>
// 	);
// }
//
// export function UserAuth() {
// 	return useContext(AuthContext);
// }

// export default userSignUp;
