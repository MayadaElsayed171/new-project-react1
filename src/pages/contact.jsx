import './Contact.css';

export default function Contact() {
  return (
    <section className="contact py-5 text-center">
      <div className="container">
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder mt-5 pt-5">Contact Section</h2>

        <div className="d-flex justify-content-center align-items-center my-4 mb-5 pb-5">
          <div className="line bg-dark me-3"></div>
          <i className="fas fa-star"></i>
          <div className="line bg-dark ms-3 "></div>
        </div>

        <form className="w-75 mx-auto text-start mt-5">
          <input type="text" placeholder="userName" className="form-control mb-5 border-0 border-bottom shadow-none" />
          <input type="text" placeholder="userAge" className="form-control mb-5 border-0 border-bottom shadow-none" />
          <input type="email" placeholder="Email Address" className="form-control mb-5 border-0 border-bottom shadow-none" />
          <input type="password" placeholder="uesrPassword" className="form-control mb-5 border-0 border-bottom shadow-none" />
          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}
