import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {httpClient} from "../utils/HttpClient.tsx";
import { useRecoilState } from "recoil";
import { userState } from "./state.tsx";



export const Login = () => {
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const [Key, userSignUp] = useRecoilState(userState);


  const handleSubmit = async (e) => {
    let userUID;
    e.preventDefault();
    setError('')
    try {
      const user1 = await httpClient.post("/login", {email: userEmail, password: userPassword}).catch(err => {console.error(err)});
      if (user1){
        userUID = user1.data
      }
      userSignUp(userUID)
      navigate('/')

    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

  useEffect(()=>{
  }, [Key])


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card mt-5">
            <h1 className="card-header text-center">Sign In</h1>
            {error ? <p className="text-center text-danger">{error}</p> : null}
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
              <button className="btn btn-primary btn-block">Sign In</button>
              <div className="d-flex justify-content-between mt-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Remember me</label>
                </div>
                <p>Need Help?</p>
              </div>
              <p className="text-center mt-3">
                <span className="mr-2">New to PlaceTheBet?</span>
                <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
