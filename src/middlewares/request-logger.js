module.exports = (req, res, next) => {
    const { method, path, ip } = req;
    console.log(method, path, '-', ip);
    next();
}