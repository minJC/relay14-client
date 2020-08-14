const axios = require("axios");
const params = { 'a': 1, 'b': 2 };

// axios.post("https://relay14-server.herokuapp.com/", params)
//     .then((response) => {
//         console.log(response);
//     }, (error) => {
//         console.log(error);
//     });

axios({
    method: 'post',
    url: 'https://relay14-server.herokuapp.com/',
    data: params
}).then((response) => {
    console.log(response);
}, (error) => {
    console.log(error);
});;