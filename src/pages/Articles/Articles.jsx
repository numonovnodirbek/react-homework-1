import React, { Component } from "react";
import styles from "./Articles.module.css";
import articlesVacuum from "../../assets/images/Articles_Vacuum.svg";
import articlesClean from "../../assets/images/Articles_Clean.svg";

export class Articles extends Component {
  render() {
    return (
      <section>
        <div className="_container">
          <div className={styles.articles}>
            <div className="articles__body">
              <div className={styles.articles__content}>
                <div className={styles.content__title}>
                  <h1>Articles & resources</h1>
                </div>
                <div className={styles.content__btn}>
                  <button className={styles.blue}>Get a free quote</button>
                  <button className={styles.white}>Browse articles</button>
                </div>
              </div>
              <div className={styles.articles__card}>
                <div className={styles.card__item}>
                  <div className={styles.item_img}>
                    <img src={articlesVacuum} alt="Vacuum Clean" />
                  </div>
                  <div className={styles.item_info}>
                    <h2>
                      8 best vacuum cleaners to clean any mess for your home in
                      2022
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                      justo quis odio sit sit ac port titor sit males.
                    </p>
                    <div className={styles.item_date}>
                      <p>Jan 28, 2022</p>
                      <div className={styles.div}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.card__item}>
                  <div className={styles.item_img}>
                    <img src={articlesClean} alt="Vacuum Clean" />
                  </div>
                  <div className={styles.item_info}>
                    <h2>
                      8 best vacuum cleaners to clean any mess for your home in
                      2022
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adip iscing elit
                      justo quis odio sit sit ac port titor sit males.
                    </p>
                    <div className={styles.item_date}>
                      <p>Jan 28, 2022</p>
                      <div className={styles.div}></div>
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

export default Articles;
