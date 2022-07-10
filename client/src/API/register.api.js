import axios from 'axios';

const reactData = [username, email, password];
const url = 'localhost:5000/api/users/signup';

export const postUserRegistrationData = (reactData) => {
    axios.post(url, reactData)
        .then(res => console.log(`Data sent: ${res.data}`))
        .catch(err => console.log(`Error: ${err.data}`));
}