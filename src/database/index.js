const mongoose = require('mongoose');

module.exports = {
    mongoose,
    connect: (uri) => {
        if (!uri) {
            throw new Error('MONGODB CONNECTION FAILED. You need pass a valid MONGODB URI in a .env file/index.js')
        }

        mongoose.connect(uri, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }, (err) => {
            if (err) {
                console.error(err.name, ':', err.message);
            } else {
                console.log('MONGODB CONNECTED');
            }
        })

    },
    disconnect: (done) => {
        mongoose.disconnect((done) => {
            console.log('MONGODB DISCONNECTED');
        });
    }
}