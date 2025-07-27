import "./About.css";

export default function About() {
  return (
    <section className="about text-white py-5 d-flex align-items-center" style={{ backgroundColor: "#1abc9c" }}>
      <div className="container text-center">
        <h2 className="text-uppercase fw-bold">About Component</h2>

        
        <div className="d-flex justify-content-center align-items-center my-4">
          <div className="line bg-white me-3"></div>
          <i className="fas fa-star"></i>
          <div className="line bg-white ms-3"></div>
        </div>

        
        <div className="row text-start justify-content-center">
          <div className="col-md-5">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-5">
            <p>
              You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
