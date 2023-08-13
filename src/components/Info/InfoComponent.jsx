import classes from './InfoComponent.module.css'
import imageInfo1 from '../../assets/acv1.jpg'
import imageInfo2 from '../../assets/avv8.jpg'
import imageInfo3 from '../../assets/nv3.jpg'
const InfoComponent = (compNum) => {
    if (compNum.props === 1) {
        return (
            <div className={classes.mainInfoDiv}>
                <div className={classes.imageFrame}>
                    <img src={imageInfo1} className={classes.imageStyleInfo} />
                </div>
                <div className={classes.infoTextDiv}>
                    <h5 className={classes.headerTextStyle}>Артикулираща вишка <span style={{ fontWeight: 'bold' }}>JLG 45</span></h5>

                    <div className={classes.divHalfsHolder}>
                        <div className={classes.divHalf}>

                            <p className={classes.headerPtagStyle}>
                                Работна височина:
                            </p>
                            <p className={classes.headerPtagStyle}>
                                Хоризонтален обсег:
                            </p>
                            <p className={classes.headerPtagStyle}>
                                Товароподемност:
                            </p>
                            <p className={classes.headerPtagStyle}>
                                Размери на платформата:
                            </p>
                            <p className={classes.headerPtagStyle}>
                                Ширина:
                            </p>
                            <p className={classes.headerPtagStyle}>
                                Височина:
                            </p>
                            <p className={classes.headerPtagStyle}>
                                Дължина:
                            </p>
                            <p className={classes.headerPtagStyle}>
                                Скорост:
                            </p>
                            <p className={classes.headerPtagStyle}>
                                Тегло:
                            </p>
                        </div>
                        <div style={{ textAlign: "left" }} className={classes.divHalf}>
                            <p className={classes.headerPtagStyled}>
                                15.7м
                            </p>

                            <p className={classes.headerPtagStyled}>
                                6.91м
                            </p>
                            <p className={classes.headerPtagStyled}>
                                230кг
                            </p>
                            <p className={classes.headerPtagStyled}>
                                1.83 х 0.91м
                            </p>
                            <p className={classes.headerPtagStyled}>
                                1.80м
                            </p>
                            <p className={classes.headerPtagStyled}>
                                2.20м
                            </p>
                            <p className={classes.headerPtagStyled}>
                                5.80м
                            </p>
                            <p className={classes.headerPtagStyled}>
                                6.37км/ч
                            </p>
                            <p className={classes.headerPtagStyled}>
                                5900кг
                            </p>

                        </div>
                    </div>
                    <div className={classes.divHalfsHolder}>

                        <div className={classes.divPrices}>
                            <p className={classes.priceText}>Цена на ден:</p>
                            <p className={classes.priceText}>Цена за уикенд:</p>
                            <p className={classes.priceText}>Цена на ден за седмица:</p>
                            <p className={classes.priceText}>Цена на ден за месец:</p>
                        </div>
                        <div className={classes.divPrices}>
                            <p className={classes.priceTextRight}> 100лв</p>
                            <p className={classes.priceTextRight}> 150лв</p>
                            <p className={classes.priceTextRight}> 90лв</p>
                            <p className={classes.priceTextRight}> 70лв</p>
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
                <h5 className={classes.headerTextStyle}>Автовишка</h5>

                <div className={classes.divHalfsHolder}>
                    <div className={classes.divHalf}>

                        <p className={classes.headerPtagStyle}>
                            Работна височина:
                        </p>
                        <p className={classes.headerPtagStyle}>
                            Хоризонтален обсег:
                        </p>
                        <p className={classes.headerPtagStyle}>
                            Товароподемност:
                        </p>
                        <p className={classes.headerPtagStyle}>
                            Размери на платформата:
                        </p>
                        <p className={classes.headerPtagStyle}>
                            Ширина:
                        </p>
                        <p className={classes.headerPtagStyle}>
                            Височина:
                        </p>
                        <p className={classes.headerPtagStyle}>
                            Дължина:
                        </p>
                    </div>
                    <div style={{ textAlign: "left" }} className={classes.divHalf}>
                        <p className={classes.headerPtagStyled}>
                            15.7м
                        </p>

                        <p className={classes.headerPtagStyled}>
                            6.91м
                        </p>
                        <p className={classes.headerPtagStyled}>
                            230кг
                        </p>
                        <p className={classes.headerPtagStyled}>
                            1.83 х 0.91м
                        </p>
                        <p className={classes.headerPtagStyled}>
                            1.80м
                        </p>
                        <p className={classes.headerPtagStyled}>
                            2.20м
                        </p>
                        <p className={classes.headerPtagStyled}>
                            5.80м
                        </p>
                    </div>
                </div>
                <div className={classes.divHalfsHolder}>

                    <div className={classes.divPrices}>
                        <p className={classes.priceText}>Цена на час:</p>

                    </div>
                    <div className={classes.divPrices}>
                        <p className={classes.priceTextRight}> 50лв</p>
                    </div>
                    
                </div>
                        <p className={classes.longText}>При наемане за по-дълъг период от време, цената се договаря.</p>
                        <p className={classes.longText}>В цената е включен оператор на машината.</p>

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
                    <h5 className={classes.headerTextStyle}>Ножична вишка<br></br>HOULOTTE COMPACT 12</h5>

                    <div className={classes.divHalfsHolder}>
                        <div className={classes.divHalf}>

                            <p className={classes.headerPtagStyle}>
                                Работна височина:
                            </p>
                            <p className={classes.headerPtagStyle}>
                                Товароподемност:
                            </p>
                            <p className={classes.headerPtagStyle}>
                                Размери на платформата:
                            </p>
                            <p className={classes.headerPtagStyle}>
                                Удължение на платформата:
                            </p>
                            <p className={classes.headerPtagStyle}>
                                Ширина:
                            </p>
                            <p className={classes.headerPtagStyle}>
                                Височина:
                            </p>
                            <p className={classes.headerPtagStyle}>
                                Дължина:
                            </p>
                            <p className={classes.headerPtagStyle}>
                                Скорост:
                            </p>
                            <p className={classes.headerPtagStyle}>
                                Тегло:
                            </p>
                        </div>
                        <div style={{ textAlign: "left" }} className={classes.divHalf}>
                            <p className={classes.headerPtagStyled}>
                                12м
                            </p>
                            <p className={classes.headerPtagStyled}>
                                300кг
                            </p>
                            <p className={classes.headerPtagStyled}>
                                1.17м х 2.40м
                            </p>
                            <p className={classes.headerPtagStyled}>
                                0.92м
                            </p>
                            <p className={classes.headerPtagStyled}>
                               
                            </p>
                            <p className={classes.headerPtagStyled}>
                              
                            </p>
                            <p className={classes.headerPtagStyled}>
                               
                            </p>
                            <p className={classes.headerPtagStyled}>
                                
                            </p>
                            <p className={classes.headerPtagStyled}>
                                
                            </p>

                        </div>
                    </div>
                    <div className={classes.divHalfsHolder}>

                        <div className={classes.divPrices}>
                            <p className={classes.priceText}>Цена на ден:</p>
                            <p className={classes.priceText}>Цена за уикенд:</p>
                            <p className={classes.priceText}>Цена на ден за седмица:</p>
                            <p className={classes.priceText}>Цена на ден за месец:</p>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                        <div className={classes.divPrices}>
                            <p className={classes.priceTextRight}> 60лв</p>
                            <p className={classes.priceTextRight}> 90лв</p>
                            <p className={classes.priceTextRight}> 55лв</p>
                            <p className={classes.priceTextRight}> 40лв</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}


export default InfoComponent