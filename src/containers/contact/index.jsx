import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="CONTACT"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <form className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  name="name"
                  required
                  className="inputName"
                  type="text"
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>

              <div>
                <input
                  name="email"
                  required
                  className="inputEmail"
                  type="email"
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>

              <div>
                <textarea
                  name="description"
                  required
                  className="inputDescription"
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
