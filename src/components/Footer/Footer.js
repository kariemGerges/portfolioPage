import React from "react";
import logo from '../../assets/the code designer logo.png';
import './Footer.css';
import { Link } from "react-router-dom";
import PdfDownloader from "../PdfDownloader/PdfDownloader";


const Footer = () => {

    return (
        <footer className="footer mt-auto py-2">

            {/* <div class="grid grid-cols-3 gap-4"> */}

                <div class="">

                    {/* <h1 className="text-xl font-bold text-center">Map</h1>
                    <div className=" grid grid-cols-2 gap-1">
                        <ul className="">
                            <li className="text-center">Home</li>
                            <li className="text-center">Contact me</li>
                        </ul>
                        <ul className="">
                            <li className="text-center">My work</li>
                            <li className="text-center">Resume</li>
                        </ul>
                    </div> */}
                </div>

                    <div class="">
                    <div className="footer-container ">
                        <img src={logo} className ="img" alt="logo The Code Designer" />
                    </div>
                        <ul className="nav justify-content-center m-auto">
                            <Link to="/" className="nav-link px-2 hover:text-white navLinks" id="navLinks">Portfolio</Link>
                                <Link to="/blogPage" className="nav-link px-2 hover:text-white navLinks" id="navLinks">Blog</Link> 
                            <Link to="/work" className="nav-link px-2 hover:text-white navLinks" id="navLinks">My Work</Link>
                            <li><a href= "https://github.iu.edu/kgerges"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link px-2 hover:text-white navLinks" id="navLinks">
                            Github
                            </a></li> 
                            <li><a href= "https://www.behance.net/kariemgerges"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-link px-2 hover:text-white navLinks" id="navLinks">
                                    Behance
                                </a>
                            </li>
                            <li>
                                < PdfDownloader />
                            </li>
                        </ul>
                        <h1 className="text-xl font-bold text-center">Contact</h1>
                    <ul>
                        <li className="text-center">
                            <a href="mailto:kariem.gerges@outlook.com"
                                className="text-red-500 hover:text-red-700 hover:underline m-2"
                            >
                            kariem.gerges@outlook.com
                            </a>
                        </li>
                        <li className="text-center">(317) 438-3142</li>
                    </ul>
                    </div>

                <div class="mt-auto">
                    {/* <h1 className="text-xl font-bold text-center">Contact</h1>
                    <ul>
                        <li className="text-center">
                            <a href="mailto:kariem.gerges@outlook.com"
                                className="text-red-500 hover:text-red-700 hover:underline m-2"
                            >
                            kariem.gerges@outlook.com
                            </a>
                        </li>
                        <li className="text-center">(317) 438-3142</li>
                    </ul> */}
                </div>
                    
            {/* </div> */}

        </footer>
    );
};

export default Footer;
