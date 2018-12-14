var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/api/tables', function (res, req) {
    return res.json();
});

app.get('/api/waitlist', function (res, req) {
    return res.json();
});

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT)
});