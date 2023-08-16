import classes from './InfoComponent.module.css'
import imageInfo1 from '../../assets/acv1.jpg'
import imageInfo2 from '../../assets/avv8.jpg'
import imageInfo3 from '../../assets/nv3.jpg'
import text from '../textLanguages/Language'
import { useEffect, useState } from 'react'

const InfoComponent = (compNum) => {
    const [lang, setLang] = useState('БГ');

    useEffect(() => {
        if (compNum.languageProp) {
            setLang('БГ')
        } else {
            setLang('EN')
        }
    }, [compNum.languageProp])

    if (compNum.props === 1) {
        return (
            <div className={classes.mainInfoDiv}>
                <div className={classes.imageFrame}>
                    <img src={imageInfo1} className={classes.imageStyleInfo} />
                </div>
                <div className={classes.infoTextDiv}>
                    <h5 className={classes.headerTextStyle}>{text[lang][0].boomLift} <span style={{ fontWeight: 'bold' }}>JLG 45</span></h5>

                    <div className={classes.divHalfsHolder}>
                        <div className={classes.divHalf}>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][0].workHeight}
                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][0].horizontalObseg}
                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][0].weightMax}
                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][0].platformSize}
                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][0].width}

                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][0].height}

                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][0].length}
                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][0].speed}

                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][0].weight}

                            </p>
                        </div>
                        <div style={{ textAlign: "left" }} className={classes.divHalf}>
                            <p className={classes.headerPtagStyled}>
                                15.7 м.
                            </p>

                            <p className={classes.headerPtagStyled}>
                                6.91 м.
                            </p>
                            <p className={classes.headerPtagStyled}>
                                230 кг.
                            </p>
                            <p className={classes.headerPtagStyled}>
                                1.83 х 0.91 м.
                            </p>
                            <p className={classes.headerPtagStyled}>
                                1.80 м.
                            </p>
                            <p className={classes.headerPtagStyled}>
                                2.20 м.
                            </p>
                            <p className={classes.headerPtagStyled}>
                                5.80 м.
                            </p>
                            <p className={classes.headerPtagStyled}>
                                6.37 км/ч
                            </p>
                            <p className={classes.headerPtagStyled}>
                                5900 кг.
                            </p>

                        </div>
                    </div>
                    <div className={classes.divHalfsHolder}>

                        <div className={classes.divPrices}>
                            <p className={classes.priceText}>
                                {text[lang][0].pricePerDay}
                            </p>
                            <p className={classes.priceText}>
                                {text[lang][0].pricePerWeekend}

                            </p>
                            <p className={classes.priceText}>
                                {text[lang][0].pricePerDayPerWeek}

                            </p>
                            <p className={classes.priceText}>
                                {text[lang][0].pricePerDayPerMonth}

                            </p>
                        </div>
                        <div className={classes.divPrices}>
                            <p className={classes.priceTextRight}> 100 лв.</p>
                            <p className={classes.priceTextRight}> 150 лв.</p>
                            <p className={classes.priceTextRight}> 90 лв.</p>
                            <p className={classes.priceTextRight}> 70 лв.</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    } else if (compNum.props === 2) {
        return (
            <div className={classes.mainInfoDiv}>
                <div className={classes.imageFrame}>
                    <img src={imageInfo2} className={classes.imageStyleInfo} />
                </div>
                <div className={classes.infoTextDiv}>
                    <h5 className={classes.headerTextStyle}>{text[lang][0].autoLift}</h5>

                    <div className={classes.divHalfsHolder}>
                        <div className={classes.divHalf}>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][1].workHeight}
                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][1].horizontalObseg}
                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][1].weightMax}
                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][1].platformSize}
                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][1].width}

                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][1].height}

                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][1].length}
                            </p>
                        </div>
                        <div style={{ textAlign: "left" }} className={classes.divHalf}>
                            <p className={classes.headerPtagStyled}>
                                15.7 м.
                            </p>

                            <p className={classes.headerPtagStyled}>
                                6.91 м.
                            </p>
                            <p className={classes.headerPtagStyled}>
                                230 кг.
                            </p>
                            <p className={classes.headerPtagStyled}>
                                1.83 х 0.91 м.
                            </p>
                            <p className={classes.headerPtagStyled}>
                                1.80 м.
                            </p>
                            <p className={classes.headerPtagStyled}>
                                2.20 м.
                            </p>
                            <p className={classes.headerPtagStyled}>
                                5.80 м.
                            </p>
                        </div>
                    </div>
                    <div className={classes.divHalfsHolder}>

                        <p className={classes.headerPtagStyle}>
                            {text[lang][1].hourlyCharge}
                        </p>
                        <div className={classes.divPrices}>
                            <p className={classes.priceTextRight}> 50 лв.</p>
                        </div>

                    </div>
                    <p className={classes.longText}>{text[lang][0].longPeriodRent}</p>

                </div>
            </div>
        )
    } else if (compNum.props === 3) {
        return (
            <div className={classes.mainInfoDiv}>
                <div className={classes.imageFrame}>
                    <img src={imageInfo3} className={classes.imageStyleInfo} />
                </div>
                <div className={classes.infoTextDiv}>
                    <h5 className={classes.headerTextStyle}>{text[lang][0].scissorsLift}<br></br>HOULOTTE COMPACT 12</h5>

                    <div className={classes.divHalfsHolder}>
                        <div className={classes.divHalf}>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][2].workHeight}
                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][2].weightMax}
                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][2].platformSize}
                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][2].platformExtention}
                            </p>
                            {/* <p className={classes.headerPtagStyle}>
                                {text[lang][2].width}
                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][2].height}
                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][2].length}
                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][2].speed}
                            </p>
                            <p className={classes.headerPtagStyle}>
                                {text[lang][2].weight}
                            </p> */}
                        </div>
                        <div style={{ textAlign: "left" }} className={classes.divHalf}>
                            <p className={classes.headerPtagStyled}>
                                12 м.
                            </p>
                            <p className={classes.headerPtagStyled}>
                                300 кг.
                            </p>
                            <p className={classes.headerPtagStyled}>
                                1.17м х 2.40 м.
                            </p>
                            <p className={classes.headerPtagStyled}>
                                0.92 м.
                            </p>
                            {/* <p className={classes.headerPtagStyled}>

                            </p>
                            <p className={classes.headerPtagStyled}>

                            </p>
                            <p className={classes.headerPtagStyled}>

                            </p>
                            <p className={classes.headerPtagStyled}>

                            </p>
                            <p className={classes.headerPtagStyled}>

                            </p> */}

                        </div>
                    </div>
                    <div className={classes.divHalfsHolder}>

                        <div className={classes.divPrices}>
                            <p className={classes.priceText}>{text[lang][2].pricePerDay}</p>
                            <p className={classes.priceText}>{text[lang][2].pricePerWeekend}</p>
                            <p className={classes.priceText}>{text[lang][2].pricePerDayPerWeek}</p>
                            <p className={classes.priceText}>{text[lang][2].pricePerDayPerMonth}</p>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                        <div className={classes.divPrices}>
                            <p className={classes.priceTextRight}> 60 лв.</p>
                            <p className={classes.priceTextRight}> 90 лв.</p>
                            <p className={classes.priceTextRight}> 55 лв.</p>
                            <p className={classes.priceTextRight}> 40 лв.</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}


export default InfoComponent