import { useNavigate } from "react-router-dom";
import {httpClient} from "../utils/HttpClient";
import { useRecoilState } from "recoil";
import { userState } from "./state";




export const Logout = async () => {
	const [Key, userSignUp] = useRecoilState(userState);


	const navigate = useNavigate();

	try {
		const user1 = await httpClient.post("/logout");
		console.log(user1)
		userSignUp("")
		navigate("/")
	} catch (error) {
		console.log(error);
	}

};

export default Logout;
