import { useState } from "react";

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
                    window.location.href = "http://localhost:3001/errorPage"; // client side
                }
            })
    };

    const signInWithGoogle = ()=> {
        setLoading(true);
        setError(null);
        try{
            checkIfServerError("http://localhost:3000/api/v1/auth/google");
        }
        catch(error){
            setError(error);
            setLoading(false);
        }
    }
    return { signInWithGoogle, loading, error };

};

export default useGoogleSignInFetcher;