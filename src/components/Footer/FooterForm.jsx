const FooterForm = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Contact me !</h2>
      <p className="form-subtitle">
        Do you have questions or any idea you want to discuss with me ? Fill the
        form and get in touch !
      </p>
      <form action="https://formspree.io/f/xovvggrw" method="POST">
        <div className="top-inputs">
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
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
