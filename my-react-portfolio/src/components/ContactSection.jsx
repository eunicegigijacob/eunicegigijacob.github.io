import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

const ContactSection = () => {
  const form = useRef();

  const sendmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        form.current.reset();
        alert('Message sent, I will reach out to you as soon as possible');
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact">
      <div className="contact-form">
        <h2 className="display-4">contact me</h2>
        <p className="mx-auto">Send Me a Message Let's Work Together!.</p>
        <form ref={form} onSubmit={sendmail}>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Name"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Email"
            required
          />

          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            className="form-control"
            id="message"
            name="message"
            placeholder="message"
            rows="5"
          ></textarea>

          <button className="send" id="submit-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
