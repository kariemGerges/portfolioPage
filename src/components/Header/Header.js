import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import ThemeToggleBtn from "../ThemeToggleBtn/ThemeToggleBtn";
// import btnLogo from '../../assets/btn1.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
    <nav className="p-6  bg-transparent fixed w-full z-10 top-0">
        <div className="hidden md:flex flex-row items-center justify-between">
            <div className="font-bold text-xl">
                <Link to="/" className="font-bold text-xl navLinks portfolio">
                    Portfolio
                </Link>
            </div>
            {/* flex flex-col items-end space-y-2 */}
            <div className="space-x-4">
                <Link to="/work" className="navLinks" id="navLinks">
                    My Work
                </Link>
                <Link to="/resume" className="navLinks" id="navLinks">
                    Resume
                </Link>
                
            </div>
            < ThemeToggleBtn />
        </div>
            <div className=" md:hidden flex flex-col" id="humburgerMenu">
                    <button onClick={toggleMenu} className=" focus:outline-none">
                        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            {isMenuOpen && (
                <div className="md:hidden rounded-lg mt-3 p-3 flex flex-col space-y-4 items-center bg-gray-50">
                <Link to="/" className="navLinks" id="navLinks">
                Portfolio
                    </Link>
                    <Link to="/work" className="navLinks" id="navLinks">
                        Work
                </Link>
                < ThemeToggleBtn className="items-center" />
                </div>
            )}
        </nav>
    );
}; 

export default Header;