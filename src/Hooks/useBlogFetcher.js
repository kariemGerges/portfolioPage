import { useState, useEffect } from "react";
import axios from "axios";

const useBlogFetcher = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Check if data is already cached in session storage
                const cachedData = sessionStorage.getItem('blogData');
                
                if (cachedData) {
                    // Use the cached data if available
                    const parsedData = JSON.parse(cachedData);
                    setBlogData(parsedData);
                    setLoading(false);
                } else {
                    // Fetch data from API if not cached
                    const response = await axios.get('https://kariemportfolio-backend.onrender.com/api/v1/posts');
                    // const response = await axios.get('http://localhost:3000/api/v1/posts');

                    
                    if (response.status === 200 && Array.isArray(response.data) && response.data.length > 0) {
                        setBlogData(response.data);
                        sessionStorage.setItem('blogData', JSON.stringify(response.data));
                    }
                    setLoading(false);
                }
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { loading, error, blogData };
};

export default useBlogFetcher;
