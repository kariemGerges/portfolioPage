const dev = { apiUrl: 'http://localhost:3000' };

const prod = { apiUrl: 'https://kariemportfolio-backend.onrender.com' };


const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default {
    ...config
};