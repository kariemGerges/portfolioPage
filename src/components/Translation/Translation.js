import React, { useState } from "react";
// import { useTranslation  } from "react-i18next";
import i18n from "i18next";


const Translation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const { t, i18n } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const changeLanguageTo = (lng) => {
        i18n.changeLanguage(lng);
        setIsMenuOpen(false);
        console.log(`Language changed to teez ${lng}`);

    };


    return (
        <div className="relative">
            <div>
                <button 
                        type="button" 
                        onClick={toggleMenu} 
                        id="navLinks" 
                        aria-expanded={isMenuOpen} 
                        aria-haspopup="true"
                    >
                        Translate
                    {/* <svg className="-mr-1 ml-5 h-4 w-9 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg> */}
                </button>
            </div>

        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            {isMenuOpen && (
                <div className="py-1 mt-1 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5" role="none">
                    <button 
                        onClick={() => changeLanguageTo('en')}
                        className="text-sm px-4 py-2" 
                        role="menuitem" 
                        tabindex="-1" 
                        id="navLinks">English
                    </button>
                    <button 
                            onClick={() => changeLanguageTo('ar')}
                            className="text-sm px-4 py-2" 
                            role="menuitem" 
                            tabindex="-1" 
                            id="navLinks">العربية
                    </button>
                    <button 
                        onClick={() => changeLanguageTo('es')}
                        className="text-sm px-4 py-2" 
                        role="menuitem" 
                        tabindex="-1" 
                        id="navLinks">Español
                    </button>
                </div>
                )}
            </div>  
        </div>
    )
};

export default Translation;
