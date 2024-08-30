import React, { useState } from "react";
import i18n from "i18next";
import { Languages } from 'lucide-react';



const Translation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const { t, i18n } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const changeLanguageTo = (lng) => {
        i18n.changeLanguage(lng);
        setIsMenuOpen(false);
    };


    return (
        <div className="">
            <div className="mb-4">
                <button 
                        type="button" 
                        onClick={toggleMenu} 
                        id="navLinks" 
                        aria-expanded={isMenuOpen} 
                        aria-haspopup="true"
                    >
                    <Languages />
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
