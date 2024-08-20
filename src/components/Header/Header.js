import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import ThemeToggleBtn from "../ThemeToggleBtn/ThemeToggleBtn";
import Translation from "../Translation/Translation";
// import btnLogo from '../../assets/btn1.png';
import config from "../../Config";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // setIsMenuOpen(false);
        
    };

    return (
    <nav className="p-6  bg-transparent fixed w-full z-10 top-0">
        <div className="hidden md:flex flex-row items-center justify-between">
            <div className="font-bold text-xl">
                <Link to="/" className="font-bold text-xl hover:text-yellow-500 ">
                    Portfolio
                </Link>
            </div>
            {/* flex flex-col items-end space-y-2 */}
                <div className="space-x-4">
                    <Link to="/work" className="navLinks" id="navLinks">My Work</Link>
                        <Link to="/resume" className="navLinks" id="navLinks">Resume</Link>
                    <Link to="/blogPage" className="navLinks" id="navLinks">Blog</Link> 
                </div>
                <div className="space-x-4">
                    < ThemeToggleBtn />
                    < Translation />
                </div>
        </div>

            {/* <div className=" md:hidden flex flex-col" id="humburgerMenu">
                    <button onClick={toggleMenu} className=" focus:outline-none">
                        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                   
            </div> */}
                    {config.apiUrl.includes('localhost') && (
                        <div style={{background: 'red', color: 'white', padding: '5px'}}>
                            Local Development Mode : {config.apiUrl}
                        </div>
                    )}  


                <div className="md:hidden fixed bottom-4 right-4">
                    <button
                        onClick={toggleMenu}
                        className="font-bold py-2 px-3 rounded-full shadow-lg focus:outline-none focus:shadow-outline"
                        id="humburgerMenu"
                    >
                        {isMenuOpen ? 'x' : '+'}
                    </button>
                </div>
                
                {isMenuOpen && (
                <div className="md:hidden fixed bottom-16 right-4 m-4 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <div className="p-4 flex flex-col space-y-4 items-center text-center justify-center">
                        <Link to="/" className="navLinks" id="navLinks" onClick={() => setIsMenuOpen(false)} >Portfolio</Link>
                            <Link to="/work" className="navLinks" id="navLinks" onClick={() => setIsMenuOpen(false)}>Work</Link>
                            <Link to="/blogPage" className="navLinks" id="navLinks" onClick={() => setIsMenuOpen(false)}>Blog</Link> 
                            < ThemeToggleBtn className="items-center" id='navLinks' />
                        < Translation className="items-center" id='navLinks'/>
                    </div>
                </div>
                )}

            {/* {isMenuOpen && (
                <div className="md:hidden rounded-lg mt-3 p-3 flex flex-col space-y-4 items-center bg-gray-50">
                    <Link to="/" className="navLinks" id="navLinks">
                        Portfolio
                    </Link>
                    <Link to="/work" className="navLinks" id="navLinks">
                        Work
                    </Link>
                < ThemeToggleBtn className="items-center" />
                < Translation className="items-center"/>
                </div>
            )} */}

        </nav>
    );
}; 

export default Header;