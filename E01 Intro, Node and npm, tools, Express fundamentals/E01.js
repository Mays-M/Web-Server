import os from 'os';
//1. Find out the current user by using console.log() to log the global process variable. [2p]
//const user = firebase.auth().currentUser;

//console.log(user.uid);
// require os module


// invoke userInfo() method
const userInfo = os.userInfo();

// get uid property
// from the userInfo object
const uid = userInfo.uid;

console.log("Current User : " ,userInfo); // 20


//2. Find out the system uptime and amount of total memory using the built-in `os` module. [2p]
// check system uptime 
const uptime = os.uptime(); 
console.log("System Uptime : ", uptime)
// check the total memory
const totalMemory = os.totalmem();

console.log("Total Memory : ", totalMemory)
//3. Create a basic web server with basic Node.js (based on the material and the provided examples),
// that will send back an `index.html` file on a GET request to '/'. The application should also send back the following json data on a GET request to '/data'. You might need to use JSON.stringify() to make this work. Notice also the content-type that you're sending back to the client. [3p]
//```js
//const jsondata = {count: 35, message: 'Welco