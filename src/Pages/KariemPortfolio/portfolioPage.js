import React, { useEffect } from "react";
import img1 from '../../assets/P1.jpg';
import img2 from '../../assets/portLight.jpg';
import Contact from "../Contact/Contact";
import Bio from "../Bio/Bio";
import Home from "../Home/Home";
import './KariemPortfolio.css';
import ThemeContext from "../../components/ThemeContext/ThemeContext";


const KariemPortfolio = () => {

    const { theme } = React.useContext(ThemeContext);

    return (
            
            <div className="justify-center items-center  bg-opacity-800">
                
            <div>
                {
                theme === 'light' ?
                    <img src={img2} id="img2" className="" alt="kariem portfolio"/> 
                :
                    <img src={img1} id="img1" className="" alt="kariem portfolio"/>
                }
                
            </div>

            <Home />
            <Bio />

        <div className="container mx-auto">
            <Contact />
        </div>
        </div>
    );
}

export default KariemPortfolio;


//<div class="">
//<h1 class="portfolio">Portfolio</h1>
//</div>