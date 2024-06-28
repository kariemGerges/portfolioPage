import React, { useEffect, useState } from "react";
import './Contact.css';
import logo from '../../assets/contact me phone2.png';
import logo2 from '../../assets/contact.png';
import From from "../../components/form/Form";
import useEmailSender  from '../../Hooks/useEmailSender'
import PdfDownloader from "../../components/PdfDownloader/PdfDownloader";
// import guideMeImg from '../../assets/Guide Me.png';

const Contact = () => {

    const [params, setParams] =useState({});
    const { sendDataToServer } = useEmailSender(params.FirstName, params.LastName, params.Email, params.Message);

    useEffect (() => {
        document.body.classList.add('no-background');
        return () => {
            document.body.classList.remove('no-background');
        }
    }, []);


    return (
        <div className="flex flex-col">

            <div className="flex-1">
                <img src={logo2} className ="imgCOntact" alt="contact logo with a design" />
            </div>

                <div className="flex flex-col md:flex-row">

                    <div className="w-full p-4">
                    
                        < From 
                            onSearch={(FirstName, LastName, Email, Message) => setParams({FirstName, LastName, Email, Message})}
                        />
                        < PdfDownloader />
                    </div>

                    <div className="w-full p-4">
                        <img src={logo} className ="imgPhone" alt="Contact me logo" />  
                    </div>
            </div>
        </div>
    );
};
export default Contact;


// w-full h-auto object-contain 