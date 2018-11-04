const middleware = {
    requireAuthentication: (req, res, next) => {
        console.log('private route hit!');
        next();
    },
    logger: (req, res, next) => {
        const date = new Date().toString();
        console.log(`Request: ${date} ${req.method} ${req.originalUrl}`);
        next();
    }
};

module.exports = middleware;