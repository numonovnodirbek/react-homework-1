import React from "react";
import logo from "../../assets/icon/logotype.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="_container">
        <div className={styles.footer}>
          <div className={styles.footer__body}>
            <div className={styles.footer__about}>
              <h2>Quality cleaning for your home</h2>
              <p>
                Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                eiusmo.
              </p>
            </div>
            <div className={styles.footer__contact}>
              <h2>Contact us</h2>
              <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
              <p>(414) 567 - 2109</p>
              <p>contact@cleaning.com</p>
            </div>
            <div className={styles.footer__hours}>
              <h2>Hours</h2>
              <h3>Monday to Friday</h3>
              <p>6:00 AM - 9:00 PM</p>
              <h3>Saturday & Sunday</h3>
              <p>8:00 AM - 8:00 PM</p>
            </div>
            <div className={styles.footer__info}>
              <h2>Get a free estimate</h2>
              <h3>(414) 567 - 2109</h3>
              <p>
                Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <div className={styles.footer__button}>
                <button>Request a free quote</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div}></div>
        <div className={styles.footer__inner}>
          <div className="inner__logo">
            <img src={logo} alt="Cleaning X" />
          </div>
          <div className={styles.inner__license}>
            <p>
              Copyright © Cleaning X | Designed by{" "}
              <a href="#d">BRIX Templates</a> - Powered by{" "}
              <a href="#d">Webflow</a> - <a href="#d">Licenses</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
