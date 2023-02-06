const authorize = (req, res, next) => {
    const {user} = req.query;
    if (user === 'Francesca') {
        req.user = { name: 'Francesca'};
        next();
    } else {
        res.status(401).send('You are not authorized');
    }
};

module.exports = authorize;