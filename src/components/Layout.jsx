import { Link, Outlet } from "react-router-dom";
import './layout.css';

export default function Layout() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark text-uppercase fixed-top py-4" id="mainNav">
  <div className="container">
    <Link className="navbar-brand fs-3 fw-bold text-white" to="/">START FRAMEWORK</Link>
    <button
      className="navbar-toggler text-white"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      Menu
      <i className="fas fa-bars ms-2"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ms-auto text-white">
        <li className="nav-item mx-2">
          <Link className="nav-link text-white" to="/about">ABOUT</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link text-white" to="/portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link text-white" to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

      
      <Outlet />

      {/* Footer Info Section */}
      <section className="footer-info text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4 mb-md-0 py-3 px-3">
              <h3 className="text-uppercase fs-2 mb-3">Location</h3>
              <p className="mb-0 fs-6">2215 John Daniel Drive<br />Clark, MO 65243</p>
            </div>
            <div className="col-md-4 mb-4 mb-md-0 py-3 px-3">
              <h3 className="text-uppercase fs-2 mb-3">Around The Web</h3>
              <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                <span className="social-icon"><i className="fab fa-facebook-f"></i></span>
                <span className="social-icon"><i className="fab fa-twitter"></i></span>
                <span className="social-icon"><i className="fab fa-linkedin-in"></i></span>
                <span className="social-icon"><i className="fab fa-dribbble"></i></span>
              </div>
            </div>
            <div className="col-md-4 py-3 px-3">
              <h3 className="text-uppercase fs-2 mb-3">About Freelancer</h3>
              <p className="mb-0 fs-6">
                Freelancer is a free to use, MIT licensed Bootstrap theme created by Route
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-bottom bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0 fs-5">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
