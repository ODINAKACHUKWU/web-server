const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, (req, res) => {
    res.send("About Us!");
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, (req, res, next) => {
    console.log(`Express server started on port ${PORT}!`);
});