// Backend APIs return HTTP 401 if session is inactive. When frontend sees that, it directs user to login. 
// An API to return current session user ID?

import axios from 'axios';

export const getUserBySession = async () => {
    try {        
        // const foundGroceries = await axios.get(`http://localhost:5000/groceries/${userId}/current`, { withCredentials: true });
        console.log('Finding user...');
        const foundUser = await axios.get(`http://localhost:5000/user/current`, { withCredentials: true });
        console.log(foundUser);
        return foundUser;
    } catch (error) {
        console.log(error);
    }
};