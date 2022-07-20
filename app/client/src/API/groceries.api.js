import axios from 'axios';

// ---------------------------------------------------------------- userId in calls
// export const getGroceries = async (userId) => {
export const getGroceries = async () => {
    try {        
        // const foundGroceries = await axios.get(`http://localhost:5000/groceries/${userId}/current`, { withCredentials: true });
        const foundGroceries = await axios.get(`http://localhost:5000/groceries/current`, { withCredentials: true });
        // console.log(`Received groceries`);
        return foundGroceries;
    } catch (error) {
        console.log(error);
    }
};