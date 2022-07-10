import axios from 'axios';

export async function postDemoData() {

  let payload = { name: 'John Doe', occupation: 'gardener' };

  let res = await axios.get('http://localhost:5000/users', payload);

  let data = res.data;
  console.log(data);
}

// export const postDemoData = async () => {
//   axios.post('http://localhost:5000/users', {
//     firstName: 'Finn',
//     lastName: 'Williams'
//   })
//   .then((response) => {
//     console.log(response);
//     console.log('Post request sent successfully');
//   }, (error) => {
//     console.log(error);
//     console.log('Post request not sent');
//   });
// };

// // send a POST request
// axios({
//     method: 'post',
//     url: 'http://localhost:5000/users',
//     data: {
//       firstName: 'Finn',
//       lastName: 'Williams'
//     },
//     validateStatus: (status) => {
//       return true; 
//     },
//   }).catch(error => {
//       console.log(error);
//   }).then(response => {
//       console.log(response);
//   });


  // axios.post('/login', {
  //   firstName: 'Finn',
  //   lastName: 'Williams'
  // })
  // .then((response) => {
  //   console.log(response);
  // }, (error) => {
  //   console.log(error);
  // });