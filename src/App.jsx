import Nav from "./components/Nav/Nav";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Fancybox from "./components/Gallery/Fancybox";
import image1 from "./assets/aboutUs.jpg";
import image2 from "./assets/first.jpg";
import image3 from "./assets/img3.jpg";
import image4 from "./assets/img5.jpg";
import image5 from "./assets/img6.jpg";
import image9 from "./assets/nv4.jpg";
import image10 from "./assets/nv1.jpg";
import image11 from "./assets/nv5.jpg";
import InfoComponent from "./components/Info/InfoComponent";
import AccordionSection from "./components/Accordion/AccordionSection/AccordionSection";
import Footer from "./components/Footer/Footer";
import { useEffect, useState, useRef } from "react";
import text from "./components/textLanguages/Language";
import "./App.css";
function App() {
  const [switchOnOff, setSwitchOnOff] = useState(true);
  const [langFlag, setLangFlag] = useState(true);
  const [lang, setLang] = useState("БГ");
  const ref = useRef(null);
  //scroll effect
  useEffect(() => {
    const components = document.querySelectorAll(".row");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      {
        //задаваме го на 1 за да се изпълни ефекта когато компонента е 100 процента видим (между 0 и 1 са допустимите стойности)
        /* threshold: .5 */
        rootMargin: "-100px",
      }
    );
    components.forEach((components) => {
      observer.observe(components);
    });
  }, []);

  //scroll effect

  useEffect(() => {
    if (langFlag) {
      setLang("БГ");
    } else {
      setLang("EN");
    }
  }, [langFlag]);

  const scrollFunc = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      {switchOnOff ? (
        <div className={classes.architecture}>
          <Nav changeLang={setLangFlag} />
          <div className={classes.row} /* className={classes[`row show`]} */>
            <Header onClick={scrollFunc} languageProp={langFlag} />
          </div>
          <div ref={ref} className="row">
            <InfoComponent languageProp={langFlag} props={1} />
          </div>
          <div style={{ marginTop: "100px" }} className="row">
            <InfoComponent languageProp={langFlag} props={2} />
          </div>
          <div style={{ marginTop: "100px" }} className="row ">
            <InfoComponent languageProp={langFlag} props={3} />
          </div>
          <div style={{ marginTop: "100px" }} className="row ">
            <AccordionSection languageProp={langFlag} />
          </div>
          <div style={{ marginTop: "100px" }} className="row ">
            <div className={classes.centeredDiv}>
              <h1
                style={{
                  fontWeight: "300",
                  textAlign: "center",
                  height: "100px",
                }}
              >
                {text[lang][0].gellery}
              </h1>
              <Fancybox
                languageProp={langFlag}
                options={{
                  Carousel: {
                    infinite: true,
                  },
                }}
              >
                <div className={classes.galleryContainer}>
                  <a data-fancybox="gallery" href={image1}>
                    <img loading="lazy" src={image1} className={classes.imageStyle} />
                  </a>
                  <a data-fancybox="gallery" href={image2}>
                    <img loading="lazy" src={image2} className={classes.imageStyle} />
                  </a>
                  <a data-fancybox="gallery" href={image10}>
                    <img loading="lazy" src={image10} className={classes.imageStyle} />
                  </a>
                  <a data-fancybox="gallery" href={image11}>
                    <img loading="lazy" src={image11} className={classes.imageStyle} />
                  </a>
                  <a data-fancybox="gallery" href={image4}>
                    <img src={image4} className={classes.imageStyle} />
                  </a>
                  <a data-fancybox="gallery" href={image5}>
                    <img src={image5} className={classes.imageStyle} />
                  </a>
                  <a data-fancybox="gallery" href={image3}>
                    <img src={image3} className={classes.imageStyle} />
                  </a>
                </div>
              </Fancybox>
            </div>
          </div>
          <div style={{ marginTop: "100px" }} className={classes.row}>
            <Footer languageProp={switchOnOff} />
          </div>
        </div>
      ) : (
        <div className={classes.maintenance}>
          <p>WEBSITE IS UNDER MAINTENANCE</p>
        </div>
      )}
    </>
  );
}

export default App;
