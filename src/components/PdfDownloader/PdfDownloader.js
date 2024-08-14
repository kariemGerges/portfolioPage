import React from "react";
import resume from "../../Style/Kariem_Gerges_Resmue.pdf";
const PdfDownloader = () => {

    return (
        <div>

            <a 
                href={resume} 
                download="Kariem_Gerges_Resume.pdf"
                className="nav-link px-2 hover:text-white navLinks"
                target="_blank"
                rel="noopener noreferrer"
                id="navLinks"
            >
                <button>Download Resume</button>
            </a>
        </div>
    )
};

export default PdfDownloader;
