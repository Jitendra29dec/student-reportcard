import axios from 'axios';
import { api_url } from '../../config/config.js'; 

export default async (req, res) => {
    try {
        const { currentPage, itemsPerPage, searchTerm, student_id } = req.query;
        const token = req.headers.authorization?.replace('Bearer ', '');
       
        // if (!token) {
        //     return res.status(401).json({ error: 'Unauthorized', message: 'Authorization header not found' });
        // }
        const response = await axios.get(`http://localhost/student-report-api/index.php/Student/studenttProfile?student_id=${student_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
