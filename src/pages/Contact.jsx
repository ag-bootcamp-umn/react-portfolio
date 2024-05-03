import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
    <>
      {/* <section className="page-section">
        <div className="container">
          <div className="row">
            <h2>Contact Me</h2>
          </div>
        </div>
      </section> */}

      <section className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h2 className="heading-2">Contact Me</h2>
              <p>Email: alexgeorgegeer@gmail.com</p>

              <Form ref={form} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Control
                    type="input"
                    placeholder="Name"
                    value={formState.name}
                    name="name"
                    onChange={handleInputChange}
                    onBlur={handleValidation}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={formState.email}
                    name="email"
                    onChange={handleInputChange}
                    onBlur={handleValidation}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                  <Form.Control
                    as="textarea"
                    placeholder="Message"
                    value={formState.message}
                    name="message"
                    onChange={handleInputChange}
                    onBlur={handleValidation}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
                {userMessage && <h5 className="error-msg">{userMessage}</h5>}
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
