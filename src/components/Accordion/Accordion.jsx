import * as React from "react";
import Accordion from "@mui/material/Accordion";
import classes from "./Accordion.module.css";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion() {
  return (
    <div className={classes.accordion}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Сам ли ще управлявам вишката?</Typography>
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
            Доставка до обект
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Разполагаме със собствен транспорт за доставка на машините, транспортът не е включен в цената, при желание и възможност на клиента, той сам може да организира транспорта на машината.
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
            За какво може да бъде използвана автовишка ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul style={{ padding: '0px 20px' }}>
            <li>почистване на стъкла</li>
            <li>кастрене и рязане на клони</li>
            <li>ремонт и почистване на фасади</li>
            <li>монтаж и демонтаж да климатици</li>
            <li>изграждане и поддръжка на освтление</li>
            <li>ел. услуги</li>
            <li>монтаж и демонтаж да улуци</li>
            <li>изграждане на рекламни билборди</li>
            <li>изграждане на изолации</li>
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
            Кога трябва да използваме електрическа ножична вишка?
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
