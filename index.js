const app = require('./src/app');
const { env, port, db } = require('./src/config');
const { connect, mongoose, disconnect } = require('./src/database');

try {

    connect(db.url); // Connect to MongoDB
    mongoose.set('debug', env === "DEV"); // Set Debug mode in DEV 

    //Start the server
    if (port) {
        const listener = app.listen(port, (err) => {
            console.log('SERVER LISTENING ON PORT ' + listener.address().port);
        })
    } else {
        throw new Error('Pass a free port in the .env file')
    }


} catch (e) {
    console.error('ERROR:', e.message);
    disconnect();
    process.exit(1);
}