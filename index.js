let express = require("express");

let app = express();

app.listen(process.env.PORT, function () {
    console.log("App is running on port");
});

app.get("/", function (req, res) {
    res.sendfile("index.html");
});






