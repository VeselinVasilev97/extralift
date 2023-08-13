import React from "react";
import classes from "./AccordionSection.module.css";
import Accordion from "../Accordion";
import text from "../../textLanguages/Language";
import { useEffect, useState } from 'react'

const AccordionSection = (props) => {
  const [lang, setLang] = useState('БГ');

  useEffect(() => {
      if (props.languageProp) {
          setLang('БГ')
      } else {
          setLang('EN')
      }
  }, [props.languageProp])
  return (
    <div className={classes.accordionContainer}>
      <div className={classes.accordionHeading}>
        <h1 style={{ color:'#a70f10'}}>{text[lang][0].faq}</h1>
      </div>
      <Accordion />
    </div>
  );
};

export default AccordionSection;
