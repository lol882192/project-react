import axios from 'axios';

const baseURL = process.env.REACT_APP_RENDER_URL || 'https://your-service.onrender.com';

export default axios.create({
    baseURL: "https://portfolio-api-1zj4.onrender.com"
});
