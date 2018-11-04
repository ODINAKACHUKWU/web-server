const express = require('express');
const app = express();
const PORT = 3000;

const middleware = {
    requireAuthentication: (req, res, next) => {
        console.log('private route hit!');
        next();
    },
    logger: (req, res, next) => {
        const date = new Date();
        console.log(`Request: ${date} ${req.method} ${req.originalUrl}`);
        next();
    }
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, (req, res) => {
    res.send("About Us!");
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, (req, res, next) => {
    console.log(`Express server started on port ${PORT}!`);
});