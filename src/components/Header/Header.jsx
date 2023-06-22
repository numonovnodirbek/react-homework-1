import React from "react";
import logo from "../../assets/icon/logotype.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className="_container">
        <div className={styles.header}>
          <div className={styles.header__main}>
            <div className={styles.header__navigation}>
              <div className={styles.navigation_logo}>
                <img src={logo} alt="Cleaning X" />
              </div>
              <div className={styles.navigation_items}>
                <ul className={styles.menu}>
                  <li className="menu-item">
                    <a className={styles["menu-link"]} href="#d">
                      Home
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className={styles["menu-link"]} href="#d">
                      About
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className={styles["menu-link"]} href="#d">
                      Services
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className={styles["menu-link"]} href="#c">
                      Articles
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className={styles["menu-link"]} href="#j">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.header__buttons}>
              <div className={styles["basket-length"]}>
                <p>Cart (0)</p>
              </div>
              <div className={styles["header-button"]}>
                <button>Get a free quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
