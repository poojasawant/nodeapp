
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/showUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "stories.json", 'utf8', function (err, data) {
        stories = JSON.parse( data );
        //var user = stories['title'];
        console.log( stories);
        res.end( JSON.stringify(stories));
    });
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)

})