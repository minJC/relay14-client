let express = require("express");
const axios = require("axios");
let app = express();

app.listen(process.env.PORT, function () {
    console.log("App is running on port");
});

app.get("/", function (req, res) {
    res.sendfile("index.html");
});



const params = { 'a': 1, 'b': 2 };

axios.post("https://relay14-server.herokuapp.com/",params)
.then((response) => {
    console.log(response);
}, (error) => {
    console.log(error);
});

