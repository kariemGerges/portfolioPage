import { useState } from "react";
import config from "../Config";

const useGoogleSignInFetcher = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const checkIfServerError = (url) => {
        fetch(url, {
            method: 'HEAD',
            mode: 'no-cors',
        })
            .then( response => {
                if (response.ok) {
                    window.location.href = url;
                } else {
                    window.location.href = "https://kariemgerges.github.io/portfolioPage/#/ErrLandingPage"; // client side
                    // window.location.href = `${config.apiUrl}/ErrLandingPage`; // server side
                }
            })
    };

    const signInWithGoogle = ()=> {
        setLoading(true);
        setError(null);
        try{
            checkIfServerError("https://kariemportfolio-backend.onrender.com/api/v1/auth/google");
            // checkIfServerError(`${config.apiUrl}/api/v1/auth/google`);
        }
        catch(error){
            setError(error);
            setLoading(false);
        }
    }
    return { signInWithGoogle, loading, error };

};

export default useGoogleSignInFetcher;