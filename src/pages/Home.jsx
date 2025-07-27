import "./Home.css";
import avatar from "../img/avataaars.svg";

export default function Home() {
  return (
    <div className="home d-flex justify-content-center align-items-center text-white text-center">
      <div>
        <img src={avatar} alt="Avatar" className="avatar mb-3" />

        <h1 className="fw-bolder mb-3">START FRAMEWORK</h1>

        <div className="star-line d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3"></div>
        </div>

        <p className="fs-4">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}
