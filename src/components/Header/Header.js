// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import './Header.css';
// import ThemeToggleBtn from "../ThemeToggleBtn/ThemeToggleBtn";
// import Translation from "../Translation/Translation";
// import config from "../../Config";
// import { Logs, CopyMinus  } from 'lucide-react'

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//         // setIsMenuOpen(false);

//     };

//     return (
//     <nav className="p-6  bg-transparent fixed w-full z-10 top-0">
//         <div className="hidden md:flex flex-row items-center justify-between">
//             <div className="font-bold text-xl">
//                 <Link to="/" className="font-bold text-xl hover:text-yellow-500 ">
//                     Portfolio
//                 </Link>
//             </div>
//             {/* flex flex-col items-end space-y-2 */}
//                 <div className="space-x-4">
//                     <Link to="/work" className="navLinks" id="navLinks">My Work</Link>
//                         <Link to="/resume" className="navLinks" id="navLinks">Resume</Link>
//                     <Link to="/blogPage" className="navLinks" id="navLinks">Blog</Link>
//                 </div>
//                 <div className="flex flex-row items-center pr-9 space-x-2">
//                     < ThemeToggleBtn />
//                     < Translation />
//                 </div>
//         </div>
//                     {config.apiUrl.includes('localhost') && (
//                         <div className="text-red-500">
//                             Dev Mode : {config.apiUrl}
//                         </div>
//                     )}

//                 <div className="md:hidden fixed top-9 left-2">
//                     <button
//                         onClick={toggleMenu}
//                         className="font-bold py-2 px-3 rounded-full shadow-lg focus:outline-none focus:shadow-outline"
//                         id="humburgerMenu"
//                     >
//                         {isMenuOpen ? <CopyMinus /> : <Logs />}
//                     </button>
//                 </div>

//                 {isMenuOpen && (
//                 <div className="md:hidden fixed top-16 left-4 m-2 bg-gray-900 border border-gray-300 rounded-lg shadow-lg">
//                     <div className="p-4 flex flex-col space-y-4 items-center justify-center">
//                         <Link to="/" className="navLinks" id="navLinks" onClick={() => setIsMenuOpen(false)} >Portfolio</Link>
//                             <Link to="/work" className="navLinks" id="navLinks" onClick={() => setIsMenuOpen(false)}>Work</Link>
//                                 <Link to="/resume" className="navLinks" id="navLinks"onClick={() => setIsMenuOpen(false)}>Resume</Link>
//                         <Link to="/blogPage" className="navLinks" id="navLinks" onClick={() => setIsMenuOpen(false)}>Blog</Link>
//                         <Link to="/contact" className="navLinks" id="navLinks" onClick={() => setIsMenuOpen(false)}>Contact</Link>
//                             < ThemeToggleBtn className="items-center" id='navLinks' />
//                         < Translation className="items-center" id='navLinks'/>
//                     </div>
//                 </div>
//                 )}

//             {/* {isMenuOpen && (
//                 <div className="md:hidden rounded-lg mt-3 p-3 flex flex-col space-y-4 items-center bg-gray-50">
//                     <Link to="/" className="navLinks" id="navLinks">
//                         Portfolio
//                     </Link>
//                     <Link to="/work" className="navLinks" id="navLinks">
//                         Work
//                     </Link>
//                 < ThemeToggleBtn className="items-center" />
//                 < Translation className="items-center"/>
//                 </div>
//             )} */}

//         </nav>
//     );
// };

// export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ThemeToggleBtn from '../ThemeToggleBtn/ThemeToggleBtn';
import Translation from '../Translation/Translation';
import config from '../../Config';
import {
    PanelsTopLeft,
    X,
    Code2,
    User,
    FileText,
    BookOpen,
    Mail,
} from 'lucide-react';
import ThemeContext from '../../components/ThemeContext/ThemeContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { theme } = React.useContext(ThemeContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="p-6 bg-transparent fixed w-full z-10 top-0">
            {/* Desktop Menu - Unchanged */}
            <div className="hidden md:flex flex-row items-center justify-between">
                <div className="font-bold text-xl">
                    <Link
                        to="/"
                        className="font-bold text-xl hover:text-yellow-500"
                    >
                        Portfolio
                    </Link>
                </div>
                <div className="space-x-4">
                    <Link to="/work" className="navLinks" id="navLinks">
                        My Work
                    </Link>
                    <Link to="/resume" className="navLinks" id="navLinks">
                        Resume
                    </Link>
                    <Link to="/blogPage" className="navLinks" id="navLinks">
                        Blog
                    </Link>
                </div>
                <div className="flex flex-row items-center pr-9 space-x-2">
                    <ThemeToggleBtn />
                    <Translation />
                </div>
            </div>

            {config.apiUrl.includes('localhost') && (
                <div className="text-red-500">Dev Mode : {config.apiUrl}</div>
            )}

            {/* Mobile Header */}
            <div className="md:hidden flex justify-between items-center">
                <div className="font-bold text-xl">
                    <Link
                        to="/"
                        className="font-bold text-xl hover:text-yellow-500"
                    >
                        Portfolio
                    </Link>
                </div>
                <button
                    onClick={toggleMenu}
                    className="p-3 rounded-md border-2 border-gray-300 dark:border-gray-600 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                    {isMenuOpen ? <X size={20} /> : <PanelsTopLeft  size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div
                        className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[90vw] z-50 
                        ${theme ? 'bg-gray-900' : 'bg-white'}
                        dark:bg-gray-900 shadow-xl overflow-y-auto`}
                    >
                        {/* Menu Header */}
                        <div
                            className={`sticky top-0 
                            ${theme ? 'bg-gray-900' : 'bg-white'}
                            border-b border-gray-200 dark:border-gray-700 p-6`}
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <Code2
                                        size={24}
                                        className="text-yellow-500"
                                    />
                                    <h1
                                        className={`text-xl font-bold 
                                        ${
                                            theme
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        Navigation
                                    </h1>
                                </div>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                                >
                                    <X
                                        size={20}
                                        className="text-gray-500 dark:text-gray-400"
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <div className="flex flex-col min-h-full">
                            {/* Main Navigation */}
                            <div className="flex-1 px-6 py-8">
                                <nav className="space-y-6">
                                    {[
                                        {
                                            to: '/',
                                            label: 'Portfolio',
                                            icon: User,
                                            desc: 'About me & overview',
                                        },
                                        {
                                            to: '/work',
                                            label: 'My Work',
                                            icon: Code2,
                                            desc: 'Projects & developments',
                                        },
                                        {
                                            to: '/resume',
                                            label: 'Resume',
                                            icon: FileText,
                                            desc: 'Experience & skills',
                                        },
                                        {
                                            to: '/blogPage',
                                            label: 'Blog',
                                            icon: BookOpen,
                                            desc: 'Thoughts & tutorials',
                                        },
                                        {
                                            to: '/contact',
                                            label: 'Contact',
                                            icon: Mail,
                                            desc: 'Get in touch',
                                        },
                                    ].map((item, index) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <Link
                                                key={index}
                                                to={item.to}
                                                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group border border-transparent hover:border-yellow-500/20"
                                                onClick={() =>
                                                    setIsMenuOpen(false)
                                                }
                                            >
                                                <div className="flex-shrink-0 p-2 rounded-md bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors duration-200">
                                                    <IconComponent
                                                        size={20}
                                                        className="text-yellow-500"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h3
                                                        className={`font-semibold 
                                                        ${
                                                            theme
                                                                ? 'text-white'
                                                                : 'text-gray-900'
                                                        }
                                                        group-hover:text-yellow-500 transition-colors duration-200`}
                                                    >
                                                        {item.label}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>

                            {/* Settings Section */}
                            <div
                                className={`border-t border-gray-200 dark:border-gray-700 p-6 
                            ${theme ? 'bg-gray-900' : 'bg-white'}`}
                            >
                                <h3
                                    className={`text-sm font-semibold 
                                    ${theme ? 'text-gray-300' : 'text-gray-700'}
                                    mb-4 uppercase tracking-wider`}
                                >
                                    Settings
                                </h3>
                                <div className="space-y-4">
                                    <div
                                        className={`flex items-center justify-between p-3 rounded-lg 
                                    bg-white dark:bg-gray-800
                                    border border-gray-200 dark:border-gray-700`}
                                    >
                                        <div>
                                            <span className="font-medium text-gray-900 dark:text-white">
                                                Theme
                                            </span>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Light / Dark mode
                                            </p>
                                        </div>
                                        <ThemeToggleBtn />
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                                        <div>
                                            <span className="font-medium text-gray-900 dark:text-white">
                                                Language
                                            </span>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Choose language
                                            </p>
                                        </div>
                                        <Translation />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            
        </nav>
    );
};

export default Header;
