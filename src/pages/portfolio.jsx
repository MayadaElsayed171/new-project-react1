import port1 from '../img/poert1.png';
import port2 from '../img/port2.png';
import port3 from '../img/port3.png';

import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio py-5 text-center">
      <div className="container">
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder mt-5 pt-5">portfolio component</h2>

        <div className="d-flex justify-content-center align-items-center my-4">
          <div className="line bg-dark me-3"></div>
          <i className="fas fa-star"></i>
          <div className="line bg-dark ms-3 "></div>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="portfolio-item position-relative">
              <img src={port1} className="img-fluid rounded" alt="portfolio 1" />
              <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <i className="fas fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="portfolio-item position-relative">
              <img src={port2} className="img-fluid rounded" alt="portfolio 2" />
              <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <i className="fas fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="portfolio-item position-relative">
              <img src={port3} className="img-fluid rounded" alt="portfolio 3" />
              <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <i className="fas fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="portfolio-item position-relative">
              <img src={port1} className="img-fluid rounded" alt="portfolio 3" />
              <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <i className="fas fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="portfolio-item position-relative">
              <img src={port2} className="img-fluid rounded" alt="portfolio 3" />
              <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <i className="fas fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="portfolio-item position-relative">
              <img src={port3} className="img-fluid rounded" alt="portfolio 3" />
              <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <i className="fas fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
         </div>
      </div>
    </section>
  );
}
