// import axios lb
const axios = require('axios');

axios.get('https://wwwwww.google.com')
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err)
    })
    .then(() => {
        console.log("All done!")
    })