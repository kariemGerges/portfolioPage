import { useState, useEffect } from "react";
import axios from "axios";

const useUserInfoFetcher = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://kariemportfolio-backend.onrender.com/api/v1/current_user", { withCredentials: true });
                // const response = await axios.get("http://localhost:3000/api/v1/current_user", { withCredentials: true });
                setUserInfo(response.data.user);
                console.log("user information "+response.data.user);
                //console.log(JSON.stringify(response.data) + " from useUserInfoFetcher");
                //console.log(`the whole response ${JSON.stringify(response)}`);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching user info:", error); // Log the error for debugging
                setError(error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return { userInfo, isLoading, error };
};

export default useUserInfoFetcher;
