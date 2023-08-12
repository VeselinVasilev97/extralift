import classes from './InfoComponent.module.css'
import imageInfo1 from '../../assets/acv1.jpg'
const InfoComponent = () => {
    return (
        <div className={classes.mainInfoDiv}>
            <div className={classes.imageFrame}>
                <img src={imageInfo1} className={classes.imageStyleInfo} />
            </div>
            <div className={classes.infoTextDiv}>
                <h3>Автовишка под наем</h3>
            </div>
        </div>
    )
}


export default InfoComponent