import { useState, useRef } from "react";
import { validateEmail } from "../utils/helpers";
import emailjs from "@emailjs/browser";
import "dotenv";

export default function Contact() {
  // Grouping state as an object
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [userMessage, setUserMessage] = useState("");

  // onBlur on each input element
  // calls handleInputCHange to validate
  function handleInputChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  const form = useRef();

  function handleValidation(e) {
    // Check for a good email
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        setUserMessage("Please enter a valid email address");
      } else {
        setUserMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setUserMessage("Please enter something here.");
      } else {
        setUserMessage("");
      }
    }
    // Check that name and message have some input
    // Alert them if nothing is filled properly
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setUserMessage("email sent");
    setFormState({ name: "", email: "", message: "" });
  }

  return (
    <section className="page-section" id="contact">
      <div className="container container--800">
        <div className="contact__card grid grid--md-2 grid--gap">
          <div className="contact__content">
            <h2 className="heading-2">Contact Me</h2>
            <a className="contact__link" href="mailto:alexgeorgegeer@gmail.com">
              Email: alexgeorgegeer@gmail.com
            </a>
          </div>

          <form className="contact__form" ref={form} onSubmit={handleSubmit}>
            <div className="contact__field">
              <input
                className="contact__input"
                autoComplete="off"
                type="text"
                placeholder="Name"
                value={formState.name}
                name="name"
                onChange={handleInputChange}
                onBlur={handleValidation}
              />
            </div>

            <div className="contact__field">
              <input
                className="contact__input"
                autoComplete="off"
                type="email"
                placeholder="Email"
                value={formState.email}
                name="email"
                onChange={handleInputChange}
                onBlur={handleValidation}
              />
            </div>

            <div className="contact__field">
              <textarea
                className="contact__input"
                autoComplete="off"
                rows="8"
                placeholder="Message"
                value={formState.message}
                name="message"
                onChange={handleInputChange}
                onBlur={handleValidation}
              />
            </div>

            <button
              className="contact__btn button button--stretch button--blue"
              type="submit"
            >
              Submit
            </button>
            {userMessage && <h5 className="error-msg">{userMessage}</h5>}
          </form>
        </div>
      </div>
    </section>
  );
}
