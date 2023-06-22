import React, { Component } from "react";
import styles from "./Service.module.css";
import serviceHome from "../../assets/images/Service_Home.svg";
import serviceTower from "../../assets/images/Service_Tower.svg";
import serviceEnterprice from "../../assets/images/Service_Enterprice.svg";

export class Service extends Component {
  render() {
    return (
      <section>
        <div className="_container">
          <div className="service">
            <div className="service__body">
              <div className="service__content">
                <div className={styles.content__main}>
                  <div className={styles.service__title}>
                    <h1>Our Services</h1>
                  </div>
                  <div className={styles.service__main__button}>
                    <button>Explore services</button>
                  </div>
                </div>
                <div className={styles.service__card}>
                  <div className={styles.card__item}>
                    <div className={styles.card_img}>
                      <img src={serviceHome} alt="" />
                    </div>
                    <div className={styles.card_info}>
                      <h2>House cleaning</h2>
                      <p>
                        Lorem ipsum dolor sit amet consecte tur adipiscing elit
                        semper dalaracc lacus vel facilisis volutpat est.
                      </p>
                    </div>
                  </div>
                  <div className={styles.card__item}>
                    <div className={styles.card_img}>
                      <img src={serviceTower} alt="" />
                    </div>
                    <div className={styles.card_info}>
                      <h2>Office cleaning</h2>
                      <p>
                        Lorem ipsum dolor sit amet consecte tur adipiscing elit
                        semper dalaracc lacus vel.
                      </p>
                    </div>
                  </div>
                  <div className={styles.card__item}>
                    <div className={styles.card_img}>
                      <img src={serviceEnterprice} alt="" />
                    </div>
                    <div className={styles.card_info}>
                      <h2>Industrial cleaning</h2>
                      <p>
                        Lorem ipsum dolor sit amet consecte tur adipiscing elit
                        semper dalaracc lacus vel facilisis volutpat est.
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

export default Service;
