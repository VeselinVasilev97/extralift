import React from "react";
import classes from "./AccordionSection.module.css";
import Accordion from "../Accordion";

const AccordionSection = () => {
  return (
    <div className={classes.accordionContainer}>
      <Accordion />
    </div>
  );
};

export default AccordionSection;
