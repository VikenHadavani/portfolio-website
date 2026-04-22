import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:vikenhadavani@gmail.com" data-cursor="disable">
                vikenhadavani@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+916353918626" data-cursor="disable">
                +91 63539 18626
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/VikenHadavani"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/vikenhadavani"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://medium.com/@vikenhadavani"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Medium <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Viken Hadavani <br /> <span>AI Developer</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
