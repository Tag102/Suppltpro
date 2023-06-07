import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div className="container my-5">
        {/* Footer */}
        <footer className="text-center text-white" style={{ backgroundColor: 'inherit' }}>
          {/* Grid container */}
          <div className="container">
            {/* Section: Links */}
            <section className="mt-5">
              {/* Grid row*/}
              <div className="row text-center d-flex justify-content-center pt-5">
                {/* Grid column */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to="/about" className="text-white">About us</Link>
                  </h6>
                </div>

                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to="/policy" className="text-white">Privacy Policy</Link>
                  </h6>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to="/contact" className="text-white">Contact</Link>
                  </h6>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row*/}
            </section>
            {/* Section: Text */}
            {/* Section: Social */}
            <section className="text-center mb-5">
              <Link to className="text-white me-4">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to className="text-white me-4">
                <i className="fab fa-twitter" />
              </Link>
              <Link to className="text-white me-4">
                <i className="fab fa-google" />
              </Link>
              <Link to className="text-white me-4">
                <i className="fab fa-instagram" />
              </Link>
              <Link to className="text-white me-4">
                <i className="fab fa-linkedin" />
              </Link>
              <Link to className="text-white me-4">
                <i className="fab fa-github" />
              </Link>
            </section>
            {/* Section: Social */}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <Link className="text-white" to="/">SupplyPro.com</Link>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
    </div>
  );
};

export default Footer;