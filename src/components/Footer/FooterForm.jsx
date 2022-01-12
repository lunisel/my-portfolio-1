import { useRef } from "react";
import emailjs from "emailjs-com";

const FooterForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);

    emailjs
      .sendForm(
        "service_0nwi6uo",
        "template_zukmulm",
        form.current,
        "user_38iqaz1pzTBAZm2BAMiOv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Contact me !</h2>
      <p className="form-subtitle">
        Do you have questions or any idea you want to discuss with me ? Fill the
        form and get in touch !
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="top-inputs">
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Email" name="email" />
        </div>
        <div className="bottom-inputs">
          <textarea placeholder="Your message.." rows={5} name="message" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FooterForm;
