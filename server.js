const axios = require("axios");
const params = { 'a': 3, 'b': 7 };

axios({
    method: 'post',
    url: 'https://relay14-server.herokuapp.com/',
    data: params
}).then((response) => {
    console.log(response.data);
}, (error) => {
    console.log(error);
});;