import React from "react";
import classes from "./Header.module.css";
import text from "../textLanguages/Language";
import { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
      <h2 className={classes.subheading}>{text[lang][0].vishkiPodNaem}</h2>
      <div style={{display: "flex", flexDirection: "column", gap: "2rem", justifyContent: "center", alignItems: "center"}}>
        <p className={classes.description}>{text[lang][0].varnaAndDobrich}</p>
        <div className={classes.phoneButton}>
          <a className={classes.phoneText} href="tel:+359878018282">
            <PhoneIcon sx={{ color: "white" }} />
            {text[lang][0].callUs}
          </a>
        </div>
      </div>
      <div style={{userSelect:"none"}}>
        <button style={{userSelect:"none"}} onClick={props.onClick} className={classes.scrollBtn}>
          <ExpandMoreIcon fontSize="large"/>
        </button>
      </div>
    </div>
  );
};

export default Header;
