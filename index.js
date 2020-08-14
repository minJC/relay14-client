let express = require("express");
const axios = require("axios");
const params = { 'a': 3, 'b': 7 };
let app = express();

app.listen(process.env.PORT, function () {
    console.log("App is running on port");
});

app.get("/", function (req, res) {
    axios({
        method: 'post',
        url: 'https://relay14-server.herokuapp.com/',
        data: params
    }).then((response) => {
        res.send(response.data);
    }, (error) => {
        console.log(error);
    });;
    res.sendfile("index.html");
});








