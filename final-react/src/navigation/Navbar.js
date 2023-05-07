import { Route, Routes } from 'react-router-dom';

// import views
import Home from './../views/Home';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home title="placethebet.net" />} />
      </Routes>
    </div>
  );
}

export default Navbar;
