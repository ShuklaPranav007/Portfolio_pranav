import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_79makxf", "template_dk8t0ry", form.current, {
        publicKey: "TSg2a0GXV5YJ1y6Vq",
      })
      e.target.reset()
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                shuklapranav739@gmail.com
              </span>

              <a
                href="mailto:shuklapranav739@gmail.com"
                className="contact__button"
              >
                write me <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Message</h3>
              <span className="contact__card-data">9827336810</span>

              <a href="https://wa.me/9827336810?text=Hello There!!" className="contact__button">
                write me <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-instagram contact__card-icon"></i>
              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">sprnv007</span>

              <a
                href="https://www.instagram.com/sprnv007/"
                className="contact__button"
              >
                write me <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form
            action=""
            ref={form}
            onSubmit={sendEmail}
            className="contact__form"
          >
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Add comment</label>
              <textarea
                name="project"
                id=""
                cols="30"
                rows="5"
                className="contact__form-input"
                placeholder="Write your project"
              ></textarea>
            </div>
            <button className="button contact__button button--flex">
              Send message{" "}
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
