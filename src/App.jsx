import Nav from "./components/Nav/Nav";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Fancybox from "./components/Gallery/Fancybox";
import image1 from "./assets/aboutUs.jpg";
import image2 from "./assets/first.jpg";
import image3 from "./assets/img3.jpg";
import image4 from "./assets/img5.jpg";
import image5 from "./assets/img6.jpg";
// import image6 from "./assets/first.jpg";
// import image7 from "./assets/first.jpg";
import image8 from "./assets/img8.jpg";
import image9 from "./assets/img9.jpg";
// import image10 from "./assets/first.jpg";
// import image11 from "./assets/first.jpg";

function App() {
  return (
    <>
      <div className={classes.architecture}>
        <Nav />
        <div className={classes.row}>
          <Header />
        </div>
        <div className={classes.row}>
          <div className={classes.centeredDiv}>

            <Fancybox
              options={{
                Carousel: {
                  infinite: true,
                },
              }}
            >
              <a data-fancybox="gallery" href={image1}>
                <img src={image1} className={classes.imageStyle} />
              </a>
              <a data-fancybox="gallery" href={image2}>
                <img src={image2} className={classes.imageStyle} />
              </a>
              <a data-fancybox="gallery" href={image3}>
                <img src={image3} className={classes.imageStyle} />
              </a>
              <a data-fancybox="gallery" href={image4}>
                <img src={image4} className={classes.imageStyle} />
              </a>
              <a data-fancybox="gallery" href={image5}>
                <img src={image5} className={classes.imageStyle} />
              </a>
              <a data-fancybox="gallery" href={image8}>
                <img src={image8} className={classes.imageStyle} />
              </a>
              <a data-fancybox="gallery" href={image5}>
                <img src={image5} className={classes.imageStyle} />
              </a>
            </Fancybox>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
