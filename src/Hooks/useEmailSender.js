import { useState, useEffect } from "react";
import axios from "axios";


const useEmailSender = (FirstName, LastName, Email, Message) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState({});

    useEffect(() => {

        if (!FirstName || !LastName || !Email || !Message) {
            return;
        };

        const sendDataToServer = async () => {
            const data = { 
                "FirstName": FirstName,
                "LastName": LastName,
                "email" : Email,
                "message": Message 
            };
            setLoading(true);
            try {
                // const response = await axios.post(`${config.apiUrl}/api/v1/sendNew`, data);
                // both api calls prod and dev
                const response = await axios.post("https://kariemportfolio-backend.onrender.com/api/v1/sendNew", data);
                // const response = await axios.post("http://localhost:3000/api/v1/sendNew", data);

                if (response.status === 200) {
                    setLoading(false);
                    setError(null);
                    setData(response.data);
                    alert("Your message has been sent successfully");
                }
            } catch (error) {
                setError(error);
                setLoading(false);
            }    
        };
        sendDataToServer();
        if (error) {
            console.log(error); 
        }
        
    }, [FirstName, LastName, Email, Message]);

    return { loading, error, data };

};

export default useEmailSender;

