import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.heading}>Автовишки под наем</h1>
      <h2 className={classes.subheading}>Extralift</h2>
      <p>Обслужваме цял Добрич без почивен ден</p>
      <button className={classes.button}><span>+359 898 58 7030</span></button>
    </div>
  );
};

export default Header;
