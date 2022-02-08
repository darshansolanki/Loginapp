import axios from 'axios';

let headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-UserType': 'USER',
    'X-SourceID': 'WEB',
    'X-ClientLocalIP': 'CLIENT_LOCAL_IP',
    'X-ClientPublicIP': 'CLIENT_PUBLIC_IP',
    'X-MACAddress': 'MAC_ADDRESS',
    'X-PrivateKey': '7ro6foX2'
  }

const signIn = (clientcode, password) => {
    axios.post('https://apiconnect.angelbroking.com/rest/auth/angelbroking/user/v1/loginByPassword', {"clientcode": clientcode ,  "password":password}, {headers: headers})
} 
export default {signIn}

// export default {login}

// var data = JSON.stringify({
//   "clientcode":"NNUW1001",
//   "password":"Swami@012"
// });

// var config = {
// method: 'post',
// url: 'https://apiconnect.angelbroking.com/rest/auth/angelbroking/user/v1/loginByPassword',

// headers : {
//   'Content-Type': 'application/json',
//   'Accept': 'application/json',
//   'X-UserType': 'USER',
//   'X-SourceID': 'WEB',
//   'X-ClientLocalIP': 'CLIENT_LOCAL_IP',
//   'X-ClientPublicIP': 'CLIENT_PUBLIC_IP',
//   'X-MACAddress': 'MAC_ADDRESS',
//   'X-PrivateKey': '7ro6foX2'
// },
// data : data
// };

// axios(config)
// .then(function (response) {
// console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
// console.log(error);
// });
 


