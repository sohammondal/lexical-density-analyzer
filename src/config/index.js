require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    db: {
        url: process.env.MONGODB_BASE_URI,
        user: process.env.MONGODB_USER,
        pass: process.env.MONGODB_PASS
    }
}