import axios from 'axios';
import { api_url } from '../../config/config.js'; // If you're using a separate config file

export default async (req, res) => {
    try {
        const { currentPage,  searchTerm } = req.query;
        const token = req.headers.authorization?.replace('Bearer ', '');
        // if (!token) {
        //     return res.status(401).json({ error: 'Unauthorized', message: 'Authorization header not found' });
        // }

        const response = await axios.get(`${api_url}/Student/student?page=${currentPage}&search=${searchTerm}`, {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        });

        res.status(response.status).json(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
