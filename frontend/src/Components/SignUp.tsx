import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {useRecoilState} from "recoil";
import {userState} from "./state.tsx";
import {httpClient} from "../utils/HttpClient.tsx";


const Signup = () => {
	const [userEmail, setEmail] = useState('');
	const [userPassword, setPassword] = useState('');
	const [Key, userSignUp] = useRecoilState(userState);
	const navigate = useNavigate();


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
				const user1 = await httpClient.post("/signup", { email: userEmail, password: userPassword });
				const userUID = user1.data
				userSignUp(userUID)
			  navigate('/')

		} catch (error) {
			console.log(error);

		}
	};

		useEffect(()=>{
		}, [Key])

	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="card mt-5">
							<h1 className="card-header text-center">Sign Up</h1>
							<form onSubmit={handleSubmit} className="card-body">
								<div className="form-group">
									<input
										onChange={(e) => setEmail(e.target.value)}
										className="form-control"
										type="email"
										placeholder="Email"
										autoComplete="email"
									/>
								</div>
								<div className="form-group">
									<input
										onChange={(e) => setPassword(e.target.value)}
										className="form-control"
										type="password"
										placeholder="Password"
										autoComplete="current-password"
									/>
								</div>
								<button className="btn btn-primary btn-block">Sign Up</button>
								<div className="d-flex justify-content-between mt-3">
									<div className="form-check">
										<input className="form-check-input" type="checkbox" />
										<label className="form-check-label">Remember me</label>
									</div>
									<p>Need Help?</p>
								</div>
								<p className="py-3">
									<span className="text-gray-600">Already have an account?</span>{' '}
									<Link to="/login">Sign In</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Signup;
