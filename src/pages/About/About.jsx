import React, { Component } from "react";
import aboutCalendar from "../../assets/images/About_Calendar.svg";
import styles from "./About.module.css";
import aboutCart from "../../assets/images/About_Cart.svg";
import aboutVacuum from "../../assets/images/About_Vacuum.svg";

export class About extends Component {
  render() {
    return (
      <section>
        <div className="_container">
          <div className={styles.about}>
            <div className="about__body">
              <div className="about__content">
                <div className={styles["about__title"]}>
                  <h1>About Us</h1>
                </div>
                <div className={styles["about__subtitle"]}>
                  <p>
                    Sagittis nibh scelerisque vitae eget vulputate sem elementum
                    sed neque nisi felis non ultrices massa id egestas quam
                    velit pretium nu.
                  </p>
                </div>
                <div className={styles.about__card}>
                  <div className={styles["card__item"]}>
                    <div className={styles["card_img"]}>
                      <img src={aboutCalendar} alt="Calendar" />
                    </div>
                    <div className={styles["card_info"]}>
                      <h2>1. Schedule online</h2>
                      <p>
                        Sagittis nibh scelerisque vitae egetolment vulputate sem
                        elementum sed n.
                      </p>
                    </div>
                  </div>
                  <div className={styles["card__item"]}>
                    <div className={styles["card_img"]}>
                      <img src={aboutCart} alt="Calendar" />
                    </div>
                    <div className={styles["card_info"]}>
                      <h2>2. Pay online easily</h2>
                      <p>
                        Vitae ut accumsan blandit ullamcorperolm suscipit dui
                        gravida amet at nunc.
                      </p>
                    </div>
                  </div>
                  <div className={styles["card__item"]}>
                    <div className={styles["card_img"]}>
                      <img src={aboutVacuum} alt="Calendar" />
                    </div>
                    <div className={styles["card_info"]}>
                      <h2>3. Get your house cleaned</h2>
                      <p>
                        Nunc maecenas sollicitudin metus tellus mattis sed
                        porttitor cursus eleifend.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
