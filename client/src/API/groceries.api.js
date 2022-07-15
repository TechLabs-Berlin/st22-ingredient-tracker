import axios from 'axios';

export const getGroceries = async () => {
    try {
        const groceries = await axios.get('http://localhost:5000/groceries/current');
        console.log(groceries);
        return groceries;
    } catch (error) {
        console.log(error);
    }
};