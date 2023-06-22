import React, { Component } from "react";
import styles from "./Contact.module.css";
import phoneIcon from "../../assets/icon/phone.svg";

export class Contact extends Component {
  render() {
    return (
      <section id={styles.contact}>
        <div className="_container">
          <div className="contact">
            <div className={styles.contact__body}>
              <div className="contact__about">
                <div className={styles.about__title}>
                  <h1>Contact Us</h1>
                  <p>
                    In dignissim euismod pretium amet enim a eu nam ut urna
                    accumsan pellentesque lacus duis pharetra eutortor.
                  </p>
                </div>
                <div className={styles["content-contact"]}>
                  <div className={styles["contact-icon"]}>
                    <img src={phoneIcon} alt="Phone" />
                  </div>
                  <div className={styles["contact-number"]}>
                    <p>Call us now</p>
                    <a href="tel: (414) 567 - 2109">(414) 567 - 2109</a>
                  </div>
                </div>
                <div className={styles.div_resc}></div>
                <div className={styles.info}>
                  <h2>Not convinced yet?</h2>
                  <p>
                    Massa bibendum consectetur maurisid gravida purus, dolor dui
                    amet morbi non nunc urna purus diam.
                  </p>
                </div>
                <div className={styles["contact-btn"]}>
                  <button>Browse our packages</button>
                </div>
              </div>
              <div className={styles.contact__form}>
                <form className={styles.form} action="#d">
                  <input placeholder="FullName" type="text" />
                  <input placeholder="PhoneNumber" type="text" name="" id="" />
                  <input placeholder="Address" type="text" />
                  <input placeholder="Email" type="text" name="" id="" />
                  <input placeholder="Requested service" type="text" />
                  <input
                    placeholder="Day of service"
                    type="text"
                    name=""
                    id=""
                  />
                </form>
                <textarea
                  placeholder="Add a note"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <div className={styles.form_btn}>
                  <button>Submit message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
