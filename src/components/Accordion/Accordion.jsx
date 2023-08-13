import * as React from "react";
import Accordion from "@mui/material/Accordion";
import classes from "./Accordion.module.css";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import text from "../textLanguages/Language";
export default function BasicAccordion(props) {
  return (
    <div className={classes.accordion}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{text[props.language][0].faq1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          {text[props.language][0].faq2}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {text[props.language][0].faq2Answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          {text[props.language][0].faq3}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul style={{ padding: '0px 20px' }}>
            <li>{text[props.language][0].option1}</li>
            <li>{text[props.language][0].option2}</li>
            <li>{text[props.language][0].option3}</li>
            <li>{text[props.language][0].option4}</li>
            <li>{text[props.language][0].option5}</li>
            <li>{text[props.language][0].option6}</li>
            <li>{text[props.language][0].option7}</li>
            <li>{text[props.language][0].option8}</li>
            <li>{text[props.language][0].option9}</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          {text[props.language][0].faq4}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Електрическите ножични вишки</b> са най-лекия вид работни платформи, които работят най-добре при проекти за управление на инвентара и събиране на запаси в склад с равномерна повърхност на настилката. Електрическите ножични вишки са леки и компактни, обикновено побират до 2-ма души  + товар до 360кг. Това означава, че тези машини работят добре за по-малки складове, в които не се изисква повдигане на тежък товар. Това обикновено е най-евтиният вариант, когато трябва да изключите използването на стълби и скелета.
            <br></br>
            <br></br>
            <b>Електрическите ножични вишки са подходящи:</b>
            <br></br>
            <br></br>

            Когато искате да намалите разходите и да повишите ефективността на процесите за управление на складовите си запаси
            В закрити помещения, изискващи нисък просвет и минимални вредни емисии
            При леки, вертикални проекти за повдигане на равни повърхности
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  );
}
