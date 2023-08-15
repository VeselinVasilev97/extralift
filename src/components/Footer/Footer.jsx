import classes from './Footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {


    return (
        <div className={classes.footerMainDiv}>
            <div className={classes.flexedDiv}>
                <div className={classes.subDiv}>
                    <h1>Extralift</h1>
                    <ul>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </div>
                <div className={classes.subDiv}>test</div>
                <div className={classes.subDiv}>test</div>
            </div>
                <p className={classes.rightsDiv}>All rights reserved!</p>
        </div>
    )
}


export default Footer;