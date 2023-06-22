import React, { Component } from "react";
import covidClean from "../../assets/images/Covid_Clean.svg";
import phoneIcon from "../../assets/icon/phone.svg";
import styles from "./Banner.module.css";

export class Banner extends Component {
  render() {
    return (
      <section>
        <div className="_container">
          <div className={styles.banner}>
            <div className={styles.banner__body}>
              <div className={styles.banner__inner}>
                <div className={styles.banner__img}>
                  <img src={covidClean} alt="Clean Home" />
                </div>
                <div className="banner__content">
                  <div className={styles.banner_wrapper}>
                    <h2>Covid-19 sanitization</h2>
                    <h1>
                      We follow guidelines to keep you safe from the COVID-19
                      virus
                    </h1>
                    <p>
                      Lobortis mattis odio leo eget mauris met aliquet semper
                      molestie sollicitudin congue massa mauris lectus.
                    </p>
                  </div>
                  <div className={styles.banner_btn}>
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
              </div>
            </div>
            <div className={styles.banner__resc}></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
