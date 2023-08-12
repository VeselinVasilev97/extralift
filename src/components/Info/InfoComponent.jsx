import classes from './InfoComponent.module.css'
import imageInfo1 from '../../assets/acv1.jpg'
import imageInfo2 from '../../assets/avv8.jpg'
import imageInfo3 from '../../assets/acv1.jpg'
import imageInfo4 from '../../assets/acv1.jpg'
const InfoComponent = (compNum) => {
    if (compNum.props === 1) {
        return (
            <div className={classes.mainInfoDiv}>
                <div className={classes.imageFrame}>
                    <img src={imageInfo1} className={classes.imageStyleInfoLeft} />
                </div>
                <div className={classes.infoTextDiv}>
                    <h5 className={classes.headerTextStyle}>Артикулираща вишка</h5>
                    <p className={classes.headerPtagStyle}>

                    </p>
                </div>
            </div>
        )
    } else if (compNum.props === 2) {
        return (
            <div className={classes.mainInfoDiv}>
                <div className={classes.infoTextDiv}>
                    <h5 className={classes.headerTextStyle}>Автовишка</h5>
                    <p className={classes.headerPtagStyle}>Автовишка под наем с работна височина до 22 метра,
                        странично достигане до 10 метра. Отлично решение за саниране,
                        спешни ремонти, рязане на дървета, почистване на улуци и водостоци,
                        монтаж на климатици и други спешни случаи.
                    </p>
                </div>
                <div className={classes.imageFrame}>
                    <img src={imageInfo2} className={classes.imageStyleInfoRight} />
                </div>
            </div>
        )
    } else if (compNum.props === 3) {
        return (
            <div className={classes.mainInfoDiv}>
                <div className={classes.imageFrame}>
                    <img src={imageInfo1} className={classes.imageStyleInfoLeft} />
                </div>
                <div className={classes.infoTextDiv}>
                    <h5 className={classes.headerTextStyle}>Ножична вишка</h5>
                    <p className={classes.headerPtagStyle}>
                        nqma text oshte
                    </p>
                </div>
            </div>
        )
    }

}


export default InfoComponent