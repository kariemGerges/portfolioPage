import React, { useContext } from 'react';
import ThemeContext  from '../ThemeContext/ThemeContext';


const ThemeToggleBtn = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button
            className=""
            onClick={toggleTheme}
            id='navLinks'
        >
            {theme === 'light' ? '🌜' : '🌞'} Mode
        </button>
    );
};

export default ThemeToggleBtn;

