var express = require('express')
var app = express();
app.get('/', function(req, res) {
    res.send('Hello, World!\n');

});

app.listen(8080, function() {
    console.log("Hello world\n");
});

module.exports = app;

