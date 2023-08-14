import React from "react";
import classes from "./Header.module.css";
import text from "../textLanguages/Language";
import { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";

const Header = (props) => {
  const [lang, setLang] = useState("БГ");

  useEffect(() => {
    if (props.languageProp) {
      setLang("БГ");
    } else {
      setLang("EN");
    }
  }, [props.languageProp]);

  return (
    <div className={classes.header}>
      <h1 className={classes.heading}>{text[lang][0].rentAliftCar}</h1>
      <h2 className={classes.subheading}>Extralift</h2>
      <p className={classes.description}>{text[lang][0].varnaAndDobrich}</p>
      <div className={classes.phoneButton}>
        <div className={classes.buttonContainer}>
          <PhoneIcon sx={{ color: "white" }} />
          <a className={classes.phoneText} href="tel:+359878018282">
            0878018282
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
