var express = require('express');

var app = express();

//Routes

//Home
app.get('/', function(req, res) {
res.send("<h2>This is a server respons on a home page</h2>")
});

//car-heart_single
app.get('/star_wars_episode/:episode_number?', function(req, res) {
var episode_number = req.params.episode_number;
res.send("this is the page for episode " + episode_number);
});

//NotFound
app.get('*', function(req, res) {
res.send("this is not the page you are looking for");
});

app.listen(3000, function(){
console.log("The application is runing on localhost:3000");
});