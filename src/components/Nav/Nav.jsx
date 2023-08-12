import React, { useEffect, useState } from "react";
import classes from './Nav.module.css';

const Nav = () => {
    const [nav, setNav] = useState(false)

    const activateNav = () => {
        if (window.scrollY <= 1) {
            setNav(false)
        } else {
            setNav(true)
        }
    }
    window.addEventListener('scroll', activateNav);
    return (
        <div className={classes.sticky}>
            <div className={nav ? classes.NavMainDivActive : classes.NavMainDiv}>
                <div className={classes.logoDiv} />
                <div className={classes.phoneButton}>
                    <a className={classes.phoneText} href="tel:+359878018282">0878018282</a>
                </div>
            </div>
        </div>
    )
}


export default Nav