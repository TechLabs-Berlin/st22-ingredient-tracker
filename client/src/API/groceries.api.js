import axios from 'axios';

export const getGroceries = async () => {
    try {
        const foundGroceries = await axios.get('http://localhost:5000/groceries/current', { withCredentials: true });
        console.log(`Received groceries: ${JSON.stringify(foundGroceries.data.groceries)}`);
        return foundGroceries;
    } catch (error) {
        console.log(error);
    }
};