const express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
    console.log("server is running on port 3000");
});


app.get('/', function (req, res) {

    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {

    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.email;

    console.log(firstName, lastName, email);
})

