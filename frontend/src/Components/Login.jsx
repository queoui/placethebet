import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../utils/Auth';
import { AuthContextProvider } from "../utils/Auth";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password)
      navigate('/')
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

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
