import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import ThemeToggleBtn from "../ThemeToggleBtn/ThemeToggleBtn";
import Translation from "../Translation/Translation";
import config from "../../Config";
import { Logs, CopyMinus  } from 'lucide-react'

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
                <div className="flex flex-row items-center pr-9 space-x-2">
                    < ThemeToggleBtn />
                    < Translation />
                </div>
        </div>
                    {config.apiUrl.includes('localhost') && (
                        <div className="text-red-500">
                            Dev Mode : {config.apiUrl}
                        </div>
                    )}  


                <div className="md:hidden fixed top-9 left-2">
                    <button
                        onClick={toggleMenu}
                        className="font-bold py-2 px-3 rounded-full shadow-lg focus:outline-none focus:shadow-outline"
                        id="humburgerMenu"
                    >
                        {isMenuOpen ? <CopyMinus /> : <Logs />}
                    </button>
                </div>
                
                {isMenuOpen && (
                <div className="md:hidden fixed top-16 left-4 m-2 bg-gray-900 border border-gray-300 rounded-lg shadow-lg">
                    <div className="p-4 flex flex-col space-y-4 items-center justify-center">
                        <Link to="/" className="navLinks" id="navLinks" onClick={() => setIsMenuOpen(false)} >Portfolio</Link>
                            <Link to="/work" className="navLinks" id="navLinks" onClick={() => setIsMenuOpen(false)}>Work</Link>
                                <Link to="/resume" className="navLinks" id="navLinks"onClick={() => setIsMenuOpen(false)}>Resume</Link>
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