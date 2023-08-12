import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.heading}>Автовишки под наем</h1>
      <h2 className={classes.subheading}>Extralift</h2>
      <p className={classes.description}>
        Обслужваме цял Добрич без почивен ден!
      </p>
      <div className={classes.phoneButton}>
        <a className={classes.phoneText} href="tel:+359878018282">
          0878018282
        </a>
      </div>
    </div>
  );
};

export default Header;
