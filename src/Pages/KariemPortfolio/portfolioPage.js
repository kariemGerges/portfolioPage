import React from "react";
import img1 from '../../assets/meDark.png';
import img2 from '../../assets/meLight.png';
import Contact from "../Contact/Contact";
import Bio from "../Bio/Bio";
import Home from "../Home/Home";
import './KariemPortfolio.css';
import ThemeContext from "../../components/ThemeContext/ThemeContext";
import { useTranslation  } from "react-i18next";

const KariemPortfolio = () => {

    const { theme } = React.useContext(ThemeContext);
    const  { i18n } = useTranslation ();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };
    

    return (

        <div className="min-h-screen flex flex-col">
          <div className="">
            <div className="max-w-screen-xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">

              <div className="w-full">
                {theme ? (
                  <img src={img1} id="img2" alt="kariem portfolio" className="w-full h-auto rounded-lg shadow-lg" />
                ) : (
                  <img src={img2} id="img1" alt="kariem portfolio" className="w-full h-auto rounded-lg shadow-lg" />
                )}
              </div>
    
              <div className="w-full">
                <Home />
              </div>
    
              <div className="w-full">
                <Bio />
              </div>
    
              <div className="w-full">
                <Contact />
              </div>
            </div>
          </div>
      </div>
    );
}

export default KariemPortfolio;