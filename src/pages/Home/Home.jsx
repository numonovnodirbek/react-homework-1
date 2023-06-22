import React, { Component } from "react";
import phoneIcon from "../../assets/icon/phone.svg";
import mainBackround from "../../assets/images/main.svg";
import styles from "./Home.module.css";

class Home extends Component {
  render() {
    return (
      <section className={styles.home}>
        <div className="_container">
          <div className="main">
            <div className={styles.main__body}>
              <div className={styles.main__content}>
                <div className={styles.content__title}>
                  <h1>Quality cleaning for your home</h1>
                  <p>
                    Condimentum mauris sit cursus amet id non neque pharetra
                    nulla ornare sed facilisis senectus dapibus nibh ultrices
                    eget suscipit aliquet et nulla magna lacus penatibus.
                  </p>
                </div>
                <div className={styles.content__btn}>
                  <div className={styles["content-button"]}>
                    <button>Get a free quote</button>
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
                </div>
              </div>
              <div className={styles.main__backround}>
                <img src={mainBackround} alt="Home Clean" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
