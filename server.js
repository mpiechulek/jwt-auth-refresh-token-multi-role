
const express = require('express');
const app = express();
const path = require('path');

// app.use(express.static(__dirname + '/dist/angular-jwt-refresh-tokens'));
app.use(express.static(__dirname + '/dist/angular-10-jwt-refresh-tokens-master'));

//aces when api segment is not in root
app.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname + '/dist/angular-10-jwt-refresh-tokens-master/index.html'));

});

// start server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {

    console.log('Server listening on port ' + PORT);

});
