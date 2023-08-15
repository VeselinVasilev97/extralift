import classes from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.iconsContainer}>
        <div className={classes.icon}>
          <FacebookIcon />
        </div>
        <div className={classes.icon}>
          <InstagramIcon />
        </div>
        <div className={classes.icon}>
          <LinkedInIcon />
        </div>
      </div>
      <div className={classes.footerHeading}>
        <p>Всички права запазени</p>
        <p>© 2023 Extralift</p>
      </div>
    </div>
  );
};

export default Footer;
