// A LITTLE WEB SERVICE IN NODE

const express = require('express');
const path    = require('path');

const app = express();
app.listen(5000);

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/app.html'));
});

app.get('/users', function(req, res) {
    res.json([
        {name: 'godofredo'},
        {name: 'filomeno'},
        {name: 'maciel'}
    ]);
});

