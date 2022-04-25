import React from "react";
import "./contact.css";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/83fbaaf0-6d07-11ec-b2d5-af79f33d926c";

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  return (
    <section className="contact" id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact __option-icon" />
            <h4>E-mail</h4>
            <h5>davidoprodev@gmail.com</h5>
            <a href="mailto:davidoprodev@gmail.com" target="_blank">
              Send A Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact __option-icon" />
            <h4>Messenger</h4>
            <h5>david j ortiz</h5>
            <a
              href="https://www.facebook.com/profile.php?id=100078418627212"
              target="_blank"
            >
              Send A Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact __option-icon" />
            <h4>Phone/WhatsApp</h4>
            <h5>+1 210.265.7992</h5>
            <a
              href="https://api.whatsapp.com/send?phone+2102657992"
              target="_blank"
            >
              Send A Message
            </a>
          </article>
        </div>
        <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
          <label for="email">Email Address:</label>
          <input
            type="text"
            name="email"
            className="text"
            placeholder="Email"
            required
          />
          <label for="message">Message:</label>
          <textarea placeholder="Message" name="message" required></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
          {submitted && <span>Thanks, I will reply ASAP!</span>}
        </form>
      </div>
      <div className="right">
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>
  );
}
