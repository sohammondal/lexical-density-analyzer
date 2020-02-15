module.exports = (req, res, next) => {
    console.log('TIME -', new Date().toUTCString());
    next();
}