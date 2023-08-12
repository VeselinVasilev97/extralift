import classes from './Footer.module.css';

const Footer = () => {


    return (
        <div className={classes.footerMainDiv}>
            <div className={classes.flexedDiv}>
                <div className={classes.subDiv}></div>
                <div className={classes.subDiv}></div>
                <div className={classes.subDiv}></div>
            </div>
                <p className={classes.rightsDiv}>All rights reserved!</p>
        </div>
    )
}


export default Footer;