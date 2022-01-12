const FooterForm = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Contact me !</h2>
      <p className="form-subtitle">
        Do you have questions or any idea you want to discuss with me ? Fill the
        form and get in touch !
      </p>
      <div className="top-inputs">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
      </div>
      <div className="bottom-inputs">
        <textarea placeholder="Your message.." rows={5} />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default FooterForm;
