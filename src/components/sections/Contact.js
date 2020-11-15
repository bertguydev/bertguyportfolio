import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";


function Contact() {
  const [formdata, setFormdata] = useState({
    from_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formdata.from_name) {
      setError(true);
      setMessage("Name is required");
    } else if (!formdata.email) {
      setError(true);
      setMessage("Email is required");
    } else if (!formdata.message) {
      setError(true);
      setMessage("Message is required");
    }else if (!formdata.recaptcha) {
        setError(true);
        setMessage("reCaptcha is required.");
    }else if (formdata.recaptcha.success == false) {
        setError(true);
        setMessage("Thanks for playing have a nice day.");
    }else {
      setError(false);
      setMessage("You message has been sent!!!");
      emailjs.send('service_1572v2b','template_cyuz4ez', formdata, 'user_s1he7ZaGEyEOKm1Yo3xPo')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    console.log(formdata);
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <Pagetitle title="Get in Touch" />

        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>Send me a message.</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                {/* <p>
                  Don't like forms? Send me an{" "}
                  <a href="mailto:name@example.com">email</a>. 👋
                </p> */}
              </ScrollAnimation>
            </div>
          </div>

          <div className="col-md-8">
            <form
            
              id="contact-form"
              className="contact-form mt-6"
              onSubmit={submitHandler}
            >
              <div className="row">
                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="from_name"
                      id="InputName"
                      placeholder="Your name"
                      onChange={handleChange}
                      value={formdata.name}
                    />
                  </div>
                </div>

                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      name="email"
                      placeholder="Email address"
                      onChange={handleChange}
                      value={formdata.email}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="InputMessage"
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                      onChange={handleChange}
                      value={formdata.message}
                    ></textarea>
                  </div>
                </div>
              </div>
              <ReCAPTCHA
                    name="recaptcha"
                    value={formdata.recaptcha}
                    sitekey="6LeBUeMZAAAAAAaM2RGjQkcB-w9u982Zs9pV6TLU"
                    onChange={handleChange}
                />
              <button
                type="submit"
                name="submit"
                id="submit"
                value="Submit"
                className="btn btn-default"
              >
                Send Message
              </button>
            </form>
            {handleAlerts()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
