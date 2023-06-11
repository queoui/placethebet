import { useNavigate } from "react-router-dom";
import {httpClient} from "../utils/HttpClient.tsx";
import { useRecoilState } from "recoil";
import { userState } from "./state.tsx";




export const Logout = () => {
	const [Key, userSignUp] = useRecoilState(userState);


	const navigate = useNavigate();

	try {
		// const user1 = await httpClient.post("/logout");
		// console.log(user1)
		userSignUp("")
		navigate("/")
	} catch (error) {
		console.log(error);
	}

	return(
		<>
		{/* @ts-expected-error Server Component */});
		</>)

};



export default Logout;
