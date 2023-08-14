import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";
import PhoneIcon from "@mui/icons-material/Phone";

const Nav = (props) => {
  const [nav, setNav] = useState(false);
  const [langFlag, setLangFlag] = useState(true);

  const changeLanguage = () => {
    setLangFlag(!langFlag);
    props.changeLang(!langFlag);
  };
  const activateNav = () => {
    if (window.scrollY <= 2) {
      setNav(false);
    } else {
      setNav(true);
    }
  };

  useEffect(() => {
    // console.log(langFlag)
  }, [langFlag]);
  window.addEventListener("scroll", activateNav);
  return (
    <div className={classes.sticky}>
      <div className={nav ? classes.NavMainDivActive : classes.NavMainDiv}>
        <div className={classes.logoDiv} />
        <div className={classes.btnsHolder}>
          <div className={classes.phoneButton}>
            <a className={classes.phoneText} href="tel:+359878018282">
              <PhoneIcon sx={{ color: "white" }} />
              0878018282
            </a>
          </div>
          <div className={classes.langBtnHolder}>
            {langFlag ? (
              <button
                className={classes.langBtnBg}
                onClick={() => changeLanguage()}
                type="button"
              ></button>
            ) : (
              <button
                className={classes.langBtnEn}
                onClick={() => changeLanguage()}
                type="button"
              ></button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
