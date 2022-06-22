import axios from 'axios';

export const getDemoData = async () => {
    try {
        const demo = await axios.get('http://localhost:5000/api');
        return demo;
    } catch (error) {
        console.log(error);
    }
};

// export const getDemoData = async () => {
//     try {
//         const demo = await axios.get('http://localhost:8080/demo');
//         return demo;
//     } catch (error) {
//         console.log(error);
//     }
// }