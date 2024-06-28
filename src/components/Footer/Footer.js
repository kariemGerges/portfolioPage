import React from "react";
import logo from '../../assets/the code designer logo.png';
import './Footer.css';
import { Link } from "react-router-dom";
import PdfDownloader from "../PdfDownloader/PdfDownloader";


const Footer = () => {

    return (
        <footer className="footer mt-auto py-2">
            <div className="footer-container ">
                <img src={logo} className ="img" alt="logo The Code Designer" />
            </div>
            <ul className="nav justify-content-center pb-3 mb-3">
                <Link to="/" className="nav-link px-2 hover:text-white navLinks" id="navLinks">
                Portfolio
                    </Link>
                    <Link to="/work" className="nav-link px-2 hover:text-white navLinks" id="navLinks">
                        My Work
                    </Link>
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
        </footer>
    );
};

export default Footer;
