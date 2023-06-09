import { Link, Route, Routes } from "react-router-dom";

// import views
import Home from '../views/Home';
import Week from '../views/Week';
import Login from '../Components/Login';
import Logout from '../Components/Logout';
import Signup from "../Components/SignUp";
import { userState } from "../Components/state";
import { useRecoilValue } from "recoil";

function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/week">
                Weekly View
              </Link>
            </li>
            {useRecoilValue(userState) &&
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/logoutPage">
                Logout
              </Link>
            </li>
            }
            {!useRecoilValue(userState) &&
                <>
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/loginPage">
                Login
              </Link>
            </li>
            <li className="nav-item active">
            <Link className="nav-link text-white" to="/signup">
            Sign Up
            </Link>
            </li>
                </>
            }

          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home title="placethebet.net" />} />
        <Route path="/week" element={<Week />} />
        <Route path={"/loginPage"} element={<Login/>}/>
        <Route path={"/logoutPage"} element={<Logout/>}/>
        <Route path={"/signup"} element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default Navbar;
