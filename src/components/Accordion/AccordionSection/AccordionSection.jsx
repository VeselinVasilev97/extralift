import React from "react";
import classes from "./AccordionSection.module.css";
import Accordion from "../Accordion";

const AccordionSection = () => {
  return (
    <div className={classes.accordionContainer}>
      <div className={classes.accordionHeading}>
        <h1>Често задавани въпроси</h1>
      </div>
      <Accordion />
    </div>
  );
};

export default AccordionSection;
