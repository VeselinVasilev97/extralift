import Nav from "./components/Nav/Nav";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Fancybox from "./components/Gallery/Fancybox";
import image1 from "./assets/aboutUs.jpg";
import image2 from "./assets/first.jpg";
import image3 from "./assets/img3.jpg";
import image4 from "./assets/img5.jpg";
import image5 from "./assets/img6.jpg";
import image8 from "./assets/img8.jpg";
import image9 from "./assets/nv4.jpg";
import InfoComponent from "./components/Info/InfoComponent";
import AccordionSection from "./components/Accordion/AccordionSection/AccordionSection";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>
      <div className={classes.architecture}>
        <Nav />
        <div className={classes.row}>
          <Header />
        </div>
        <div style={{paddingTop:'10px'}} className={classes.row}>
          <InfoComponent props={1}/>
        </div>
        <div style={{paddingTop:'10px'}} className={classes.row}>
          <InfoComponent props={2}/>
        </div>
        <div style={{paddingTop:'10px'}} className={classes.row}>
          <InfoComponent props={3}/>
        </div>
        <div className={classes.row}>
        </div>
        <div className={classes.row}>
          <AccordionSection />
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
        <div className={classes.row}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
