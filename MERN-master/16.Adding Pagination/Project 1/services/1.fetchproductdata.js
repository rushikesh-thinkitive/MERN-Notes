const axios = require('axios');

const fetchData = async (url) => {
    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error to handle it at a higher level
    }
};

module.exports = fetchData;
